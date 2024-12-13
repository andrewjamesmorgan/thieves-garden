import YearFull from "./YearFull";

export default function CalendarFull({ calendar }) {
  return (
    <div>
      <h2>Calendar</h2>
      {calendar.map((year) => (
        <YearFull key={year.year} year={year} />
      ))}
    </div>
  );
}