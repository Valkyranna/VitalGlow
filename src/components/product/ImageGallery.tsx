'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: {
    main: string;
    gallery: string[];
  };
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const allImages = [images.main, ...images.gallery];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-leica-gray-light">
        <Image
          src={allImages[selectedImage]}
          alt={`${alt} - Image ${selectedImage + 1}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {allImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden border-2 transition-all duration-200 ${
              selectedImage === index
                ? 'border-vital-green'
                : 'border-transparent hover:border-leica-gray'
            }`}
          >
            <Image
              src={image}
              alt={`${alt} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;