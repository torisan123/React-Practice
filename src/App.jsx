import './App.css'
import { useState } from "react";
import StayCard from './components/StayCard';

function App() {
  // Input State
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Stays State
  const [stays, setStays] = useState([]);
  
  // Functions
  function handleAdd() {
    if (!city) return; // Prevent adding empty city

    const newStay = { id: Date.now(), city: city, startDate: startDate, endDate: endDate }; // Create a new plan object with a unique ID and the current city
    setStays([...stays, newStay]); // Add the new plan to the stays list
    setCity(""); // Clear the input field after adding
    setStartDate("");
    setEndDate("");
  }

  function handleDelete(id) {
    setStays(stays.filter((s) => s.id !== id)); // Remove the specified plan from the list
  }

  // UI
  return (
    <>
      <div className="flex gap-2 p-4 max-w-md mx-auto">
        <input 
          className="border px-3 py-2 rounded w-full"
          name="city" type="text" placeholder="Enter city" 
          value={city} onChange={(e) => setCity(e.target.value)}
        />
        <input name="start-date" type="date" className="border px-3 py-2 rounded" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input name="end-date" type="date" className="border px-3 py-2 rounded" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="max-w-md mx-auto p-0">
        {stays.map((stay) => {
          return <StayCard key={stay.id} stay={stay} onDelete={() => handleDelete(stay.id)} />;
        })}
      </ul>
    </>
  );
}

export default App;