import { useState, useEffect } from "react";
import "./App.css";
import StaySection from "./components/Stay/StaySection";

const getInitialStays = () => {
  try {
    const stored = localStorage.getItem("stays");
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to parse stays from localStorage", e);
    return [];
  }
};

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
      hotels: [],
    };

    // Add the new plan to the stays list
    setStays((prev) => [...prev, newStay]);

    // Clear the input field after adding
    setEndDate("");
    setCity("");
    setStartDate("");
  }

    function onUpdateStay(id, updateStay) {
    setStays(prev => {
      return prev.map((s) => {
        if (s.id === id) {
          return { ...s, ...updateStay };
        }
        return s;
      });
    });
  }

  function onDeleteStay(id) {
    // Remove the specified plan from the list
    setStays(stays.filter((s) => s.id !== id));
  }

  function onAddHotel(id, hotel) {
    const newHotel = {
      id: Date.now(),
      ...hotel,
    };
    const updated = stays.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          hotels: [...s.hotels, newHotel],
        };
      }
      return s;
    });
    setStays(updated);
  }

  function onUpdateHotel(stayId, hotelId, updateHotel) {
    setStays(prev => {
      return prev.map((s) => {
        if (s.id === stayId) {
          return {
            ...s,
            hotels: s.hotels.map((h) => {
              if (h.id === hotelId) {
                return { ...h, ...updateHotel };
              }
              return h;
            }),
          };
        }
        return s;
      });
    });
  }

  function onDeleteHotel(stayId, hotelId) {
    const updated = stays.map((s) => {
      if (s.id === stayId) {
        return {
          ...s,
          hotels: s.hotels.filter((h) => h.id !== hotelId),
        };
      }
      return s;
    });
    setStays(updated);
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-8">
        <h1 className="text-3xl font-semibold text-center tracking-tight">
          My Travel Plans
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 p-4 max-w-md sm:max-w-lg md:max-w-2xl mx-auto mt-6">
          <input
            className="flex-1 border border-gray-200 px-3 py-2 rounded-lg bg-white font-medium focus:ring-2 focus:ring-blue-200"
            name="city"
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            name="start-date"
            type="date"
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-200"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            name="end-date"
            type="date"
            className="w-full border border-gray-200 px-3 py-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-200"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={onAddStay}
          >
            Add
          </button>
        </div>

        <ul className="max-w-2xl mx-auto px-6 mt-6 space-y-6">
          {stays.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              No travel plans yet. Start by adding a city!
            </p>
          )}
          {stays.map((stay) => (
            <li className="mb-4" key={stay.id}>
              <StaySection
                stay={stay}
                onDelete={() => onDeleteStay(stay.id)}
                onUpdateStay={onUpdateStay}
                onAddHotel={onAddHotel}
                onUpdateHotel={onUpdateHotel}
                onDeleteHotel={onDeleteHotel}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
