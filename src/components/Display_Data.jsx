import { getHabit } from "./SetDays";

export function displayData() {
  const habits = getHabit();
  if (typeof habits === "undefined") {
    console.log("habits is undefined");
  } else if (habits && habits.length > 0) {
    console.log("there is a object");
  } else {
    console.log("there is no object");
  }
}