function HotelCard({ hotel, onDelete }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-gray-100 shadow-sm mt-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-gray-800">{hotel.name}</p>
          <p className="text-sm text-gray-400">
            {hotel.checkIn} - {hotel.checkOut}
          </p>
        </div>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-600 px-2 py-1 rounded transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HotelCard;
