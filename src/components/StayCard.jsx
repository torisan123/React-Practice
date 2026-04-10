import { useState } from "react";
import StayHeader from "./StayHeader";
import StayForm from "./StayForm";
import HotelSection from "./HotelSection";

export default function StayCard({ stay, onDelete, onAddHotel, onDeleteHotel, onUpdateStay }) {
  // State for editing stay details
  const [isEditing, setIsEditing] = useState(false);
  const [stayDraft, setStayDraft] = useState({
    city: "",
    startDate: "",
    endDate: "",
  });

  const startEdit = () => {
    setStayDraft({
      city: stay.city,
      startDate: stay.startDate,
      endDate: stay.endDate,
    });
    setIsEditing(true);
  };

  const handleChange = (field, value) => {
    setStayDraft((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!stayDraft.city.trim()) return;
    onUpdateStay(stay.id, {
      city: stayDraft.city,
      startDate: stayDraft.startDate,
      endDate: stayDraft.endDate,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setStayDraft({
      city: stay.city,
      startDate: stay.startDate,
      endDate: stay.endDate,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex flex-col gap-4 w-full">
        {isEditing ? (
          <StayForm
            editState={stayDraft}
            handleChange={handleChange}
            handleSave={handleSave}
            handleCancel={handleCancel}
          />
        ) : (
          <StayHeader stay={stay} onDelete={onDelete} startEdit={startEdit} />
        )}
      </div>

      <HotelSection stayId={stay.id} hotels={stay.hotels} onAddHotel={onAddHotel} onDeleteHotel={onDeleteHotel} />
    </div>
  );
}