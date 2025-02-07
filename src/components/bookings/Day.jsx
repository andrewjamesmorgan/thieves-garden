import React from 'react';

export default function Day({ day, dayIndex }) {
  function prettyPrintBooking(bookingData) {
    if (bookingData.status === 'available') { return 'Available'; }

    // Destructure to remove _id and property
    const { _id, property, startDate, endDate, ...rest } = bookingData;
    const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
    const formattedEndDate = new Date(endDate).toISOString().split('T')[0];
    const formattedBooking = {
        ...rest,
        startDate: formattedStartDate,
        endDate: formattedEndDate
    };
    return JSON.stringify(formattedBooking, null, 4);
  }

  return (
    <td
      key={dayIndex}
      className={`day-cell ${day.status.status}`}
      title={day.status !== 'filler' ? prettyPrintBooking(day.status) : ''}
    >
      {day.status !== 'filler' ? day.dayOfMonth : ''}
    </td>
  );
}