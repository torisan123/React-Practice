import { buttonBase } from "../styles/buttonStyles";

export default function StayForm({ editState, handleChange, handleSave, handleCancel }) {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-3">
      <input
        value={editState.city}
        onChange={(e) => handleChange("city", e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSave();
          } else if (e.key === "Escape") {
            handleCancel();
          }
        }}
        className="w-full text-lg border border-gray-300 bg-gray-50 rounded px-3 py-2"
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input
            value={editState.startDate}
            type="date"
            onChange={(e) => handleChange("startDate", e.target.value)}
            className="border border-gray-300 bg-gray-50 rounded px-3 py-2"
          />
          <input
            value={editState.endDate}
            type="date"
            onChange={(e) => handleChange("endDate", e.target.value)}
            className="border border-gray-300 bg-gray-50 rounded px-3 py-2"
          />
        </div>
        <div className="flex justify-end gap-1 mt-2">
          <button
            className={`${buttonBase} bg-blue-500 text-white hover:bg-blue-600`}
            onClick={() => handleSave()}
          >
            Save
          </button>
          <button
            className={`${buttonBase} bg-gray-100 text-gray-700 hover:bg-gray-200`}
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}