import "./RegisterPage.scss";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import axios from "axios";
import validator from "validator";

const registerURL = `${import.meta.env.VITE_API_URL}/auth/register`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    validateForm();
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      try {
        const $response = await axios.post(registerURL, formData);
        navigate("/");
        // navigate("/login");
      } catch (error) {
        console.error(`Error signing up: ${error}`);
      }
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.username) {
      validationErrors.username = "Name is required";
    } else if (formData.username.length > 50) {
      validationErrors.username = "Name must not exceed 50 characters";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!validator.isEmail(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
  };

  return (
    <section className="register onboarding">
      <div className="register__wrapper onboarding__container">
        <form
          onSubmit={handleRegister}
          className="register__form"
          id="registerForm"
        >
          <h1 className="register__heading">Sign Up</h1>
          <div className="register__controls">
            <label className="register__label" htmlFor="username">
              Name
            </label>
            <input
              className="register__input"
              id="username"
              type="text"
              name="username"
              placeholder="eg. John Doe"
              autoComplete="on"
              value={formData.username}
              onChange={handleChange}
            />
            {submitted && errors.username && (
              <p className="error">{errors.username}</p>
            )}
          </div>

          <div className="register__controls">
            <label className="register__label" htmlFor="email">
              Email
            </label>
            <input
              className="register__input"
              id="email"
              type="text"
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
          <div className="register__controls">
            <label className="register__label" htmlFor="password">
              Password
            </label>
            <input
              className="register__input"
              id="password"
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
            {submitted && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>
          <div className="register__controls">
            <label className="register__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="register__input"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {submitted && errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <button className="register__button">Sign Up</button>
          <div className="register__create-account">
            <span>Already have an account? </span>
            <Link className="log-in" to="/login">
              <span className="log-in__icon">
                Sign in
                <ArrowOutwardOutlinedIcon className="log-in__link" />
              </span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
