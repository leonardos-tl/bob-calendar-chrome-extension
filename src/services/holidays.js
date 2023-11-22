export const getHolidays = async () => {
  try {
    const userId = JSON.parse(localStorage.getItem("ajs_user_id"));
    const response = await fetch(
      `https://app.hibob.com/api/timeoff/employees/${userId}/requests/inRange?from=2023-01-01&to=2026-12-30`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/json;charset=UTF-8",
          datatype: "json",
        },
        method: "GET",
        credentials: "include",
      },
    );
    return await response.json();
  } catch (e) {
    return Promise.reject(e);
  }
};
