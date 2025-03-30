import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal';
import StayGrid from './StayGrid';
import StayIntro from './StayIntro';

export default function StayContent() {
  const [modalSrc, setModalSrc] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);

  useEffect(() => {
    const currentTenantValue = localStorage.getItem('tg-tenant');
    if (currentTenantValue !== 'true') {
      localStorage.setItem('tg-tenant', 'true');
      window.location.reload();
    }
  }, []);

  function imageClicked(src, alt) {
    setModalSrc(src);
    setModalAlt(alt);
  }

  function dismisModal() {
    setModalSrc(null);
    setModalAlt(null);
  }

  return (
    <div className='space-above'>
      <StayIntro />
      {modalSrc && 
        <ImageModal
          onClose={dismisModal}
          imageSrc={modalSrc}
          altText={modalAlt}
        />
      }
      <StayGrid
        action={imageClicked}
      />
    </div>
  );
}

