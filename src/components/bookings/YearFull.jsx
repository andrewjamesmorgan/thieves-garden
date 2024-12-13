import React from 'react';

export default function YearFull({ year }) {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Create a sequence of 37 repeating weekday headers
  const repeatedWeekdays = Array.from({ length: 37 }, (_, i) => weekdays[i % 7]);

  return (
    <div>
      <h3 className="year">{year.year}</h3>
      <table className="calendar-table">
        <thead>
          <tr>
            <th></th>
            {repeatedWeekdays.map((day, index) => (
              <th key={index} className="day-header">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {year.months.map((month, monthIndex) => (
            <tr key={monthIndex}>
              {/* Month Name */}
              <td className="month-name">{month.monthName}</td>
              {/* Days of the Month */}
              {month.days.map((day, dayIndex) => (
                <td key={dayIndex} className={`day-cell ${day.status}`}>
                  {day.status !== 'filler' ? day.dayOfMonth : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}