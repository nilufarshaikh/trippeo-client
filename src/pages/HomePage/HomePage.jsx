import "./HomePage.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Feed from "../../components/Feed/Feed";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Navigation from "../../components/Navigation/Navigation";

const HomePage = () => {
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
    <>
      <main className="home">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </main>
      <Navigation />
    </>
  );
};

export default HomePage;
