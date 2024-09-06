"use client"
import React from 'react';
import { useState } from 'react';

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Gallery</h2>
        <button className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500">
          + Add Image
        </button>
      </div>

      {/* Image Slider */}
      <div className="flex items-center space-x-2">
        <button onClick={prevImage} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          &#8249;
        </button>

        <img
          src={images[currentIndex]}
          alt="Gallery"
          className="w-48 h-32 object-cover rounded-lg"
        />

        <button onClick={nextImage} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
