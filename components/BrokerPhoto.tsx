import React, { useState } from 'react';
import saanikaPhoto from '../src/assets/images/saanika_official_photo.jpeg';

interface BrokerPhotoProps {
  mode?: 'portrait' | 'avatar';
  className?: string;
}

export const BrokerPhoto: React.FC<BrokerPhotoProps> = ({
  mode = 'portrait',
  className = '',
}) => {
  const [imgSrc, setImgSrc] = useState<string>(saanikaPhoto);

  const handleImageError = () => {
    // Graceful fallback to static public file if needed
    if (imgSrc !== '/BM6A8382.jpeg') {
      setImgSrc('/BM6A8382.jpeg');
    }
  };

  if (mode === 'avatar') {
    return (
      <div className={`relative inline-block select-none ${className}`}>
        <img 
          id="saanika-note-image"
          src={imgSrc} 
          alt="Saanika Prabhu, Licensed Texas Insurance Broker" 
          className="rounded-full w-40 h-40 object-cover object-[center_15%] shadow-lg border-4 border-white bg-slate-100 pointer-events-none"
          onError={handleImageError}
          referrerPolicy="no-referrer" 
          draggable={false}
        />
      </div>
    );
  }

  // Portrait mode (About Me Page) - permanently locked, no upload or change controls
  return (
    <div 
      className={`relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm select-none ${className}`}
    >
      <img 
        id="broker-profile-image"
        src={imgSrc} 
        alt="Saanika Prabhu, Licensed Texas Insurance Broker" 
        className="w-full h-auto object-contain block bg-slate-50 pointer-events-none"
        onError={handleImageError}
        referrerPolicy="no-referrer"
        draggable={false}
      />
    </div>
  );
};

export default BrokerPhoto;
