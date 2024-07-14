import "./ProfilePage.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Profile from "../../components/Profile/Profile";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Navigation from "../../components/Navigation/Navigation";
import { Gallery } from "react-grid-gallery";

const ProfilePage = () => {
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
  ];
  const [failedAuth, setFailedAuth] = useState(false);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setFailedAuth(true);

      return;
    }
  }, [token]);

  if (failedAuth) {
    navigate("/login");

    return;
  }

  return (
    <main className="profile">
      <div className="container">
        <LeftSideBar />
        <Profile />
        <Gallery images={images} />
        <RightSideBar />
      </div>
      <Navigation />
    </main>
  );
};

export default ProfilePage;
