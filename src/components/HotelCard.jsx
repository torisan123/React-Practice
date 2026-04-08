function HotelCard({ hotel, onDelete }) {
  return (
    <div className="border p-3 mt-2 rounded-lg shadow-sm bg-gray-50">
    <p className="font-medium">{hotel.name}</p>
    <p className="text-sm text-gray-600">
        {hotel.checkIn} → {hotel.checkOut}
    </p>
    <button onClick={onDelete} className="text-red-500 text-sm mt-1 hover:text-red-700">
        Delete
    </button>
    </div>
  );
}

export default HotelCard;