export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const NUMBER_DAY_WEEK = [6, 0, 1, 2, 3, 4, 5];
export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const PAD = (d) => (d < 10 ? "0" + d.toString() : d.toString());

export const isToday = (year, month, day) => {
  const today = new Date();
  const d = new Date(year, month, day);
  return today.toDateString() === d.toDateString();
};

export const getArrayOfCalendarDays = (year, month) => {
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  let daysArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return daysArray;
};

export const getStartMonthPadding = (year, month) => {
  let daysInPreviousMonth = new Date(year, month, 0).getDate();
  let dayOfWeek = new Date(year, month).getDay();

  let prevMonthDaysArray = [];
  for (let i = 1; i <= NUMBER_DAY_WEEK[dayOfWeek]; i++) {
    prevMonthDaysArray.push(daysInPreviousMonth + 1 - i);
  }

  return prevMonthDaysArray.reverse();
};

export const getEndMonthPadding = (numOfPrevAndCurrentDays) => {
  const remainder = numOfPrevAndCurrentDays % 7;
  if (remainder === 0) return [];

  const daysToPad = 7 - remainder;
  let nextMonthDaysArray = [];
  for (let i = 1; i <= daysToPad; i++) {
    nextMonthDaysArray.push(i);
  }

  return nextMonthDaysArray;
};

export const getPrevMonth = (currentYear, currentMonth) =>
  currentMonth === 0
    ? { year: currentYear - 1, month: 11 }
    : { year: currentYear, month: currentMonth - 1 };

export const getNextMonth = (currentYear, currentMonth) =>
  currentMonth === 11
    ? { year: currentYear + 1, month: 0 }
    : { year: currentYear, month: currentMonth + 1 };
