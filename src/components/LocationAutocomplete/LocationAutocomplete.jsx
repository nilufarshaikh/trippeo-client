import { useState } from "react";
import axios from "axios";

const LocationAutocomplete = ({ onSelect }) => {
  // console.log(import.meta.env.MAPBOX_ACCESS_TOKEN);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const mapboxAccessToken =
        "pk.eyJ1IjoibmlsdWZhcjI3IiwiYSI6ImNseWl1eXIwdzBpenUya3EyaDI2enl2eHgifQ.x5cCkeFqZwEAuCCooogmdg";
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json`,
          {
            params: {
              access_token: mapboxAccessToken,
              autocomplete: true,
              limit: 5,
            },
          }
        );

        setSuggestions(response.data.features);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (place) => {
    setQuery(place.place_name);
    setSuggestions([]);
    onSelect(place);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a location"
        className="card__control"
      />
      <ul>
        {suggestions.map((place) => (
          <li
            className="card__list"
            key={place.id}
            onClick={() => handleSelect(place)}
          >
            {place.place_name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LocationAutocomplete;
