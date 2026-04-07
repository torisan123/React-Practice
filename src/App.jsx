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

    // Create a new plan object with a unique ID and the current city
    const newStay = { 
      id: Date.now(), 
      city: city, 
      startDate: startDate, 
      endDate: endDate,
      hotels: []
    };

    setStays([...stays, newStay]); // Add the new plan to the stays list
    setEndDate("");
    setCity(""); // Clear the input field after adding
    setStartDate("");
  }

  function handleDelete(id) {
    setStays(stays.filter((s) => s.id !== id)); // Remove the specified plan from the list
  }

  function onAddHotel(id, hotel) {
    const updated = stays.map((s) => {
      if (s.id === id) {
        return {
          ...s, 
          hotels: [...s.hotels, hotel]
        }
      }
      return s;
    })
    setStays(updated);
  }

  // UI
  return (
    <>
      <div className="flex gap-2 p-4 max-w-md mx-auto">
        <input className="flex-1 border px-3 py-2 rounded"
          name="city" type="text" placeholder="Enter city" 
          value={city} onChange={(e) => setCity(e.target.value)}
        />
        <input name="start-date" type="date" className="w-32 border px-3 py-2 rounded" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input name="end-date" type="date" className="w-32 border px-3 py-2 rounded" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="max-w-md mx-auto p-0">
        {stays.map((stay) => {
          return <StayCard key={stay.id} stay={stay} onDelete={() => handleDelete(stay.id)} onAddHotel={onAddHotel} />;
        })}
      </ul>
    </>
  );
}

export default App;