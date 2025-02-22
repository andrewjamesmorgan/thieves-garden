import React from 'react';
import Day from './Day';

export default function YearFull({ year }) {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const repeatedWeekdays = Array.from({ length: 37 }, (_, i) => weekdays[i % 7]);

  return (
    <>
      {year && year.year && <div>
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
            {year && year.months && year.months.map((month, monthIndex) => (
              <tr key={monthIndex}>
                <td className="month-name">{month.monthName}</td>
                {month.days && month.days.map((day, dayIndex) => (
                   <Day key={dayIndex} day={day} dayIndex={dayIndex}/>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
    </>
  );
}