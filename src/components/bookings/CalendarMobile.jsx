import YearMobile from "./YearMobile";

export default function CalendarMobile({ calendar }) {
  return (
    <div>
      {calendar.map((year, index) => (
        <YearMobile key={`${year.year}-${index}`} year={year} />
      ))}
    </div>
  );
}