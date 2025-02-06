import React from 'react';

export default function Day({ day, dayIndex }) {
  return (
    <td
      key={dayIndex}
      className={`day-cell ${day.status}`}
      title={day.status !== 'filler' ? day.status : ''}
    >
      {day.status !== 'filler' ? day.dayOfMonth : ''}
    </td>
  );
}