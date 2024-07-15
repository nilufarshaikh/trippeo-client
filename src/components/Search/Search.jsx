import { useState } from "react";
import axios from "axios";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Search.scss";
import Follow from "../Follow/Follow";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const searchUserURL = `${
      import.meta.env.VITE_API_URL
    }/auth/search?query=${searchQuery}`;

    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(searchUserURL, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchInput = async (e) => {
    const search = e.target.value;
    setSearchQuery(search);
    const searchUserURL = `${
      import.meta.env.VITE_API_URL
    }/auth/search?query=${search}`;

    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(searchUserURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("There was an error submitting the story:", error);
    }
  };

  const handleCloseSearch = () => {
    setIsMobileSearchActive(false);
    setSearchQuery("");
    setSearchResults([]);
    console.log("here");
    navigate("/home");
  };

  const handleMobileSearchToggle = () => {
    setIsMobileSearchActive(!isMobileSearchActive);
  };

  return (
    <div className="search-container">
      <div className="search-icon" onClick={handleMobileSearchToggle}>
        <SearchOutlinedIcon className="search-form__icon navbar__icons" />
      </div>

      <form className="search-input desktop" onSubmit={handleSearchSubmit}>
        <div className="search-inputs">
          <input
            className="search-form__input"
            type="text"
            placeholder="Search for users..."
            name="search"
            id="search"
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-form__button">Search</button>
        </div>
      </form>

      {isMobileSearchActive && (
        <div className="mobile-search-form">
          <input
            type="text"
            className="search-input mobile"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInput}
          />
          <button className="close-btn" onClick={handleCloseSearch}>
            X
          </button>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="search-results">
          <div className="close-btn close-btn--desktop">
            <button className="close-btn" onClick={handleCloseSearch}>
              Close
            </button>
          </div>
          <div className="search-results__box">
            {searchResults.map((user, index) => (
              <div key={index} className="search-result-item">
                <div key={user._id} className="user-card">
                  <div className="avatar search-avatar">
                    <img
                      className="avatar__image"
                      src={user.profilePicture}
                      alt="Profile photo"
                    />
                  </div>
                  {user.username}
                  <Follow followeeId={user._id} followers={user.followers} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
