import StoryDetails from "../StoryDetails/StoryDetails";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Feed.scss";

const Feed = () => {
  const [stories, setStories] = useState([]);
  const getAllFeedsURL = `${import.meta.env.VITE_API_URL}/api/stories`;
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchTravelStories = async () => {
      try {
        const response = await axios.get(getAllFeedsURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStories(response.data.stories);
      } catch (error) {
        console.error("Error fetching travel stories:", error);
      }
    };

    fetchTravelStories();
  }, []);

  const addComment = async (storyId, newComment) => {
    const addCommentURL = `${
      import.meta.env.VITE_API_URL
    }/api/stories/${storyId}/comments`;
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.post(
        addCommentURL,
        { comment: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddComment = async (storyId, newComment) => {
    console.log("storyId getting updated", storyId);
    const updatedComments = await addComment(storyId, newComment);
    setStories(
      stories.map((story) =>
        story._id === storyId ? { ...story, comments: updatedComments } : story
      )
    );
  };

  if (!stories) {
    return <p>Loading...</p>;
  }

  return (
    <section className="feed">
      {stories.map((story) => (
        <StoryDetails
          key={story._id}
          story={story}
          onAddComment={handleAddComment}
        />
      ))}
    </section>
  );
};

export default Feed;
