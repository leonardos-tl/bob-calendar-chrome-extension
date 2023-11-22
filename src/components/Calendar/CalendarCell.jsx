import { h } from "preact";
import { isToday } from "../../utils/calendarUtils";

function CalendarCell({ year, month, date, holidays, isPaddedDate }) {
  let colourClass = isToday(year, month, date)
    ? "bg-red-500 text-white"
    : isPaddedDate
      ? "text-gray-400"
      : "text-gray-700";

  return (
    <div
      style="width: 14.28%; height: 120px"
      className="px-4 pt-2 border-r border-b relative"
    >
      <div
        className={`inline-flex w-6 h-6 items-center justify-center text-center leading-none rounded-full transition ease-in-out duration-100 ${colourClass}`}
      >
        {date}
      </div>
      <div style="height: 80px;" className="overflow-y-auto mt-1">
        {holidays.map((hol) => (
          <div class="px-2 py-1 rounded-lg mt-1 overflow-hidden border border-blue-200 text-blue-800 bg-blue-100">
            <p class="text-sm truncate leading-tight">
              {hol.policyTypeDisplayName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarCell;
