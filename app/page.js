import Image from "next/image";
import AboutMeWidget from '../components/AboutMeWidget';
import Gallery from '../components/Gallery';
import GalleryTest from "@/components/GalleryTest";
import Carousel from "@/components/Carousel";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white bg-gradient-to-b from-[#373E44] to-[#191B1F] rounded-3xl">
      {/* Left Half (Empty but responsive) */}
      <div className="hidden lg:block w-1/2"></div>
      
      {/* Right Half (Widgets) */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 p-6 mr-10">
        <AboutMeWidget />
        {/* <Gallery /> */}
        <div className="bg-gray-500 text-gray-500 w-4/5 h-2 mx-auto shadow-md rounded-xl"></div>
        <GalleryTest />
        <div className="bg-gray-500 text-gray-500 w-4/5 h-2 mx-auto shadow-md rounded-xl"></div>
        <Carousel />
        <UploadForm />
      </div>
    </div>
  );
}
