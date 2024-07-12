import "./RightSideBar.scss";
import traveler1 from "../../assets/images/img1.jpg";
import traveler2 from "../../assets/images/img2.jpg";
import traveler3 from "../../assets/images/img3.jpg";
import traveler4 from "../../assets/images/img4.jpg";
import avatar from "../../assets/images/default.jpg";

const RightSideBar = () => {
  return (
    <aside className="right-sidebar">
      <div className="suggested-travelers">
        <h3 className="suggested-travelers__title">
          Suggested travelers to follow
        </h3>
        <div className="suggested-travelers__box">
          <div className="suggested-travelers__wrapper">
            <div className="avatar avatar--feed">
              <img className="avatar__image" src={avatar} alt="Avatar" />
            </div>
            <div className="suggested-travelers__info">
              <span className="suggested-travelers__name">Laura Nguyen</span>
              <p className="suggested-travelers__bio">Toronto, ON</p>
            </div>
          </div>
          <div className="suggested-travelers__wrapper">
            <div className="avatar avatar--feed">
              <img className="avatar__image" src={avatar} alt="Avatar" />
            </div>
            <div className="suggested-travelers__info">
              <span className="suggested-travelers__name">
                Shifa Afreen Fahim
              </span>
              <p className="suggested-travelers__bio">London, ON</p>
            </div>
          </div>
          <div className="suggested-travelers__wrapper">
            <div className="avatar avatar--feed">
              <img className="avatar__image" src={avatar} alt="Avatar" />
            </div>
            <div className="suggested-travelers__info">
              <span className="suggested-travelers__name">Rehan Shaikh</span>
              <p className="suggested-travelers__bio">Toronto, ON</p>
            </div>
          </div>
        </div>
      </div>
      <div className="suggested-places">
        <h3 className="suggested-places__title">
          Places you might like to visit
        </h3>
        <div className="suggested-places__image-grid">
          <img
            className="suggested-places__img"
            src={traveler1}
            alt="Placeholder 1"
          />
          <img
            className="suggested-places__img"
            src={traveler2}
            alt="Placeholder 2"
          />
          <img
            className="suggested-places__img"
            src={traveler3}
            alt="Placeholder 3"
          />
          <img
            className="suggested-places__img"
            src={traveler4}
            alt="Placeholder 4"
          />
        </div>
      </div>
    </aside>
  );
};

export default RightSideBar;
