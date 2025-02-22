import YearFull from "./YearFull";

export default function CalendarFull({ calendar }) {
  return (
    <div>
      {calendar.map((year, index) => (
        <YearFull key={`${year.year}-${index}`} year={year} />
      ))}
    </div>
  );
}