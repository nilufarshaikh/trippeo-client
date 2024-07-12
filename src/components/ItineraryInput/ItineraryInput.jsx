import { useState } from "react";
import "./ItineraryInput.scss";

const ItineraryInput = ({ itinerary, setItinerary }) => {
  const addDay = () => {
    setItinerary([
      ...itinerary,
      { day: itinerary.length + 1, activities: [""], notes: "" },
    ]);
  };

  const handleDayChange = (index, field, value) => {
    const newItinerary = [...itinerary];
    newItinerary[index][field] = value;
    setItinerary(newItinerary);
  };

  const handleActivityChange = (dayIndex, activityIndex, value) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities[activityIndex] = value;
    setItinerary(newItinerary);
  };

  const addActivity = (dayIndex) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].activities.push("");
    setItinerary(newItinerary);
  };

  return (
    <>
      <div className="activity">
        {itinerary.map((day, dayIndex) => (
          <div key={dayIndex} style={{ marginBottom: "20px" }}>
            <label className="activity-header">Day {day.day}</label>
            <div className="activity">
              <label>Activities:</label>
              {day.activities.map((activity, activityIndex) => (
                <input
                  key={activityIndex}
                  type="text"
                  value={activity}
                  onChange={(e) =>
                    handleActivityChange(
                      dayIndex,
                      activityIndex,
                      e.target.value
                    )
                  }
                  placeholder="Enter activity"
                  className="activity-input"
                />
              ))}
              <button
                type="button"
                className="itinerary-add-btn"
                onClick={() => addActivity(dayIndex)}
              >
                Add Activity
              </button>
            </div>
            <div className="activity-notes">
              <label className="activity-notes-label">Activity Notes:</label>
              <textarea
                className="activity-input"
                value={day.notes}
                onChange={(e) =>
                  handleDayChange(dayIndex, "notes", e.target.value)
                }
                placeholder="Enter notes"
              />
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={addDay} className="itinerary-add-btn">
        Add Day
      </button>
    </>
  );
};

export default ItineraryInput;
