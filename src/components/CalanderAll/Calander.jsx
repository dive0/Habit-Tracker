import React, { useState } from "react";
import "./Calander.css";
import DynCalander from "./DynCalander";


export default function Calander() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  return (
    <>
      <h1>Calender</h1>
      <div className="Calendar_Container">
        <div className="Calendar">
          <div className="Calendar_Header">
            <button id="Previous_Month_Button" onClick={handlePrevMonth}>Previous Month</button>
            <h2 id="Current_Month_Year">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </h2>
            <button id="Next_Month_Button" onClick={handleNextMonth}>Next Month</button>
          </div>
          <div className="Calendar_Week">
            <div className="Day">Sunday</div>
            <div className="Day">Monday</div>
            <div className="Day">Tuesday</div>
            <div className="Day">Wednesday</div>
            <div className="Day">Thursday</div>
            <div className="Day">Friday</div>
            <div className="Day">Saturday</div>
          </div>
          <DynCalander
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}

          />
        </div>
      </div>
    </>
  );
}