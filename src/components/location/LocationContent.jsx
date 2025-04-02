import { useState, useEffect } from 'react';
import LocationIntro from './LocationIntro';
import LocationMap from './LocationMap';
import LocationGrid from './LocationGrid';
import ImageModal from '../ImageModal';

export default function LocationContent() {
  const [modalSrc, setModalSrc] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);

  function imageClicked(src, alt) {
    setModalSrc(src);
    setModalAlt(alt);
  }

  function dismisModal() {
    setModalSrc(null);
    setModalAlt(null);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        dismisModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='space-above'>
      <LocationIntro />
      <LocationMap />
      { modalSrc && 
        <ImageModal
          onClose={dismisModal}
          imageSrc={modalSrc}
          altText={modalAlt}
        />
      }
      <LocationGrid 
        action={imageClicked}
      />
    </div>
  );
}

