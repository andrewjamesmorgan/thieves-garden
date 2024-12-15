import YearMobile from "./YearMobile";

export default function CalendarMobile({ calendar }) {
  return (
    <div>
      {calendar.map((year) => (
        <YearMobile key={year.year} year={year} />
      ))}
    </div>
  );
}