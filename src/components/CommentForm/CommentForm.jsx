import { useState } from "react";

const CommentForm = ({ onAddComment, storyId }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (newComment.trim()) {
      onAddComment(storyId, newComment);
      setNewComment("");
    }
  };

  return (
    <form className="story-comments__form" onSubmit={handleSubmitComment}>
      <textarea
        type="text"
        name="comment"
        id="comment"
        placeholder="Add a comment..."
        className="story-comments__textarea"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button className="story-comments__btn">Add</button>
    </form>
  );
};

export default CommentForm;
