import "./WelcomePage.scss";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <main className="welcome onboarding">
      <div className="welcome__wrapper onboarding__container">
        <div className="welcome__form" id="welcomeForm">
          <h1 className="welcome__heading">TripPeo</h1>
          <p className="welcome__para">
            Share, Explore, Inspire the world through your travel stories.
          </p>
          <Link to="/register">
            <button className="welcome__button">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="welcome__button welcome__button--sign-in">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
