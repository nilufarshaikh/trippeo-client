import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import avatar from "../../assets/images/mohan-muruge.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import "./Navigation.scss";
import { useState } from "react";

const Navigation = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <HomeOutlinedIcon
        className="navbar__icons"
        onClick={() => setCurrentPage("feed")}
      />
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
      <AddOutlinedIcon className="navbar__icons navbar__icons--create-story-icon" />
      <NotificationsNoneOutlinedIcon className="navbar__icons" />
      <div className="profile" onClick={toggleDropdown}>
        <div className="profile__wrapper">
          <PermIdentityOutlinedIcon
            className="profile__icon"
            onClick={() => setCurrentPage("profile")}
          />
          <div className="profile__avatar avatar">
            <img className="avatar__image" src={avatar} alt="Avatar" />
          </div>
          <span className="profile__name">Mohan Muruge</span>
          <KeyboardArrowDownIcon className="profile__menu" />
          {isOpen && (
            <ul className="profile__menu-list">
              <li
                className="profile__menu-item"
                onClick={() => setCurrentPage("profile")}
              >
                Profile
              </li>
              <li className="profile__menu-item">Logout</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
