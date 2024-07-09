import "./RegisterPage.scss";
import { Link } from "react-router-dom";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

const Register = () => {
  return (
    <section className="register onboarding">
      <div className="register__wrapper onboarding__container">
        <form className="register__form" id="registerForm">
          <h1 className="register__heading">Sign Up</h1>
          <div className="register__controls">
            <label className="register__label" htmlFor="name">
              Name
            </label>
            <input
              className="register__input"
              type="text"
              id="name"
              name="name"
              placeholder="eg. John Doe"
            />
          </div>
          <div className="register__controls">
            <label className="register__label" htmlFor="email">
              Email
            </label>
            <input
              className="register__input"
              type="email"
              id="email"
              name="email"
              placeholder="eg. johndoe@email.com"
            />
          </div>
          <div className="register__controls">
            <label className="register__label" htmlFor="password">
              Password
            </label>
            <input
              className="register__input"
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
          </div>
          <div className="register__controls">
            <label className="register__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="register__input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
            />
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
