import { useState } from "react";

export default function HotelForm({ hotel, onSubmit }) {
  const [name, setName] = useState(hotel.name || "");
  const [checkIn, setCheckIn] = useState(hotel.checkIn || "");
  const [checkOut, setCheckOut] = useState(hotel.checkOut || "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, checkIn, checkOut });
      }}
      className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-3 mt-3"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Hotel Name"
        className="border p-2 rounded w-full mt-2"
      />
      <input
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        type="date"
        className="border p-2 rounded w-full mt-2"
      />
      <input
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        type="date"
        className="border p-2 rounded w-full mt-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
      >
        Save
      </button>
    </form>
  );
}
