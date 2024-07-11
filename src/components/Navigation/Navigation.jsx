import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import avatar from "../../assets/images/mohan-muruge.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import "./Navigation.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link className="navbar__home-nav-link" to="/home">
        <HomeOutlinedIcon className="navbar__icons" />
      </Link>
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
      <div className="profile-nav" onClick={toggleDropdown}>
        <div className="profile-nav__wrapper">
          <Link className="profile-nav__menu-link" to="/profile">
            <PermIdentityOutlinedIcon className="profile-nav__icon" />
          </Link>
          <div className="profile-nav__avatar avatar">
            <img className="avatar__image" src={avatar} alt="Avatar" />
          </div>
          <span className="profile-nav__name">Mohan Muruge</span>
          <KeyboardArrowDownIcon className="profile-nav__menu" />
          {isOpen && (
            <ul className="profile-nav__menu-list">
              <Link className="profile-nav__menu-link" to="/profile">
                <li className="profile-nav__menu-item">Profile</li>
              </Link>
              <li className="profile-nav__menu-item">Logout</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
