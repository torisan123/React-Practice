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
      <div className="container">
        <input name="city" type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {plans.map((plan) => {
          return (
            <li key={plan.id}>
              {plan.city}
              <button onClick={() => handleDelete(plan)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;