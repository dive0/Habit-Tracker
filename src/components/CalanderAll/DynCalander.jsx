import './Calander.css';
import JournalEntry from '../JournalEntry';


export default function DynCalander({ currentDate, setCurrentDate, selectedDate, setSelectedDate }) {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startingDay = firstDayOfMonth.getDay();

    const days = [];

    for (let i = 0; i < startingDay; i++) {
        days.push(<div key={`empty-${i}`} className="day-cell"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isCurrentDay =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

        const isSelectedDay = selectedDate === day;

        
        const uniqueId = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        days.push(
            <div
                key={uniqueId}
                id={uniqueId}
                className={`day-cell${isCurrentDay ? ' current-day' : ''}${isSelectedDay ? ' selected-day' : ''}`}
                onClick={() => setSelectedDate(day)}
            >
                {day}
                {isSelectedDay && <JournalEntry selectedDate={selectedDate} currentDate={currentDate} uniqueId={uniqueId} />}
                
            </div>
        );
    }

    return (
        <div id="days" className="calendar-days">
            {days}
        </div>
    );
}
