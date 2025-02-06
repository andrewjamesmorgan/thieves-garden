import React from 'react';
import Day from './Day';

export default function YearMobile({ year }) {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getWeeks = (days) => {
    const weeks = [];
    const emptyWeek = Array.from({ length: 7 }, () => ({ status: 'filler' }));
    let week = [];

    days.forEach((day, index) => {
      week.push(day);
      if (week.length === 7 || index === days.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
    if (weeks.length < 6) {
      weeks.push(emptyWeek);
    }

    return weeks;
  };

  return (
    <div className="year-mobile-container">
      {year && year.year && <h3 className="year">{year.year}</h3>}
      <div className='calendar-grid'>
        {year && year.months && year.months.map((month, monthIndex) => {
          const weeks = getWeeks(month.days);

          return (
            <div key={monthIndex} className="month-container">
              <h4 className="month-title">{month.monthName}</h4>
              <table className="month-table">
                <thead>
                  <tr>
                    {weekdays.map((day, index) => (
                      <th key={index} className="day-header">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeks && weeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((day, dayIndex) => (
                        <Day day={day} dayIndex={dayIndex}/>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
        </div>
    </div>
  );
}