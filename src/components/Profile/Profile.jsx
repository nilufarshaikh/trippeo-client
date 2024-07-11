import "./Profile.scss";
import travelerImg from "../../assets/images/abc.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import avatar from "../../assets/images/mohan-muruge.jpg";

const Profile = () => {
  return (
    <section className="feed">
      Profile
      {/* <article className="card">
        <div className="card__header">
          <div className="avatar avatar--feed">
            <img className="avatar__image" src={avatar} alt="Avatar" />
          </div>
          <div className="traveler">
            <span className="traveler__name">John Doe</span>
            <span className="traveler__posted-at">2 min ago</span>
          </div>
        </div>
        <div className="card__body">
          <div className="card__content">
            <img className="card__img" src={travelerImg} alt="Traveler Photo" />
            <h2>A journey through the heart of Europe</h2>
            <p>
              Embark on a memorable journey through Europe's cultural gems...
            </p>
          </div>
          <div className="">
            <div>
              <h3>Best time to visit:</h3>
              <p>September - December</p>
            </div>
            <div>
              <h3>Places to see:</h3>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <h3>Local foods to try:</h3>
              <p>
                Rajasthani Thali from <span>Maharaja Hotel, Agra</span>
              </p>
              <p>
                Pav Bhaji from <span>Bhaiyya's Hotel, Agra</span>
              </p>
            </div>
            <div>
              <h3>Additional Notes or Tips:</h3>
              <p>Carry warm clothes.</p>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="">
            <div className="stats">
              <div className="stats__info">
                <FavoriteBorderOutlinedIcon className="stats__icon" />
                <span>21 likes</span>
              </div>
              <div className="stats__info">
                <ChatBubbleOutlineOutlinedIcon className="stats__icon" />
                <span>4 comments</span>
              </div>
            </div>
          </div>
        </div>
      </article> */}
    </section>
  );
};

export default Profile;
