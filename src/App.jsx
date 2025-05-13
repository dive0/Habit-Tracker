import './App.css'



function App() {
  return (
    <div className='habit'>
      <h1>Habit Tracker</h1>
      <div className='habit__container'>
        <div className='habit__container--header'>
          <h2>Habit Tracker</h2>
          <button className='habit__container--header--btn'>Add Habit</button>
        </div>
        <div className='habit__container--body'>
          <div className='habit__container--body--item'>
            <h3>Monday</h3>
            <button className='habit__container--body--item--btn'>Done</button>
          </div>
          <div className='habit__container--body--item'>
            <h3>Tuesday</h3>
            <button className='habit__container--body--item--btn'>Done</button>
          </div>
          <div className='habit__container--body--item'>
            <h3>Wednesday</h3>
            <button className='habit__container--body--item--btn'>Done</button>
          </div>
          <div className='habit__container--body--item'>
            <h3>Thursday</h3>
            <button className='habit__container--body--item--btn'>Done</button>
          </div>
          <div className='habit__container--body--item'>
            <h3>Friday</h3>
            <button className='habit__container--body--item--btn'>Done</button>
          </div>
          <div className='habit__container--body--item'>
            <h3>Saturday</h3>
            <button className='habit__container--body--item--btn'>Done</button>
          </div>
          <div className='habit__container--body--item'>
            <h3>Sunday</h3>
            <button className='habit__container--body--item--btn'>Done</button>
          </div>
      </div>

    </div>
  </div>
  )
}

export default App
