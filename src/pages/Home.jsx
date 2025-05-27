// import { useState } from "react";
import "./Home.css";
import NewHabitForm from "../components/NewHabitForm";
import AllHabits from "../components/AllHabits";
import WeekRow from '../components/WeekRow'
import Calander from "../components/CalanderAll/Calander";


// import { SetDays } from "./SetDays";
// import { displayData } from "./Display_Data";

const Home = () => {
  // const [buttonSets, setButtonSets] = useState([]);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // const handleAddHabit = () => {
  //   setButtonSets((prev) => [...prev, [...dayNames]]);
  // };

  return (
    <>
      <h1>Habit Tracker</h1>

      <NewHabitForm />

      {/* <button
        className="habit__container--header--btn"
        onClick={handleAddHabit}>
        Add Habit
      </button> */}
      <div className="habit__container">
        <div className="habit__container--week">{<WeekRow dayNames={dayNames} />}</div>
        <AllHabits />
       
        

        {/* <div className="habit__container--body"> */}
        {/*     // Loop through the buttonSets array to create a set of buttons for each habit
          // The button's onClick event is used to handle the habit tracking logic
          //set is an array of arrays, where each inner array represents a habit
          // and each element in the inner array represents a day of the week
          //idx is the index of the current habit in the buttonSets array
          //i is the index of the current day within the habit */}
        {/* {buttonSets.map((set, idx) => (
            <div key={idx} className="habit__container--body--set">
              {set.map((day, i) => (
                <button
                  key={i}
                  className="habit__container--body--item--btn"
                  data-habit={idx}
                  data-day={i}
                  onClick={() => SetDays(idx, i)}
                >
                  {day}
                </button>
              ))}
            </div>
          ))}
        </div> */}
      </div>
      
       <Calander />
       

    </>
  );
};

export default Home;
