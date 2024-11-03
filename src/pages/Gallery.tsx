import React, { useState } from 'react';
import { GalleryImage } from '../types';
import AgeVerification from '../components/AgeVerification';

const images: GalleryImage[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80',
    title: 'Main Hall',
    nsfw: false,
    photographer: 'Luna Silver',
    date: '2024-02-15'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80',
    title: 'Stage Performance',
    nsfw: false,
    photographer: 'Star Walker',
    date: '2024-02-16'
  }
];

export default function Gallery() {
  const [isVerified, setIsVerified] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    if (image.nsfw && !isVerified) {
      return;
    }
    setSelectedImage(image);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {!isVerified && <AgeVerification onVerify={() => setIsVerified(true)} />}
      
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Gallery
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Explore moments captured at Moonlight Haven.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map(image => (
          <div 
            key={image.id}
            className="relative group cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className={`
                w-full h-64 object-cover rounded-lg
                ${image.nsfw && !isVerified ? 'blur-lg' : ''}
              `}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition rounded-lg">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-sm">By {image.photographer}</p>
                <p className="text-sm">{new Date(image.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}