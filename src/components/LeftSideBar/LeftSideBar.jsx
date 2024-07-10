import "./LeftSideBar.scss";
import MessageIcon from "@mui/icons-material/MessageOutlined";
import SavedIcon from "@mui/icons-material/BookmarkBorder";

const LeftSideBar = () => {
  return (
    <nav className="left-sidebar">
      <div className="logo logo--header">
        <p className="logo__title">Trippeo</p>
      </div>
      <div className="left-sidebar__links">
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
