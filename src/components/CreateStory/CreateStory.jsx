import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./CreateStory.scss";

const CreateStory = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    placesToVisit: "",
    foodsToTry: "",
    bestTimeToVisit: "",
    tips: "",
    dayByDayItinerary: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: e.target.files });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const createStoryURL = `${import.meta.env.VITE_API_URL}/api/stories`;

    const formDataToSubmit = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "photos") {
        for (let i = 0; i < formData.photos.length; i++) {
          formDataToSubmit.append("photos", formData.photos[i]);
        }
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    });

    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(createStoryURL, formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/profile");
    } catch (error) {
      console.error("There was an error submitting the story:", error);
    }
  };

  return (
    <section className="story">
      <form onSubmit={handleSubmit} className="story__form">
        {step === 1 && (
          <article className="card card--create-story">
            <div className="card__header">
              <h1 className="card__title">Step 1: Basic Details</h1>
            </div>
            <div className="card__body">
              <div className="card__content">
                <div className="card__fields">
                  <label className="card__label" htmlFor="title">
                    Story Title
                  </label>
                  <input
                    className="card__control"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter a travel story title"
                  />
                </div>
                <div className="card__fields">
                  <label className="card__label" htmlFor="description">
                    Description
                  </label>
                  <input
                    className="card__control"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter a short description"
                  />
                </div>
                <div className="card__fields">
                  <label className="card__label" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="card__control"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter the place you traveled"
                  />
                </div>
              </div>
            </div>
            <div className="card__btn-wrapper">
              <Link to="/home" className="card__btn">
                <button className="card__btn card__btn--cancel">Cancel</button>
              </Link>
              <button className="card__btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </article>
        )}
        {step === 2 && (
          <article className="card card--create-story">
            <div className="card__header">
              <h2 className="card__title">Step 2: Itinerary Details</h2>
            </div>
            <div className="card__body">
              <div className="card__content">
                <div className="card__fields">
                  <label className="card__label" htmlFor="bestTimeToVisit">
                    Best Time to Visit
                  </label>
                  <input
                    className="card__control"
                    name="bestTimeToVisit"
                    id="bestTimeToVisit"
                    value={formData.bestTimeToVisit}
                    onChange={handleChange}
                    placeholder="Suggest a best time to visit the place"
                  />
                </div>
                <div className="card__fields">
                  <label className="card__label" htmlFor="placesToVisit">
                    Places to Visit
                  </label>
                  <input
                    className="card__control"
                    name="placesToVisit"
                    id="placesToVisit"
                    value={formData.placesToVisit}
                    onChange={handleChange}
                    placeholder="Suggest some places to visit"
                  />
                </div>
                <div className="card__fields">
                  <label className="card__label" htmlFor="foodsToTry">
                    Foods to try
                  </label>
                  <input
                    className="card__control"
                    name="foodsToTry"
                    id="foodsToTry"
                    value={formData.foodsToTry}
                    onChange={handleChange}
                    placeholder="Suggests some food to try"
                  />
                </div>
                <div className="card__fields">
                  <label className="card__label" htmlFor="tips">
                    Tips and Notes
                  </label>
                  <textarea
                    className="card__control"
                    name="tips"
                    id="tips"
                    rows="4"
                    value={formData.tips}
                    onChange={handleChange}
                    placeholder="Enter some tips or notes"
                  ></textarea>
                </div>
                {/* ITINERARY */}
              </div>
            </div>
            <div className="card__btn-wrapper">
              <button className="card__btn" onClick={handlePrev}>
                Previous
              </button>
              <button className="card__btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </article>
        )}
        {step === 3 && (
          <article className="card card--create-story">
            <div className="card__header">
              <div className="traveler">
                <h2>Step 3: Upload Photos</h2>
              </div>
            </div>
            <div className="card__body">
              <div className="card__content">
                <input type="file" multiple onChange={handleFileChange} />
              </div>
            </div>
            <div className="card__btn-wrapper">
              <button className="card__btn" onClick={handlePrev}>
                Previous
              </button>
              <button className="card__btn" type="submit">
                Submit
              </button>
            </div>
          </article>
        )}
      </form>
    </section>
  );
};

export default CreateStory;
