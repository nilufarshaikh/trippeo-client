import "./Follow.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Follow = ({ followeeId, followers }) => {
  const loggedInUserId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (followers.includes(loggedInUserId)) {
      setIsFollowing(true);
    }
  }, [loggedInUserId, followers]);

  const followUserURL = `${
    import.meta.env.VITE_API_URL
  }/users/${followeeId}/follow`;
  const unfollowUserURL = `${
    import.meta.env.VITE_API_URL
  }/users/${followeeId}/unfollow`;

  const handleFollow = async () => {
    try {
      const response = await axios.post(followUserURL, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsFollowing(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async () => {
    try {
      const response = await axios.post(unfollowUserURL, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsFollowing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={isFollowing ? handleUnfollow : handleFollow}
      className="user-card__btn"
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default Follow;
