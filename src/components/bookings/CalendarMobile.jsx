import YearMobile from "./YearMobile";

export default function CalendarMobile({ calendar }) {
  return (
    <div>
      <h2>Calendar</h2>
      {calendar.map((year) => (
        <YearMobile key={year.year} year={year} />
      ))}
    </div>
  );
}