import GalleryTest from "@/components/GalleryTest";
import AboutCard from "@/components/AboutCard";

export default function Home() {
  return (
    <div className="flex  bg-gray-900 text-white bg-gradient-to-b from-[#373E44] to-[#191B1F] rounded-3xl">
      {/* Left Half (Empty but responsive) */}
      <div className="hidden lg:block w-1/2 flex-shrink"></div>
      
      {/* Right Half (Widgets) */}
      <div className="w-full lg:w-3/4 xl:w-1/2 flex flex-col space-y-6 p-6 mr-10 flex-shrink-0">
        <AboutCard />
        {/* <AboutMeWidget /> */}
        {/* <Gallery /> */}
        <div className="bg-gray-500 w-4/5 h-2 text-lg mx-auto shadow-md rounded-xl divider pt-2"></div>
        <GalleryTest />
        <div className="bg-gray-500 divider pt-2 text-gray-500 w-4/5 h-2 mx-auto shadow-md rounded-xl "></div>
      </div>
    </div>
  );
}
