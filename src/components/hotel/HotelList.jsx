import HotelCard from "./HotelCard";

export default function HotelList({ hotels, onDelete }) {
  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} onDelete={onDelete} />
      ))}
    </div>
  );
}