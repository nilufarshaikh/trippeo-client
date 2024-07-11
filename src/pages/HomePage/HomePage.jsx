import "./HomePage.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Feed from "../../components/Feed/Feed";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Navigation from "../../components/Navigation/Navigation";
import Profile from "../../components/Profile/Profile";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState("feed");
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
    <main className="home">
      <div className="container">
        <LeftSideBar />
        {currentPage === "feed" && <Feed />}
        {currentPage === "profile" && <Profile />}
        <RightSideBar />
      </div>
      <Navigation setCurrentPage={setCurrentPage} />
    </main>
  );
};

export default HomePage;
