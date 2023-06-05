import { useState } from 'react';
import './App.css';

function App() {
  const [event, setEvent] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://api.api-ninjas.com/v1/historicalevents?text=";
  const API_KEY = "SymaCCHQRJ8PQzoD9RpclA==BLj9oqEyCrR6EkD5";

  // handle text box change by setting query state
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  // handle fetch event after search button is clicked
  const fetchEventData = () => {
    setIsLoading(true);
    fetch(API_URL + query, {headers: {"X-Api-Key": API_KEY}})
    .then(response => {return response.json()})
    .then(data => {setEvent(data);
                   setIsLoading(false);})
    .catch(error => {console.log(error);
                      setIsLoading(false);})
  }

  // root react component:
  return (
    <div className="App">
      <h1>World History Events</h1>
      <input type="text" onChange={handleInputChange}></input>
      <button onClick={fetchEventData} disabled={isLoading}>Search</button>
      {isLoading ? <LoadingSpinner /> : <EventsTable event={event}/>}
      
    </div>
  );
}

// react component for all events, child of App component:
function EventsTable({ event }) {
  if (event.length >= 1) {
    return (
    event.map( (individualEvent) => (
      <EventBox key={individualEvent.event} event={individualEvent}/>))
  )}
  
}

// react component for an individual event, child of EventsTable
function EventBox( {event} ) {
  return (
    <section className="card">
      <h3>{event.day}/{event.month}/{event.year}</h3>
      <p  className="event-text">{event.event}</p>
    </section>
  )
}

// react component to contain loading-spinner:
function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  )
}



export default App;
