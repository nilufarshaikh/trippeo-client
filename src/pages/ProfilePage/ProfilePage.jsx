import "./ProfilePage.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Profile from "../../components/Profile/Profile";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Navigation from "../../components/Navigation/Navigation";

const ProfilePage = () => {
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
        <RightSideBar />
      </div>
      <Navigation />
    </main>
  );
};

export default ProfilePage;
