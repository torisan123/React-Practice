import { buttonBase } from "../styles/buttonStyles";

export default function StayHeader({stay,onDelete,startEdit}) {
  return (
    <>
      <h3 className="text-lg p-2 font-bold w-full">{stay.city}</h3>
      <p className="text-sm text-gray-400 mt-1">
        {stay.startDate} - {stay.endDate}
      </p>

      <div className="flex justify-end gap-1 mt-2">
        <button
          className={`${buttonBase} bg-blue-500 text-white hover:bg-blue-600`}
          onClick={startEdit}
        >
          Edit
        </button>
        <button
          className={`${buttonBase} bg-red-500 text-white hover:bg-red-600`}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
}