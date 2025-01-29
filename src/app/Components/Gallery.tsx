import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Beard from "../../../public/Beard Grooming.jpeg";
import Adult from "../../../public/Adult Hair.jpeg";
import BeardTrim from "../../../public/Beard Trim.avif";
import Scalp from "../../../public/premium_photo-1706800175636-c3efbcf75c68.avif";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Tab = () => {
  const images = [
    { id: 1, src: Beard, alt: "Image 1" },
    { id: 2, src: Adult, alt: "Image 2" },
    { id: 3, src: Beard, alt: "Image 3" },
    { id: 4, src: Scalp, alt: "Image 4" },
    { id: 5, src: Beard, alt: "Image 5" },
    { id: 6, src: Adult, alt: "Image 6" },
    { id: 7, src: Beard, alt: "Image 7" },
    { id: 8, src: Scalp, alt: "Image 8" },
    { id: 9, src: Beard, alt: "Image 9" },
    { id: 10, src: Beard, alt: "Image 10" },
    { id: 11, src: Adult, alt: "Image 11" },
    { id: 12, src: Scalp, alt: "Image 12" },
  ];

  const videos = [
    { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 5, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 6, src: "https://www.w3schools.com/html/movie.mp4" },
  ];

  return (
    <div className="flex items-center justify-center border-2 rounded-lg w-[90%] m-auto p-4">
      <Tabs defaultValue="account" className="w-full max-w-5xl">
        <TabsList className="flex justify-center">
          <TabsTrigger value="account" className="text-[16px]">
            Photos
          </TabsTrigger>
          <TabsTrigger value="password" className="text-[16px]">
            Videos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="shadow-md rounded-md overflow-hidden bg-gray-100 transition-transform hover:scale-105 h-40 sm:h-52 md:h-64 lg:h-80"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-8">
              <button
                className={`relative z-10 bg-[#DEC7A6] text-black py-3 px-6 font-extrabold text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-90 transition-all !cursor-pointer ${barlow.className}`}
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">
          {/* Six Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="shadow-md rounded-lg overflow-hidden bg-gray-100"
              >
                <video
                  controls
                  className="rounded-lg w-full h-auto"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8">
              <button
                className={`relative z-10 bg-[#DEC7A6] text-black py-3 px-6 font-extrabold text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-90 transition-all !cursor-pointer ${barlow.className}`}
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tab;
