export default function HotelForm({ hotel, onChange, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-3 mt-3"
    >
      <input
        value={hotel.name}
        onChange={(e) => onChange("name", e.target.value)}
        placeholder="Hotel Name"
        className="border p-2 rounded w-full mt-2"
      />
      <input
        value={hotel.checkIn}
        onChange={(e) => onChange("checkIn", e.target.value)}
        type="date"
        className="border p-2 rounded w-full mt-2"
      />
      <input
        value={hotel.checkOut}
        onChange={(e) => onChange("checkOut", e.target.value)}
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
