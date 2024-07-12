import "./LeftSideBar.scss";
import MessageIcon from "@mui/icons-material/MessageOutlined";
import SavedIcon from "@mui/icons-material/BookmarkBorder";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo/logo.png";

const LeftSideBar = () => {
  return (
    <nav className="left-sidebar">
      <div className="logo logo--header">
        {/* <p className="logo__title">Trippeo</p> */}
        <img src={logoImg} alt="Trippeo logo" />
      </div>
      <div className="left-sidebar__links">
        <Link to="/stories/add" className="left-sidebar__links--create-story">
          <div className="left-sidebar__item left-sidebar__item--create-story">
            <AddOutlinedIcon className="left-sidebar__icon left-sidebar__icon--create-story" />
            <span className="left-sidebar__content left-sidebar__content--create-story">
              Create Story
            </span>
          </div>
        </Link>
        <div className="left-sidebar__item">
          <SavedIcon className="left-sidebar__icon" />
          <span className="left-sidebar__content">Saved</span>
        </div>
        <div className="left-sidebar__item">
          <MessageIcon className="left-sidebar__icon" />
          <span className="left-sidebar__content">Messages</span>
        </div>
      </div>
    </nav>
  );
};

export default LeftSideBar;
