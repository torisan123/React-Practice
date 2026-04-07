import { useState } from "react";

function StayCard({ stay, onDelete, onAddHotel, onDeleteHotel }) {
  const [hotelName, setHotelName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isHotelFormOpen, setIsHotelFormOpen] = useState(false);

  return (
    <>
      <div className="border rounded-lg p-4 shadow-lg bg-white mb-4">
        <h3 className="text-lg font-bold">{stay.city}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {stay.startDate} → {stay.endDate}
        </p>

        {stay.hotels.map((hotel) => (
          <div key={hotel.id} className="border p-2 mt-2 rounded">
            <p>{hotel.name}</p>
            <p>
              {hotel.checkIn} → {hotel.checkOut}
            </p>
            <button onClick={() => onDeleteHotel(stay.id, hotel.id)}>Delete</button>
          </div>
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
              className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
            >
              Register
            </button>
          </form>
        )}

        <button
          onClick={() => setIsHotelFormOpen(!isHotelFormOpen)}
          className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
        >
          {isHotelFormOpen ? "Cancel" : "+ Add Hotel"}
        </button>

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
