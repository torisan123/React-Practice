import './App.css'
import { useState } from "react";

function App() {
  // State
  const [city, setCity] = useState("");
  const [plans, setPlans] = useState([]); // [ { id: 1, city: "Tokyo" }, { id: 2, city: "New York" }, { id: 3, city: "Paris" } ]
  
  // Functions
  function handleAdd() {
    if (!city) return; // Prevent adding empty city

    const newPlan = { id: Date.now(), city }; // Create a new plan object with a unique ID and the current city
    setPlans([...plans, newPlan]); // Add the new plan to the plans list
    setCity(""); // Clear the input field after adding
  }

  function handleDelete(plan) {
    setPlans(plans.filter((p) => p.id !== plan.id)); // Remove the specified plan from the list
  }

  // UI
  return (
    <>
      <div className="flex gap-2 p-4 max-w-md mx-auto">
        <input 
          className="border px-3 py-2 rounded w-full"
          name="city" type="text"placeholder="Enter city" 
          value={city} onChange={(e) => setCity(e.target.value)}
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="max-w-md mx-auto p-0">
        {plans.map((plan) => {
          return (
            <li key={plan.id} className="flex justify-between border p-3 rounded mb-2 shadow-sm">
              {plan.city}
              <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(plan)}>
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;