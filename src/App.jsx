import React, { useState } from "react";
import "./App.css";

function App() {
  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const getWeek = () => {
    let date = new Date();
    let dayOfWeekNow = date.getDay();
    let sunday = new Date(date.getTime() - dayOfWeekNow * 24 * 60 * 60 * 1000);
    const datesOfWeek = [sunday];
    // const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 1; i < 7; i++) {
      datesOfWeek.push(sunday.addDays(i));
    }

    return datesOfWeek.map((eachDate) => {
      return (
        <>
          <p>{dayNames[eachDate.getDay()]}</p>
          <p>
            {eachDate.getMonth() + 1}/{eachDate.getDate()}
          </p>
        </>
      );
    });
  };

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [buttonSets, setButtonSets] = useState([]);

  const handleAddHabit = () => {
    setButtonSets((prev) => [...prev, Array(7).fill("Done")]);
  };

  return (
    <div className="habit">
      <h1>Habit Tracker</h1>
      <div className="habit__container">
        <div className="habit__container--week">
          {getWeek()}
        </div>
        <div className="habit__container--header">
          <h2>Habit Tracker</h2>
          <button className="habit__container--header--btn" onClick={handleAddHabit}>
            Add Habit
          </button>
        </div>
        <div className="habit__container--body">
          {buttonSets.map((set, idx) => (
            <div key={idx} className="habit__container--body--set">
              {set.map((label, i) => (
                <button key={i} className="habit__container--body--item--btn">
                  {label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
