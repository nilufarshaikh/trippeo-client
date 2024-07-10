import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import avatar from "../../assets/images/mohan-muruge.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navbar">
      <HomeOutlinedIcon className="navbar__icons" />
      <form className="search-form" id="searchForm">
        <SearchOutlinedIcon className="search-form__icon navbar__icons" />
        <input
          className="search-form__input"
          type="text"
          placeholder="Search..."
          name="search"
          id="search"
        />
        <button className="search-form__button">Search</button>
      </form>
      <div className="create-story">
        <AddOutlinedIcon className="navbar__icons create-story__icon" />
      </div>
      <NotificationsNoneOutlinedIcon className="navbar__icons" />
      <div className="profile">
        <div className="avatar">
          <img className="avatar__image" src={avatar} alt="Avatar" />
        </div>
        <span className="profile__name">Mohan Muruge</span>
        <KeyboardArrowDownIcon className="profile__more" />
      </div>
    </nav>
  );
};

export default Navigation;
