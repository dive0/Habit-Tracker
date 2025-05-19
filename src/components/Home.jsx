import React, { useState } from "react";
import "./Home.css";
import NewHabitForm from "./NewHabitForm";

const Home = () => {
  const [buttonSets, setButtonSets] = useState([]);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const addDays = (sunday, days) => {
    let date = new Date(sunday.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  const getWeek = () => {
    let date = new Date();
    let dayOfWeekNow = date.getDay();
    let sunday = new Date(date.getTime() - dayOfWeekNow * 24 * 60 * 60 * 1000);
    const datesOfWeek = [sunday];
    for (let i = 1; i < 7; i++) {
      datesOfWeek.push(addDays(sunday, i));
    }

    return datesOfWeek.map((eachDate, i) => {
      return (
        <div key={i}>
          <p>{dayNames[eachDate.getDay()]}</p>
          <p>
            {eachDate.getMonth() + 1}/{eachDate.getDate()}
          </p>
        </div>
      );
    });
  };

  const handleAddHabit = () => {
    setButtonSets((prev) => [...prev, Array(7).fill("Done")]);
  };

  return (
    <>
      <h1>Habit Tracker</h1>

      <NewHabitForm />

      <button
        className="habit__container--header--btn"
        onClick={handleAddHabit}
        style={{ marginBottom: "16px" }}>
        Add Habit
      </button>
      <div className="habit__container">
        <div className="habit__container--week">{getWeek()}</div>
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
    </>
  );
};

export default Home;
