import "./RightSideBar.scss";
import travelers from "../../assets/images/mohan-muruge.jpg";

const RightSideBar = () => {
  return (
    <aside className="right-sidebar">
      RightSideBar
      <section>Suggested Travelers | Places to Visit</section>
      <section className="card-box">
        <div className="card">
          <img src={travelers} alt="Travelers" />
          <div className="card-title">
            <i className="icon icon-2"></i>
            <h3>Title 2</h3>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightSideBar;
