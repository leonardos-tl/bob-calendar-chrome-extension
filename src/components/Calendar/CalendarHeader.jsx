import { h } from "preact";
import { MONTH_NAMES } from "../../utils/calendarUtils";

function CalendarHeader({ year, month, onClickPrev, onClickNext }) {
  return (
    <div className="flex items-center justify-between py-2 px-6">
      <div>
        <span className="text-lg font-bold text-gray-800">
          {MONTH_NAMES[month]}
        </span>
        <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
      </div>
      <div className="border rounded-lg px-1" style="padding-top: 2px;">
        <button
          type="button"
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
          onClick={onClickPrev}
        >
          <svg
            className="h-6 w-6 text-gray-500 inline-flex leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="border-r inline-flex h-6"></div>
        <button
          type="button"
          className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
          onClick={onClickNext}
        >
          <svg
            className="h-6 w-6 text-gray-500 inline-flex leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
