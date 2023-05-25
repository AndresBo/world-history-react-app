import { useState } from 'react';
import './App.css';

// first child component:
function SearchBar({ events, setEvents }) {

  function handleInputChange(e) {
    setEvents(e.target.value)
  }

  return (
    <form>
      <h1>World History Events</h1>
      <label>Event search: 
        {" "}
        <input type="text" value={events} onChange={handleInputChange}/>
      </label> 
    </form> 
  )
}

// second child component:
function EventsTable({ events }) {
  return (
    events.map(event => <EventBox event={event}/>)
  )
}

// first child component of EventsTable:
function EventBox({ event }) {
  return (
    <section>
      <p>{event.day}/{event.month}/{event.year}</p>
      <p>{event.event}</p>
    </section>
  )
}


// root component:
function EventsApp({eventos}) {
  const [events, setEvents] = useState(" ")
  
  return (
    <div>
      <SearchBar events={events} setEvents={setEvents} />
      <EventsTable events={eventos}/>
    </div>
  );
}

const EVENTOS = 
[
  {"year": "-45", "month": "01", "day": "01", "event": "The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year."},
  {"year": "366", "month": "01", "day": "02", "event": "The Alemanni cross the frozen Rhine in large numbers, invading the Roman Empire."},
  {"year": "250", "month": "01", "day": "03", "event": "Emperor Decius orders everyone in the Roman Empire (except Jews) to make sacrifices to the Roman gods."},
  {"year": "-27", "month": "01", "day": "16", "event": "Gaius Julius Caesar Octavianus is granted the title Augustus by the Roman Senate, marking the beginning of the Roman Empire."},
  {"year": "379", "month": "01", "day": "19", "event": "Emperor Gratian elevates Flavius Theodosius at Sirmium to Augustus, and gives him authority over all the eastern provinces of the Roman Empire."},
  {"year": "1719", "month": "01", "day": "23", "event": "The Principality of Liechtenstein is created within the Holy Roman Empire."},
  {"year": "98", "month": "01", "day": "27", "event": "Trajan succeeds his adoptive father Nerva as Roman emperor; under his rule the Roman Empire will reach its maximum extent."},
  {"year": "1018", "month": "01", "day": "30", "event": "Poland and the Holy Roman Empire conclude the Peace of Bautzen."},
  {"year": "421", "month": "02", "day": "08", "event": "Constantius III becomes co-Emperor of the Western Roman Empire."},
  {"year": "55", "month": "02", "day": "11", "event": "The death under mysterious circumstances of Tiberius Claudius Caesar Britannicus, heir to the Roman empire, on the eve of his coming of age clears the way for Nero to become Emperor."}
];

// root component:
export default function App() {
  return <EventsApp eventos={EVENTOS} />
};
