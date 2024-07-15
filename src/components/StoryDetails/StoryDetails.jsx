import { React, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Slider from "react-slick";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./StoryDetails.scss";
import CommentForm from "../CommentForm/CommentForm";
import axios from "axios";

const StoryDetails = ({ story }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(story.comments);
  const [commentsLength, setCommentsLength] = useState(story.comments.length);
  const loggedInUserId = sessionStorage.getItem("userId");

  const handleSeeMore = () => {
    setShowDetails(!showDetails);
  };

  const handleAddShowComments = () => {
    setShowComments(!showComments);
  };

  const formatRelativeTime = (isoTimestamp) => {
    const now = new Date();
    const postDate = new Date(isoTimestamp);
    const elapsed = now - postDate;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  };

  const settings = {
    dots: true,
    infinite: story.photos.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleAddComment = (allComments) => {
    setComments(allComments);
    setCommentsLength(allComments.length);
  };

  const token = sessionStorage.getItem("token");
  const handleDeleteComment = async (commentId) => {
    const deleteCommentURL = `${import.meta.env.VITE_API_URL}/api/stories/${
      story._id
    }/comments/${commentId}`;

    try {
      await axios.delete(deleteCommentURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(comments.filter((comment) => comment._id !== commentId));
      setCommentsLength(comments.length);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <article className="card">
      <div className="card__header">
        <div className="avatar avatar--feed">
          <img
            className="avatar__image"
            src={story.userId.profilePicture}
            alt="Profile photo"
          />
        </div>
        <div className="traveler">
          <span className="traveler__name">{story.userId.username}</span>
          <span className="traveler__posted-at">
            {formatRelativeTime(story.createdAt)}
          </span>
        </div>
      </div>
      <div className="card__body">
        <div className="card__content">
          <div className="photo-carousel">
            <Slider {...settings}>
              {story.photos.map((photo, index) => (
                <div key={index}>
                  <img
                    src={photo}
                    alt={`Traveler Photo ${index + 1}`}
                    className="photo-carousel__image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <h2 className="card__title card__title--stories">{story.title}</h2>
          <div className="card__details">
            <p className="p-small card__desc">
              {story.description}
              <span className="p-small card__see-more" onClick={handleSeeMore}>
                {showDetails ? "...See Less" : "...See More"}
              </span>
            </p>
          </div>
        </div>
        {showDetails && (
          <div className="story-details">
            <div className="story-details__locations">
              <div className="story-details__info story-details__info--best-time">
                <h3>Best time to visit:</h3>
                <span className="p-small story-details__span-text">
                  {story.bestTimeToVisit}
                </span>
              </div>
              <div className="story-details__info story-details__info--places">
                <h3>Places to see:</h3>
                <ul className="p-small story-details__list">
                  {story.placesToVisit.map((place, index) => (
                    <li key={index} className="story-details__item">
                      <PinDropIcon />
                      <span className="story-details__span-text">{place}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="story-details__info story-details__info--food">
              <h3>Local foods to try:</h3>
              <p className="p-small">{story.foodsToTry}</p>
            </div>
            <div className="story-details__info story-details__info--tips">
              <h3>Additional Notes or Tips:</h3>
              <p className="p-small">{story.tips}</p>
            </div>

            <div className="itinerary">
              <h3>Itinerary Details</h3>
              <article className="itinerary__details">
                {story.itinerary.map((day, index) => (
                  <div className="itinerary__day" key={index}>
                    <p className="itinerary__day-count">Day {day.day}</p>
                    <ul>
                      {day.activities.map((activity, index) => (
                        <li className="itinerary__activity" key={index}>
                          {activity}
                        </li>
                      ))}
                    </ul>
                    {day.notes && (
                      <p className="p-small">
                        <span>Notes</span>: {day.notes}
                      </p>
                    )}
                  </div>
                ))}
              </article>
            </div>
          </div>
        )}
      </div>
      <div className="card__footer">
        <div>
          <div className="stats">
            <div className="stats__info">
              <FavoriteBorderOutlinedIcon className="stats__icon" />
              <span>0 likes</span>
            </div>
            <div className="stats__info" onClick={handleAddShowComments}>
              <ChatBubbleOutlineOutlinedIcon className="stats__icon" />
              <span>{commentsLength} Comments</span>
            </div>
          </div>
          <>
            <CommentForm storyId={story._id} onAddComment={handleAddComment} />
            {showComments && (
              <div className="story-comments">
                <div className="comment-list">
                  {comments.map((comment) => (
                    <div key={comment._id} className="comment-box">
                      <div className="avatar avatar--feed comment-box__avatar">
                        <img
                          className="avatar__image"
                          src={comment.userId.profilePicture}
                          alt="Profile photo"
                        />
                      </div>
                      <div className="comment-box__user-info">
                        <span>{comment.userId.username}</span>
                        <p className="p-small">{comment.comment}</p>
                      </div>
                      {comment.userId._id === loggedInUserId && (
                        <DeleteOutlineOutlinedIcon
                          className="comment-box__delete-icon"
                          onClick={() => handleDeleteComment(comment._id)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </article>
  );
};

export default StoryDetails;
