import BookingsIntro from "./BookingsIntro";
import BookingsForm from "./BookingsForm";
import Calendar from './Calendar';

export default function BookingsContent() {
  return (
    <div className='space-above'>
      <BookingsIntro />
      <Calendar />
      <div className="container">
        <BookingsForm />
      </div>
    </div>
  );
}