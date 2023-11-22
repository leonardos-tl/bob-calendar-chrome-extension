import { render, h } from "preact";
import Calendar from "./components/Calendar/Calendar";

const renderApp = () => {
  const calendarContainer = document.createElement("div");
  document
    .getElementsByClassName("balance-tab-content")[0]
    .append(calendarContainer);

  render(<Calendar />, calendarContainer);
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (!mutation.addedNodes) return;
    for (let i = 0; i < mutation.addedNodes.length; i++) {
      if (
        mutation.addedNodes[i].classList &&
        mutation.addedNodes[i].classList.contains("balance-tab-content")
      ) {
        renderApp();
      }
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
