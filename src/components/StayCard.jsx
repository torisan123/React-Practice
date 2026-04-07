import { useState } from "react";

function StayCard({ stay, onDelete, onAddHotel }) {
  const [hotelName, setHotelName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  return (
    <>
      <div className="border rounded-lg p-4 shadow-lg bg-white mb-4">
        <h3 className="text-lg font-bold">{stay.city}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {stay.startDate} → {stay.endDate}
        </p>

        {stay.hotels.map((hotel, index) => (
          <div key={index} className="border p-2 mt-2 rounded">
            <p>{hotel.name}</p>
            <p>
              {hotel.checkIn} → {hotel.checkOut}
            </p>
          </div>
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAddHotel(stay.id, {
              name: hotelName,
              checkIn: checkInDate,
              checkOut: checkOutDate,
            });

            setHotelName("");
            setCheckInDate("");
            setCheckOutDate("");
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
            className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
          >
            Add Hotel
          </button>
        </form>

        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition mt-4"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default StayCard;
