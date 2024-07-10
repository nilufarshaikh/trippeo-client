import "./FlashMessage.scss";

const FlashMessage = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`flash-message ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default FlashMessage;
