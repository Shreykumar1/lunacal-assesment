"use client"
import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { GrDrag } from "react-icons/gr";

const GalleryTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { src: '/images/slide1.jpg', alt: 'Slide 1' },
    { src: '/images/slide2.jpg', alt: 'Slide 2' },
    { src: '/images/slide3.jpg', alt: 'Slide 3' },
    { src: '/images/slide3.jpg', alt: 'Slide 3' },
    { src: '/images/slide3.jpg', alt: 'Slide 3' },
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
    <div className="w-[720px] h-[330px] bg-[#363C43] rounded-[28px] pl-3 pr-6 py-4 flex shadow-md">
      {/* Top Section */}
      <div className="flex flex-col pr-3">
        <BsQuestionCircle className="text-white w-5 h-5"/>
        <GrDrag className="text-white w-5 h-5  mt-20 "/>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          {/* Left - Gallery Button */}
          <div className="flex items-center">
            <button className="bg-black text-white py-2 px-8 rounded-2xl btn tracking-wide">Gallery</button>
          </div>
          {/* Right - Add Image Button and Arrows */}
          <div className="flex items-center gap-2">
            <button className="bg-[#555A62] text-white py-2 px-4 rounded-full shadow-md">
              + Add Image
            </button>
            <div className="flex gap-2">
              <button onClick={prevSlide} className="w-8 h-8 flex items-center justify-center bg-[#555A62] shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_5px_30px_5px_#101213] text-white rounded-full ">
                ←
              </button>
              <button onClick ={nextSlide} className="w-8 h-8 flex items-center justify-center bg-[#555A62] shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_5px_30px_5px_#101213] text-white rounded-full ">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 overflow-hidden"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-36 border flex-shrink-0">
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
      </div>
    </div>
  );
};

export default GalleryTest;
