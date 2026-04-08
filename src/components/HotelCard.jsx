function HotelCard({ hotel, onDelete }) {
  return (
    <div className="flex justify-between items-center mt-2">
      <div>
        <p className="font-medium text-gray-800">{hotel.name}</p>
        <p className="text-sm text-gray-400">
          {hotel.checkIn} - {hotel.checkOut}
        </p>
      </div>
      <button
        onClick={onDelete}
        className="text-red-400 text-sm mt-1 hover:text-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default HotelCard;
