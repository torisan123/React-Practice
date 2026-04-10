import { buttonBase } from "../../styles/buttonStyles";
import { useState } from "react";
import HotelList from "./HotelList";
import HotelForm from "./HotelForm";

export default function HotelSection({
  stayId,
  hotels,
  onAddHotel,
  onDeleteHotel,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hotelDraft, setHotelDraft] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
  });

  const handleHotelChange = (field, value) => {
    setHotelDraft((prev) => ({ ...prev, [field]: value }));
  };

  const handleHotelSubmit = () => {
    if (!hotelDraft.name.trim()) return;

    onAddHotel(stayId, hotelDraft);
    setHotelDraft({
      name: "",
      checkIn: "",
      checkOut: "",
    });
    setIsFormOpen(false);
  };

  return (
    <div>
      <HotelList hotels={hotels} onDelete={(hotelId) => onDeleteHotel(stayId, hotelId)} />

      {isFormOpen && (
        <HotelForm
          hotel={hotelDraft}
          onChange={handleHotelChange}
          onSubmit={handleHotelSubmit}
        />
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
