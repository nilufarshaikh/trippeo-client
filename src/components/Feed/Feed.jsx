import avatar from "../../assets/images/default.jpg";
import travelerImg4 from "../../assets/images/img4.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Feed.scss";

const Feed = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  const getAllFeedsURL = `${import.meta.env.VITE_API_URL}/api/stories`;
  const profileURL = `${import.meta.env.VITE_API_URL}/auth/profile`;
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const getAllFeeds = async () => {
      if (!token) {
        setFailedAuth(true);
        return;
      }

      try {
        const response = await axios.get(getAllFeedsURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllFeeds();
  }, [token]);

  if (failedAuth) {
    navigate("/login");

    return;
  }

  useEffect(() => {
    const getUsername = async () => {
      if (!token) {
        setFailedAuth(true);
        return;
      }

      try {
        const response = await axios.get(profileURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        sessionStorage.setItem("username", response.data.data.username);
      } catch (err) {
        console.log(err);
      }
    };

    getUsername();
  }, [token]);

  if (!stories) {
    return <p>Loading...</p>;
  }

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

  console.log(stories);

  return (
    <section className="feed">
      {stories.map((story, index) => (
        <article key={index} className="card">
          <div className="card__header">
            <div className="avatar avatar--feed">
              <img className="avatar__image" src={avatar} alt="Avatar" />
            </div>
            <div className="traveler">
              <span className="traveler__name">John Doe</span>
              <span className="traveler__posted-at">
                {formatRelativeTime(story.createdAt)}
              </span>
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <img
                className="card__img"
                src={story.photos[0]}
                alt="Traveler Photo"
              />
              <h2>{story.title}</h2>
              <p className="p-small">{story.description}</p>
            </div>
            <div className="">
              <div>
                <h3>Best time to visit:</h3>
                <p className="p-small">{story.bestTimeToVisit}</p>
              </div>
              <div>
                <h3>Places to see:</h3>
                <p className="p-small">{story.placesToVisit}</p>
                <div>
                  {/* <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" /> */}
                </div>
              </div>
              <div>
                <h3>Local foods to try:</h3>
                <p className="p-small">{story.foodsToTry}</p>
              </div>
              <div>
                <h3>Additional Notes or Tips:</h3>
                <p className="p-small">{story.tips}</p>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <div className="">
              <div className="stats">
                <div className="stats__info">
                  <FavoriteBorderOutlinedIcon className="stats__icon" />
                  <span>21 likes</span>
                </div>
                <div className="stats__info">
                  <ChatBubbleOutlineOutlinedIcon className="stats__icon" />
                  <span>4 comments</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Feed;
