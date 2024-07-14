import "./CreateStoryPage.scss";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import CreateStory from "../../components/CreateStory/CreateStory";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import Navigation from "../../components/Navigation/Navigation";

const CreateStoryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

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
