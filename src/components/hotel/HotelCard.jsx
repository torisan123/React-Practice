import { useState } from "react";
import HotelForm from "./HotelForm";

export default function HotelCard({ stayId, hotel, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleHotelSubmit(data) {
    onUpdate(stayId, hotel.id, data);
    setIsEditing(false);
  }

  return (
    <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-100 shadow-sm mt-3">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <HotelForm
            hotel={hotel}
            onSubmit={handleHotelSubmit}
          />
        ) : (
          <div>
            <p className="font-semibold text-gray-800">{hotel.name}</p>
            <p className="text-sm text-gray-400">
              {hotel.checkIn} - {hotel.checkOut}
            </p>
          </div>
        )}
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-600 px-2 py-1 rounded transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(hotel.id)}
          className="text-red-500 hover:text-red-600 px-2 py-1 rounded transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
