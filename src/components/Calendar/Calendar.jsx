import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { getBankHolidays, getHolidays } from "../../services/holidays";
import {
  DAYS,
  getArrayOfCalendarDays,
  getEndMonthPadding,
  getNextMonth,
  getPrevMonth,
  getStartMonthPadding,
  PAD,
} from "../../utils/calendarUtils";
import CalendarCell from "./CalendarCell";
import CalendarHeader from "./CalendarHeader";

const initDate = () => {
  let today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const prevDate = getPrevMonth(year, month);
  const nextDate = getNextMonth(year, month);
  return {
    current: { year, month },
    prev: prevDate,
    next: nextDate,
    calendarDays: [],
    startPadding: [],
    endPadding: [],
  };
};

function Calendar() {
  const [calendarData, setCalendarData] = useState(initDate());
  const [holidays, setHolidays] = useState([]);
  const [bankHolidays, setBankHolidays] = useState([]);
  const { current, prev, next } = calendarData;

  const setCalendarCells = () => {
    const startPadding = getStartMonthPadding(current.year, current.month);
    const calendarDays = getArrayOfCalendarDays(current.year, current.month);
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
    const newCurrentDate = getPrevMonth(current.year, current.month);
    const newPrevDate = getPrevMonth(newCurrentDate.year, newCurrentDate.month);
    const newNextDate = getNextMonth(newCurrentDate.year, newCurrentDate.month);
    setCalendarData({
      ...calendarData,
      current: newCurrentDate,
      prev: newPrevDate,
      next: newNextDate,
    });
  };

  const goForwardOneMonth = () => {
    const newCurrentDate = getNextMonth(current.year, current.month);
    const newPrevDate = getPrevMonth(newCurrentDate.year, newCurrentDate.month);
    const newNextDate = getNextMonth(newCurrentDate.year, newCurrentDate.month);
    setCalendarData({
      ...calendarData,
      current: newCurrentDate,
      prev: newPrevDate,
      next: newNextDate,
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

  const isDateBankHoliday = (year, month, date) =>
    bankHolidays.find(
      (bh) => bh.date === `${year}-${PAD(month + 1)}-${PAD(date)}`,
    );

  useEffect(() => {
    setCalendarCells();
  }, [current.month]);

  useEffect(() => {
    (async () => {
      const hols = await getHolidays();
      setHolidays(hols.requests);

      const bankHolidays = await getBankHolidays();
      setBankHolidays(bankHolidays);
    })();
  }, []);

  return (
    <div class="container mx-auto px-4 py-2">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <CalendarHeader
          year={current.year}
          month={current.month}
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
                year={prev.year}
                month={prev.month}
                date={date}
                holidays={holidaysForDate(prev.year, prev.month, date)}
                isBankHoliday={isDateBankHoliday(prev.year, prev.month, date)}
                isPaddedDate={true}
              />
            ))}
            {calendarData.calendarDays.map((date, index) => (
              <CalendarCell
                key={index}
                year={current.year}
                month={current.month}
                date={date}
                holidays={holidaysForDate(current.year, current.month, date)}
                isBankHoliday={isDateBankHoliday(
                  current.year,
                  current.month,
                  date,
                )}
                isPaddedDate={false}
              />
            ))}
            {calendarData.endPadding.map((date, index) => (
              <CalendarCell
                key={index}
                year={next.year}
                month={next.month}
                date={date}
                holidays={holidaysForDate(next.year, next.month, date)}
                isBankHoliday={isDateBankHoliday(next.year, next.month, date)}
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
