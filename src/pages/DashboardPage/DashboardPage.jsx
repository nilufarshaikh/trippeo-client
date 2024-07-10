import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.scss";

const DashboardPage = () => {
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

  return <div>Dashboard</div>;
};

export default DashboardPage;
