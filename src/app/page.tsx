"use client"
import { useRef } from "react";
import PhoneIconbg from '../../public/CallBg.png'
import Messbg from '../../public/MessBg.png'
import lICEN from "../../public/licensed icon.png";
import map from "../../public/map.png";
import Master from '../../public/masters icon.png'
import Trust from '../../public/trusted icon.svg'
import Gradient from "../../public/gradient.png";
import AddressIcon from '../../public/address img.svg'
import PhoneIcon from '../../public/phone img.png'
import HourIcon from '../../public/hours img.png'
import Image from "next/image";
import imgThum from '../../public/img thumbnail.png'
import line from '../../public/line.svg'
import { Barlow, Work_Sans } from "next/font/google";
import LandingForm from "./Components/Form/form";
import { CarouselDemo } from "./Components/browserSerCarousel";
import Tab from "./Components/Gallery";
import TestimonialCarousel from "./Components/Reviews";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const barlow = Barlow({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400", "700"], // Specify weights as needed
  display: "swap", // Optional: control font-display behavior
});
const workSans = Work_Sans({
  subsets: ["latin"], // Specify subsets as needed
  weight: ["400", "500", "700"], // Specify weights as needed
  display: "swap", // Optional: control font-display behavior
});


export default function Home() {
  const router = useRouter();
  const P = useRef<HTMLHeadingElement>(null);

  // Scroll function with correct type handling
  const scrollToElement = (ref: React.RefObject<HTMLHeadingElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      {/* HERO PAGE  */}
      <section className="relative bg-cover bg-center hero flex items-center justify-center">
        <Image src={Gradient} alt="Description" className="absolute top-0 left-0 w-full h-[500px] object-cover" />
        <div className="p-4 w-[100%] md:w-[80%] lg:w-[60%] text-center mt-32">
          <p className={`leading-none text-white text-[27px] mt-4 sm:text-[34px] md:text-[54px] font-extrabold ${barlow.className}`} > THE ULTIMATE CONVENIENCE FOR BUSY PEOPLE </p>
          <p className={`${workSans.className} text-white text-[14px] lg:text-[20px] md:text-[18px] sm:text-[14px] mt-4`} >Experience the Convenience of In-Home Barber Services </p>
          <div className="flex justify-center items-center gap-6 mt-4">
            <button
              onClick={() => router.push('/Login')}
              className={`relative z-10 bg-[#DEC7A6] text-black py-3 px-6 font-extrabold text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-90 transition-all !cursor-pointer ${barlow.className}`}
            >
              BOOK AN APPOINTMENT
            </button>
            <button
              className={`lg:flex md:flex sm:flex hidden relative z-10 border-2 border-white text-white py-3 px-6 font-extrabold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-white hover:text-black transition-all ${barlow.className}`}
              onClick={() => scrollToElement(P)}
            >
              BROWSER SERVICES
            </button>


          </div>
        </div>
      </section>
      {/* HERO PAGE  */}
      {/* ADRESS & PHONE & hOURS  */}
      <div className="flex justify-center items-center">
        <div className={` absolute border-2 border-white bg-white w-[85%]  p-4 top-[500px] flex justify-between ${barlow.className}`}>
          <div className="lg:w-[30%] md:w-[30%] sm:w-[50%] w-[100%] p-4 hidden flex-col items-center justify-center lg:flex md:flex sm:flex ">
            <Image src={AddressIcon} alt="Description" className="w-9 h-9" />
            <h6 className=' font-extrabold text-center text-[14px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>ADDRESS</h6>
            <Image src={line} alt="Description" className="w-12 h-9 -mt-4" />
            <p className="lg:text-[15px] md:text-[14px] sm:[14px] text-[11px] font-bold">3696 Lynden Road, Lefroy <br /> Ontario canada</p>
          </div>
          <div className="lg:w-[30%] md:w-[30%] sm:w-[50%] w-[100%] p-4  flex flex-col items-center justify-center">
            <Image src={PhoneIcon} alt="Description" className="w-9 h-9" />
            <h6 className=' font-extrabold text-center text-[14px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>PHONE</h6>
            <Image src={line} alt="Description" className="w-12 h-9 -mt-4" />
            <p className="font-bold"><a href="tel:+2347044708007">+2347044708007</a> <br /> </p>
            <p className="font-bold"><a href="tel:+2347044708007"> +2347044708007</a></p>
          </div>
          <div className="lg:w-[30%] md:w-[30%] sm:w-[50%] w-[100%] p-4  flex-col items-center justify-center lg:flex md:flex sm:flex hidden">
            <Image src={HourIcon} alt="Description" className="w-9 h-9" />
            <h6 className=' font-extrabold text-center text-[14px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>HOURS</h6>
            <Image src={line} alt="Description" className="w-12 h-9 -mt-4" />
            <p className="lg:text-[15px] md:text-[14px] sm:[14px] text-[11px] font-bold">Mon - Sat: 9AM - 8PM</p>
            <p className="lg:text-[15px] md:text-[14px] sm:[14px] text-[11px] font-bold">Sun: 9AM - 6PM</p>
          </div>
        </div>
      </div>
      {/* ADRESS & PHONE & hOURS  */}

      <section className="bg-[#F8F5EF] w-[100%] p-4">
        <div className="w-[90%] m-auto  mt-56 lg:flex md:flex sm:block block justify-between">
          <div className="lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%] p-4">
            <div className={`${barlow.className} font-extrabold `}>
              <p className="md:text-[30px] lg:text-[53px] sm:text-[30px] text-[25px] lg:text-left md:text-left sm:text-center text-center">YOUR PERSONAL  BARBER SERVICE AT YOUR HOME</p>
            </div> <br />
            <p className={`${workSans.className} font-medium lg:text-[16px] md:text-[15px] sm:text-[15px] text-[15px] lg:text-left md:text-left sm:text-center text-center`}>Nothing prospers wisely; I am balanced. Transformation shapes the path of success; the rhythm of progress sharpens the will, and destiny unfolds with time</p> <br />
            <div className={`flex lg:gap-28 md:gap-28 sm:gap-24 gap-12  ${barlow.className}`}>
              <div>
                <h1 className="font-extrabold lg:text-[45px] sm:text-[30px] text-[25px]">
                  99<span className="text-[#DEC7A6]  align-top lg:text-[40px] sm:text-[25px] text-[25px]">%</span>
                </h1>
                <p className="font-extrabold lg:text-[15px] md:text-[15px] sm:text-[12px] text-[12px]">CUSTOMER <br /> SATISFACTION</p>
              </div>
              <div>
                <h1 className='font-extrabold lg:text-[45px] sm:text-[30px] text-[25px]'>
                  10<span className="text-[#DEC7A6]  align-top  lg:text-[40px] sm:text-[25px] text-[25px]">+</span>
                </h1>
                <p className="font-extrabold lg:text-[15px] md:text-[15px] sm:text-[12px] text-[12px] ">YEARS OF <br /> EXPERIENCE</p>
              </div>
            </div>

          </div>
          <div className="lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%] p-4 mt-2">
          <Image src={imgThum} alt="Description" className="" />
            {/* <LandingForm /> */}
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
              <button
                className={`relative z-10 bg-[#DEC7A6] text-black py-3 px-6 font-extrabold text-sm sm:text-base md:text-lg lg:text-xl hover:opacity-90 transition-all !cursor-pointer ${barlow.className}`}
                onClick={() => router.push('/Login')}
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
      </section>

      <section className="bg-[#F8F5EF] w-full p-4">
        <div className="mt-10 text-center">
          <h1 ref={P} className={`${barlow.className} font-extrabold text-[25px] lg:text-[40px] md:text-[35px] sm:text-[30px]`}>
            BROWSE OUR SERVICES
          </h1>
          <div className="mt-6 flex justify-center">
            <h5 className={`${workSans.className} lg:w-[50%] md:w-[60%] sm:w-[90%] w-[95%] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]`}>
              Nothing is more important than growth; I develop myself with determination, transforming challenges into opportunities for progress, ensuring my journey is steady, purposeful, and always striving for balance and consistency.
            </h5>
          </div>
          <div className=" lg:w-[70%] md:w-[70%] sm:w-[100%] w-[100%] m-auto p-4 mt-10 ">
            <CarouselDemo />
          </div>
        </div>
      </section>
      {/* PHOTO &&& VIDEO  */}
      <section className="bg-[#F8F5EF] pt-10 pb-10">
        <h5 className={`${barlow.className} text-[25px] lg:text-[40px] md:text-[35px] sm:text-[30px text-center mb-5 `}>GALLERY</h5>
        <Tab></Tab>
      </section>
      {/* PHOTO &&& VIDEO  */}

      <section className="bg-white w-full p-4 ">
        <div className="mt-10 text-center">
          <h1 className={`${barlow.className} font-extrabold text-[25px] lg:text-[40px] md:text-[35px] sm:text-[30px]`}>
            WHY CHOOSE ME
          </h1>
          <div className="mt-6 flex justify-center">
            <h5 className={`${workSans.className} lg:w-[50%] md:w-[60%] sm:w-[90%] w-[95%] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]`}>
              We are committed to providing a grooming experience that combines precision, professionalism, and personal care. With skilled barbers who tailor every haircut and beard style to your preferences, we ensure you leave looking and feeling your best.
            </h5>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className={`border-2 border-white bg-white w-[90%]  p-4 flex justify-between ${barlow.className}`}>
            <div className="lg:w-[30%] md:w-[30%] sm:w-[50%] w-[100%] p-4 hidden flex-col items-center justify-center lg:flex md:flex sm:flex ">
              <Image src={lICEN} alt="Description" className="w-12 h-12" />
              <h6 className=' font-extrabold text-center text-[14px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>LICENSED</h6>
              <Image src={line} alt="Description" className="w-12 h-9 -mt-4" />
              <p className={`text-center ${workSans.className}`}>Our team of licensed and insured barbers follow strict cleanliness and sanitation guidelines for a safe and comfortable experience. </p>
            </div>
            <div className="lg:w-[30%] md:w-[30%] sm:w-[50%] w-[100%] p-4  flex flex-col items-center justify-center">
              <Image src={Master} alt="Description" className="w-12 h-12" />
              <h6 className=' font-extrabold text-center text-[14px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>MASTERS</h6>
              <Image src={line} alt="Description" className="w-12 h-9 -mt-4" />
              <p className={`text-center ${workSans.className}`}>Our barbers are passionate about their craft and aim to provide high-quality haircuts for every client. </p>
            </div>
            <div className="lg:w-[30%] md:w-[30%] sm:w-[50%] w-[100%] p-4  flex-col items-center justify-center lg:flex md:flex sm:flex hidden">
              <Image src={Trust} alt="Description" className="w-12 h-12" />
              <h6 className=' font-extrabold text-center text-[14px] lg:text-[18px] md:text-[16px] sm:text-[14px]'>TRUSTED</h6>
              <Image src={line} alt="Description" className="w-12 h-9 -mt-4" />
              <p className={`text-center ${workSans.className}`}>We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients. </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <TestimonialCarousel />
        </div>
      </section>

      <section className="relative bg-cover bg-center hero1 flex flex-col lg:flex-row mt-20 justify-between items-center">
  {/* Background Image */}
  <Image
    src={Gradient}
    alt="Background Gradient"
    className="absolute top-0 left-0 w-full h-[300px] sm:h-[400px] object-cover"
  />

  {/* Content Wrapper */}
  <div className="relative flex flex-col lg:flex-row justify-between items-center w-full z-10 px-4">
    {/* Heading Section */}
    <div className="text-center lg:text-left w-full lg:w-[30%] mt-10 lg:mt-0 lg:-mt-20">
      <h1
        className={`${barlow.className} font-extrabold text-white text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-snug`}
      >
        MAKE AN APPOINTMENT
      </h1>
      <p className="text-white mt-4 text-[14px] sm:text-[16px] md:text-[18px]">
        Nulla egestas sapien integer mi fermentum tellus tristique consequat pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel prci eu magna in senectus sit eget justo.
      </p>

      {/* Phone Contact */}
      <div className="flex gap-4 items-center pt-5">
        <Image
          src={PhoneIconbg}
          alt="Phone Icon"
          className="w-9 h-9 flex-shrink-0"
        />
        <div>
          <p
            className={`text-white ${barlow.className} font-extrabold text-[14px] sm:text-[16px]`}
          >
            GIVE US A CALL
          </p>
          <p
            className={`${barlow.className} font-medium text-white text-[12px] sm:text-[14px]`}
          >
            (475) 453 - 3465
          </p>
        </div>
      </div>

      {/* Email Contact */}
      <div className="flex gap-4 items-center pt-5">
        <Image
          src={Messbg}
          alt="Email Icon"
          className="w-9 h-9 flex-shrink-0"
        />
        <div>
          <p
            className={`text-white ${barlow.className} font-extrabold text-[14px] sm:text-[16px]`}
          >
            SEND US AN EMAIL
          </p>
          <p
            className={`${barlow.className} font-medium text-white text-[12px] sm:text-[14px]`}
          >
            elishaoguntunde@gmail.com
          </p>
        </div>
      </div>
    </div>

    {/* Form Section */}
    <div className="w-full lg:w-[40%] p-6 mt-10 sm:mt-20 lg:mt-0 bg-white shadow-lg rounded-lg z-10">
      <LandingForm />
    </div>
  </div>
</section>

{/* Map Section */}
<div>
  <Image
    src={map}
    alt="Map"
    className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
  />
</div>


    </main>
  );
}
