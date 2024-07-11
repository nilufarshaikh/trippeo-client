import "./Profile.scss";
import travelerImg from "../../assets/images/img0.jpg";
import travelerImg1 from "../../assets/images/img0.jpg";
import travelerImg2 from "../../assets/images/img1.jpg";
import travelerImg3 from "../../assets/images/img2.jpg";
import travelerImg4 from "../../assets/images/img3.jpg";
import travelerImg5 from "../../assets/images/img4.jpg";

import avatar from "../../assets/images/mohan-muruge.jpg";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Gallery from "../Gallery/Gallery";

const Profile = () => {
  const photos = [
    { url: travelerImg2, alt: "Photo 2" },
    { url: travelerImg3, alt: "Photo 3" },
    { url: travelerImg4, alt: "Photo 4" },
    { url: travelerImg5, alt: "Photo 5" },
  ];

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
            src={avatar}
            alt="Profile"
          />
        </div>
        <h2 className="profile-page__name">Mohan Muruge</h2>
        <div className="profile-page__bio-box">
          <p className="profile-page__bio">📸 Content creator and Film maker</p>
          <p className="profile-page__bio">📍 Toronto, ON</p>
        </div>
      </div>
      <div className="profile-tabs">
        <div className="profile-tabs__type">
          <h2>140</h2>
          <p>Stories</p>
        </div>
        <div className="profile-tabs__type">
          <h2>112</h2>
          <p>Followers</p>
        </div>
        <div className="profile-tabs__type">
          <h2>120</h2>
          <p>Following</p>
        </div>
      </div>
      <div className="profile-content">
        <Gallery photos={photos} />
      </div>
    </section>
  );
};

export default Profile;
