import { buttonBase } from "../../styles/buttonStyles";
import { useState } from "react";
import HotelList from "./HotelList";
import HotelForm from "./HotelForm";

export default function HotelSection({
  stayId,
  hotels,
  onAddHotel,
  onUpdateHotel,
  onDeleteHotel,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hotelDraft, setHotelDraft] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
  });

  const handleHotelSubmit = (data) => {
    if (!data.name.trim()) return;

    onAddHotel(stayId, data);
    setHotelDraft({
      name: "",
      checkIn: "",
      checkOut: "",
    });
    setIsFormOpen(false);
  };

  return (
    <div>
      <HotelList
        stayId={stayId}
        hotels={hotels}
        onUpdate={onUpdateHotel}
        onDelete={(hotelId) => onDeleteHotel(stayId, hotelId)}
      />

      {isFormOpen && (
        <HotelForm hotel={hotelDraft} onSubmit={handleHotelSubmit} />
      )}
      <button
        onClick={() => setIsFormOpen(!isFormOpen)}
        className={`${buttonBase} bg-blue-500 hover:bg-blue-600 text-white mt-4 justify-self-end`}
      >
        {isFormOpen ? "Cancel" : "+ Add Hotel"}
      </button>
    </div>
  );
}
