import { useState } from "react";
import HotelCard from "./HotelCard";

function StayCard({ stay, onDelete, onAddHotel, onDeleteHotel, onUpdateStay }) {
  const [hotelName, setHotelName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isHotelFormOpen, setIsHotelFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editCity, setEditCity] = useState("");
  const [editStartDate, setEditStartDate] = useState("");
  const [editEndDate, setEditEndDate] = useState("");

  const startEdit = () => {
    setEditCity(stay.city);
    setEditStartDate(stay.startDate);
    setEditEndDate(stay.endDate);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editCity.trim()) return; // Prevent saving empty city

    onUpdateStay(stay.id, {
      city: editCity,
      startDate: editStartDate,
      endDate: editEndDate,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditCity(stay.city);
    setEditStartDate(stay.startDate);
    setEditEndDate(stay.endDate);
    setIsEditing(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex flex-col gap-4 w-full">
        {isEditing ? (
          <>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-3">
              <input
                value={editCity}
                onChange={(e) => setEditCity(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSave();
                  } else if (e.key === "Escape") {
                    handleCancel();
                  }
                }}
                className="w-full text-lg border border-gray-300 bg-gray-50 rounded px-3 py-2"
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <input
                    value={editStartDate}
                    type="date"
                    onChange={(e) => setEditStartDate(e.target.value)}
                    className="border border-gray-300 bg-gray-50 rounded px-3 py-2"
                  />
                  <input
                    value={editEndDate}
                    type="date"
                    onChange={(e) => setEditEndDate(e.target.value)}
                    className="border border-gray-300 bg-gray-50 rounded px-3 py-2"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-500 text-white ml-2 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => {
                      handleSave();
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 ml-2 px-3 py-2 rounded-lg transition"
                    onClick={() => {
                      // Revert changes
                      handleCancel();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg p-2 font-bold w-full">{stay.city}</h3>
            <p className="text-sm text-gray-400 mt-1">
              {stay.startDate} - {stay.endDate}
            </p>
            <button
              className="bg-blue-500 text-white ml-2 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={startEdit}
            >
              Edit
            </button>
          </>
        )}
      </div>

      {stay.hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          onDelete={() => onDeleteHotel(stay.id, hotel.id)}
        />
      ))}

      {isHotelFormOpen && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAddHotel(stay.id, {
              id: Date.now(),
              name: hotelName,
              checkIn: checkInDate,
              checkOut: checkOutDate,
            });
            setHotelName("");
            setCheckInDate("");
            setCheckOutDate("");
            setIsHotelFormOpen(false);
          }}
          className="flex flex-col gap-2 mt-3"
        >
          <input
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            placeholder="Hotel Name"
            className="border p-2 rounded w-full mt-2"
          />
          <input
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            type="date"
            className="border p-2 rounded w-full mt-2"
          />
          <input
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
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
      )}

      <button
        onClick={() => setIsHotelFormOpen(!isHotelFormOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white mr-2 px-3 py-2 rounded-lg transition"
      >
        {isHotelFormOpen ? "Cancel" : "+ Add Hotel"}
      </button>

      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-600 bg-transparent px-3 py-2 rounded transition mt-4"
      >
        Delete
      </button>
    </div>
  );
}

export default StayCard;
