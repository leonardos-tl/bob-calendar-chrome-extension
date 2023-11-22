import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { getHolidays } from "../../services/holidays";
import {
  DAYS,
  getArrayOfCalendarDays,
  getEndMonthPadding,
  getNextMonth,
  getPrevMonth,
  getStartMonthPadding,
} from "../../utils/calendarUtils";
import CalendarCell from "./CalendarCell";
import CalendarHeader from "./CalendarHeader";

const initDate = () => {
  let today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  return {
    month,
    year,
    calendarDays: [],
    startPadding: [],
    endPadding: [],
  };
};

function Calendar() {
  const [calendarData, setCalendarData] = useState(initDate());
  const [holidays, setHolidays] = useState([]);

  const setCalendarCells = () => {
    const startPadding = getStartMonthPadding(
      calendarData.year,
      calendarData.month,
    );

    const calendarDays = getArrayOfCalendarDays(
      calendarData.year,
      calendarData.month,
    );

    const endPadding = getEndMonthPadding(
      startPadding.length + calendarDays.length,
    );

    setCalendarData({
      ...calendarData,
      startPadding,
      calendarDays,
      endPadding,
    });
  };

  const goBackOneMonth = () => {
    setCalendarData({
      ...calendarData,
      ...getPrevMonth(calendarData.year, calendarData.month),
    });
  };

  const goForwardOneMonth = () => {
    setCalendarData({
      ...calendarData,
      ...getNextMonth(calendarData.year, calendarData.month),
    });
  };

  const holidaysForDate = (year, month, date) => {
    const selectedDateString = new Date(year, month, date);
    return holidays.filter(
      (e) =>
        new Date(e.startDate) <= selectedDateString &&
        new Date(e.endDate) >= selectedDateString,
    );
  };

  useEffect(() => {
    setCalendarCells();
  }, [calendarData.month]);

  useEffect(() => {
    (async () => {
      const hols = await getHolidays();
      console.log("component hols", hols.requests);
      setHolidays(hols.requests);
    })();
  }, []);

  return (
    <div class="container mx-auto px-4 py-2">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <CalendarHeader
          year={calendarData.year}
          month={calendarData.month}
          onClickPrev={goBackOneMonth}
          onClickNext={goForwardOneMonth}
        />
        <div class="-mx-1 -mb-1">
          <div className="flex flex-wrap" style="margin-bottom: -40px;">
            {DAYS.map((day) => (
              <div style="width: 14.26%" className="px-2 py-2" key={day}>
                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                  {day}
                </div>
              </div>
            ))}
          </div>

          <div class="flex flex-wrap border-t border-l">
            {calendarData.startPadding.map((date, index) => (
              <CalendarCell
                key={index}
                year={calendarData.year}
                month={calendarData.month - 1}
                date={date}
                holidays={holidaysForDate(
                  calendarData.year,
                  calendarData.month - 1,
                  date,
                )}
                isPaddedDate={true}
              />
            ))}
            {calendarData.calendarDays.map((date, index) => (
              <CalendarCell
                key={index}
                year={calendarData.year}
                month={calendarData.month}
                date={date}
                holidays={holidaysForDate(
                  calendarData.year,
                  calendarData.month,
                  date,
                )}
                isPaddedDate={false}
              />
            ))}
            {calendarData.endPadding.map((date, index) => (
              <CalendarCell
                key={index}
                year={calendarData.year}
                month={calendarData.month + 1}
                date={date}
                holidays={holidaysForDate(
                  calendarData.year,
                  calendarData.month + 1,
                  date,
                )}
                isPaddedDate={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar;
