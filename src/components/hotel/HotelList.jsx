import HotelCard from "./HotelCard";

export default function HotelList({ stayId, hotels, onUpdate, onDelete }) {
  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel}
          stayId={stayId}
          hotel={hotel}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}