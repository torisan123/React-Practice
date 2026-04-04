function StayCard({ stay, onDelete }) {
  return (
    <>
        <h3 className="text-lg font-bold">{stay.city}</h3>
        <p className="text-sm text-gray-500 mt-1">{stay.startDate} → {stay.endDate}</p>
        <button onClick={onDelete} className="mt-3 text-red-500 hover:text-red-700 text-sm">
          delete
        </button>
    </>
  );
}

export default StayCard;