import "./LoginPage.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { useState } from "react";
import validator from "validator";
import FlashMessage from "../../components/FlashMessage/FlashMessage";

const loginURL = `${import.meta.env.VITE_API_URL}/auth/login`;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [flashMessage, setFlashMessage] = useState({
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!validator.isEmail(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    return validationErrors;
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post(loginURL, formData);
      sessionStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      setFlashMessage({
        message: err.response.data.message,
        type: "error",
      });
    }
  };

  const closeFlashMessage = () => {
    setFlashMessage({ message: "", type: "" });
  };

  return (
    <main className="login onboarding">
      <FlashMessage
        message={flashMessage.message}
        type={flashMessage.type}
        onClose={closeFlashMessage}
      />
      <div className="login__wrapper onboarding__container">
        <form onSubmit={handleLogin} className="login__form" id="loginForm">
          <h1 className="login__heading">Sign In</h1>
          <div className="login__controls">
            <label className="login__label" htmlFor="email">
              Email
            </label>
            <input
              className="login__input"
              type="text"
              id="email"
              name="email"
              placeholder="eg. johndoe@email.com"
              autoComplete="on"
              value={formData.email}
              onChange={handleChange}
            />
            {submitted && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className="login__controls">
            <label className="login__label" htmlFor="password">
              Password
            </label>
            <input
              className="login__input"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
            {submitted && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>
          <div className="login__actions">
            <label className="login__label login__label--remember">
              <input
                className="login__input--remember"
                type="checkbox"
                name="remember"
                id="remember"
              />
              Remember me
            </label>
            <span className="login__link">Forgot Password?</span>
          </div>
          <button>Sign In</button>
          <div className="login__create-account">
            <span>Not registered yet?</span>
            <Link className="create-account" to="/register">
              <span className="create-account__text">Create an account</span>
              <ArrowOutwardOutlinedIcon className="create-account__icon" />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
