// components/Carousel.js
"use client"
import { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { src: '/images/slide1.jpg', alt: 'Slide 1' },
    { src: '/images/slide2.jpg', alt: 'Slide 2' },
    { src: '/images/slide3.jpg', alt: 'Slide 3' },
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={item.src} alt={item.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;





{/* <div className="flex gap-4 pt-20 overflow-hidden" 
style={{ transform: `translateX(-${currentIndex * 100}%)` }}
> */}

  {/* Image Cards */}
  // {[1, 2, 3,4].map((_, index) => (
  //   <div
  //     key={index}
  //     className="w-1/3 h-[130px] bg-gray-700 rounded-lg overflow-hidden"
  //   >
  //     <img
  //       src="https://via.placeholder.com/150"
  //       alt="Gallery item"
  //       className="object-cover w-full h-full"
  //     />
  //   </div>
  // ))}
// </div>