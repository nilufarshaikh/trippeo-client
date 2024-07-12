import { useState } from "react";
import axios from "axios";

const LocationAutocomplete = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json`,
        {
          params: {
            access_token: "YOUR_MAPBOX_ACCESS_TOKEN",
          },
        }
      );
      setSuggestions(response.data.features);
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
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a place"
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id} onClick={() => handleSelect(suggestion)}>
            {suggestion.place_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationAutocomplete;
