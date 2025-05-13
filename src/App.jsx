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
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  return (
    <div className="habit">
      {getWeek()}
      <h1>Habit Tracker</h1>
      <div className="habit__container">
        <div className="habit__container--header">
          <h2>Habit Tracker</h2>
          <button className="habit__container--header--btn">Add Habit</button>
        </div>
        <div className="habit__container--body">
          <div className="habit__container--body--item">
            <h3>Monday</h3>
            <button className="habit__container--body--item--btn">Done</button>
          </div>
          <div className="habit__container--body--item">
            <h3>Tuesday</h3>
            <button className="habit__container--body--item--btn">Done</button>
          </div>
          <div className="habit__container--body--item">
            <h3>Wednesday</h3>
            <button className="habit__container--body--item--btn">Done</button>
          </div>
          <div className="habit__container--body--item">
            <h3>Thursday</h3>
            <button className="habit__container--body--item--btn">Done</button>
          </div>
          <div className="habit__container--body--item">
            <h3>Friday</h3>
            <button className="habit__container--body--item--btn">Done</button>
          </div>
          <div className="habit__container--body--item">
            <h3>Saturday</h3>
            <button className="habit__container--body--item--btn">Done</button>
          </div>
          <div className="habit__container--body--item">
            <h3>Sunday</h3>
            <button className="habit__container--body--item--btn">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
