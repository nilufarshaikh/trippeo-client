import { useState } from "react";
import axios from "axios";

const CommentForm = ({ storyId, onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleAddComments = async (e) => {
    e.preventDefault();

    const addCommentURL = `${
      import.meta.env.VITE_API_URL
    }/api/stories/${storyId}/comments`;
    const token = sessionStorage.getItem("token");
    const newComment = {
      comment: e.target.comment.value,
    };

    try {
      const response = await axios.post(addCommentURL, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComment("");
      onAddComment(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="story-comments__form" onSubmit={handleAddComments}>
      <textarea
        type="text"
        name="comment"
        id="comment"
        placeholder="Add a comment..."
        className="story-comments__textarea"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="story-comments__btn">Add</button>
    </form>
  );
};

export default CommentForm;
