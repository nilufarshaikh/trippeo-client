import "./FlashMessage.scss";
import { useEffect } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const FlashMessage = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

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
