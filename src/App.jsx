import './App.css'
import { useState, useEffect } from "react";
import StayCard from './components/StayCard';

const getInitialStays = () => {
  try {
    const stored = localStorage.getItem("stays");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse stays from localStorage", e);
    return [];
  }
}

function App() {
  // Input State
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Stays State
  const [stays, setStays] = useState(getInitialStays);
  // If stays change, update localStorage
  useEffect(() => {
    localStorage.setItem("stays", JSON.stringify(stays));
  }, [stays]);  

  // Functions
  function onAddStay() {
    if (!city.trim()) return; // Prevent adding empty city

    // Create a new plan object with a unique ID and the current city
    const newStay = { 
      id: Date.now(), 
      city: city, 
      startDate: startDate, 
      endDate: endDate,
      hotels: []
    };

    // Add the new plan to the stays list
    setStays((prev) => [...prev, newStay]);

    // Clear the input field after adding
    setEndDate("");
    setCity("");
    setStartDate("");
  }

  function onDeleteStay(id) {
    // Remove the specified plan from the list
    setStays(stays.filter((s) => s.id !== id));
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

  function onDeleteHotel(stayId, hotelId) {
    const updated = stays.map((s) => {
      if (s.id === stayId) {
        return {
          ...s, 
          hotels: s.hotels.filter((h) => h.id !== hotelId)
        }
      }
      return s;
    })
    setStays(updated);
  }
  
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-4">My Travel Plans</h1>
      <div className="flex flex-col sm:flex-row gap-2 p-4 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
        <input className="flex-1 border px-3 py-2 rounded font-medium"
          name="city" type="text" placeholder="Enter city" 
          value={city} onChange={(e) => setCity(e.target.value)}
        />
        <input name="start-date" type="date" className="w-full sm:w-32 border px-3 py-2 rounded" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input name="end-date" type="date" className="w-full sm:w-32 border px-3 py-2 rounded" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={onAddStay}
        >
          Add
        </button>
      </div>

      <ul className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4">
        {stays.length === 0 && <p className="text-center text-gray-500 mt-4">No travel plans yet. Start by adding a city!</p>}
        {stays.map((stay) => (
          <li className="mb-4" key={stay.id}>
            <StayCard stay={stay} onDelete={() => onDeleteStay(stay.id)} onAddHotel={onAddHotel} onDeleteHotel={onDeleteHotel} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;