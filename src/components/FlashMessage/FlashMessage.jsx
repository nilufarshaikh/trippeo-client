import "./FlashMessage.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const FlashMessage = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`flash-message ${type}`}>
      <p className="flash-message__text">{message}</p>
      <div className="flash-message__close-wrapper" onClick={onClose}>
        <CloseOutlinedIcon className="flash-message__close" />
      </div>
    </div>
  );
};

export default FlashMessage;
