import Image from "next/image";
import AboutMeWidget from './components/AboutMeWidget';
import GalleryWidget from './components/GalleryWidget';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Half (Empty but responsive) */}
      <div className="hidden lg:block w-1/2"></div>
      
      {/* Right Half (Widgets) */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 p-6">
        <AboutMeWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}
