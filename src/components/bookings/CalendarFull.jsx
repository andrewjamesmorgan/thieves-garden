import YearFull from "./YearFull";

export default function CalendarFull({ calendar }) {
  return (
    <div>
      {calendar.map((year) => (
        <YearFull key={year.year} year={year} />
      ))}
    </div>
  );
}