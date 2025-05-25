import { useState, useEffect } from "react";

const WeekRow = ({ dayNames }) => {
  const [datesOfWeek, setDatesOfWeek] = useState([]);

  const getStartOfWeek = () => {
    const date = new Date();
    const dayOfWeekNow = date.getDay();
    const sunday = new Date(
      date.getTime() - dayOfWeekNow * 24 * 60 * 60 * 1000
    );
    sunday.setHours(0, 0, 0, 0);
    return sunday;
  };

  const addDays = (sunday, days) => {
    let newDate = new Date(sunday.valueOf());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  };

  useEffect(() => {
    const sunday = getStartOfWeek();
    const newDatesOfWeek = [sunday];
    for (let i = 0; i < 7; i++) [newDatesOfWeek.push(addDays(sunday, i))];
    setDatesOfWeek(newDatesOfWeek);
  }, []);

  return (
    <>
      {datesOfWeek.map((eachDate, idx) => (
        <div key={idx}>
          <p>{dayNames[eachDate.getDay()]}</p>
          <p>
            {eachDate.getMonth() + 1}/{eachDate.getDate()}
          </p>
        </div>
      ))}
    </>
  );
};

export default WeekRow;
