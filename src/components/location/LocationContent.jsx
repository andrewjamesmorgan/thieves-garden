import LocationIntro from './LocationIntro';
import LocationMap from './LocationMap';
import LocationGrid from './LocationGrid';

export default function LocationContent() {

  return (
    <div className='space-above'>
      <LocationIntro />
      <LocationMap />
      <LocationGrid />
    </div>
  );
}

