import "./Profile.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StoryGallery from "../StoryGallery/StoryGallery";
import travelerImg from "../../assets/images/img0.jpg";
import defaultAvatar from "../../assets/images/default.jpg";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Profile = () => {
  const [travelStories, setTravelStories] = useState([]);
  const [failedAuth, setFailedAuth] = useState(false);
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);
  const getProfileURL = `${import.meta.env.VITE_API_URL}/auth/profile`;
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const getProfileData = async () => {
      if (!token) {
        setFailedAuth(true);
        return;
      }

      try {
        const response = await axios.get(getProfileURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data.user);
        setTravelStories(response.data.user.travelStories);
      } catch (error) {
        console.log(error);
      }
    };

    getProfileData();
  }, [token]);

  if (failedAuth) {
    navigate("/login");
    return;
  }

  if (!profile) {
    return <p>Loading</p>;
  }

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const photosArray = travelStories.map((story) => story.photos);

  return (
    <section className="profile-page">
      <div className="profile-page__cover">
        <img
          className="profile-page__cover-img"
          src={travelerImg}
          alt="Cover"
        />
      </div>
      <div className="profile-page__details">
        <div className="profile-page__avatar">
          <img
            className="profile-page__avatar-img"
            src={profile.profilePicture ?? defaultAvatar}
            alt="Profile"
          />
        </div>
        <h2 className="profile-page__name">{profile.username}</h2>
        <div className="profile-page__bio-box">
          <p className="profile-page__bio">📸 {profile.bio}</p>
          <p className="profile-page__bio">📍 {profile.location}</p>
        </div>
        <ExitToAppOutlinedIcon className="logout-btn" onClick={handleLogout} />
      </div>
      <div className="profile-tabs">
        <div className="profile-tabs__type">
          <h2>{profile.travelStoriesCount}</h2>
          <p>Stories</p>
        </div>
        <div className="profile-tabs__type">
          <h2>{profile.followers}</h2>
          <p>Followers</p>
        </div>
        <div className="profile-tabs__type">
          <h2>{profile.following}</h2>
          <p>Following</p>
        </div>
      </div>
      <div className="profile-content">
        {photosArray.map((photos, index) => (
          <StoryGallery
            key={index}
            images={photos.map((src) => ({ src, alt: `Image ${index}` }))}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
