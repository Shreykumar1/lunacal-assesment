"use client"
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../public/assests/1.jpeg";
import img2 from "../public/assests/2.jpeg";
import img3 from "../public/assests/3.jpeg";
import img4 from "../public/assests/4.jpeg";
import Image from "next/image";
import Left from "./Left";

const GalleryTest = () => {
  const [images, setImages] = useState([img1, img2, img3, img4]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleClickLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleClickRight = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, newImage]);
    }
  };


  return (
    <div className="w-[720px] h-[330px] bg-[#363C43] rounded-[28px] pl-3 pr-6 py-4 flex shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)]">
      {/* <LeftSection /> */}
      <Left />
      {/* Top Section */}
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          {/* Left - Gallery Button */}
          <div className="flex items-center">
            <button className="bg-black text-white py-4 px-10 ml-2 rounded-2xl btn tracking-wide">Gallery</button>
          </div>
          {/* Right - Add Button */}
          <div className="flex justify-evenly items-center gap-10 pr-6 pb-6">
            <label className=" text-white  px-6 py-3 btn4 text-sm cursor-pointer
              bg-[rgba(255,255,255,0.03)] shadow-[inset_0px_0px_48.9px_rgba(255,255,255,0.05),inset_0px_3.26px_3.26px_rgba(255,255,255,0.15),-0.5px_-0.5px_6.9px_rgba(255,255,255,0.25),9px_10px_7.1px_rgba(0,0,0,0.4)] backdrop-blur-[52.28px] rounded-[104px]">
              + ADD IMAGE
              <input
                type="file"
                accept="image/*"
                onChange={handleAddImage}
                style={{ display: "none" }}
              />
            </label>
            <div className="flex justify-center items-center gap-5 mr-4">
              <button
                className={`w-12 h-12 flex items-center justify-center  bg-gradient-to-tr from-[#303439] to-[#161718] shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_5px_30px_5px_#101213] text-white rounded-full `}
                onClick={handleClickLeft}>
                <FaArrowLeft />
              </button>
              <button
                className={`w-12 h-12 flex items-center justify-center  bg-gradient-to-tr from-[#303439] to-[#161718] shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_5px_30px_5px_#101213] text-white rounded-full`}
                onClick={handleClickRight}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-hidden relative gap-4 h-[550px] pt-5 pl-1  mr-10 mt-5">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 210}px)`,
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={170}
                height={179}
                alt="gallery"
                className="min-w-[170px] h-[179px] mx-2 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.3)] grayscale hover:grayscale-0 hover:rotate-[-3deg] hover:scale-110 transition-all duration-500 ease-in-out"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GalleryTest;
