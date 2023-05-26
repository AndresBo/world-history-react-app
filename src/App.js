import { useState } from 'react';
import './App.css';

function App() {
  const [event, setEvent] = useState([]);
  const [query, setQuery] = useState("");

  const API_URL = "https://api.api-ninjas.com/v1/historicalevents?text=";
  const API_KEY = "SymaCCHQRJ8PQzoD9RpclA==BLj9oqEyCrR6EkD5";

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const fetchEventData = () => {
    fetch(API_URL + query, {headers: {"X-Api-Key": API_KEY}})
    .then(response => {return response.json()})
    .then(data => {setEvent(data)})
  }

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange}></input>
      <button onClick={fetchEventData}>Search</button>
      
    </div>
  );
}

export default App;
