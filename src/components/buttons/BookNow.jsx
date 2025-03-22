import { Link } from 'react-router-dom';

export default function BookNow() {

  return (
    <Link to="/bookings"
      className="active">
      <button type="submit" className="btn btn-primary btn-primary-branded">
        Book now
      </button>
    </Link>
  );
}