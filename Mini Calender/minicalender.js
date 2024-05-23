const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const yearEl = document.getElementById("year");
const dayNum = document.getElementById("day-number");

const date = new Date();

const currentDay = date.getDate();

const currentYear = date.getFullYear();

yearEl.innerText = currentYear;
dayNum.innerText = currentDay;
monthEl.innerText = date.toLocaleString("en", { month: "long" });
dayEl.innerText = date.toLocaleString("en", { weekday: "long" });

// console.log(currentDay);
