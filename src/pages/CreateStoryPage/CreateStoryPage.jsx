import "./CreateStoryPage.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import CreateStory from "../../components/CreateStory/CreateStory";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Navigation from "../../components/Navigation/Navigation";

const CreateStoryPage = () => {
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
        <CreateStory />
        <RightSideBar />
      </div>
      <Navigation />
    </main>
  );
};

export default CreateStoryPage;
