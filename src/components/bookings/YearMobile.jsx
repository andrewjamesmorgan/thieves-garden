import React from 'react';

export default function YearMobile({ year }) {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getWeeks = (days) => {
    const weeks = [];
    let week = [];

    days.forEach((day, index) => {
      week.push(day);
      if (week.length === 7 || index === days.length - 1) {
        weeks.push(week);
        week = [];
      }
    });

    return weeks;
  };

  return (
    <div className="year-mobile-container">
      <h3 className="year">{year.year}</h3>
      <div className='calendar-grid'>
        {year.months.map((month, monthIndex) => {
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
                  {weeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((day, dayIndex) => (
                        <td
                          key={dayIndex}
                          className={`day-cell ${day.status}`}
                        >
                          {day.status !== 'filler' ? day.dayOfMonth : ''}
                        </td>
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