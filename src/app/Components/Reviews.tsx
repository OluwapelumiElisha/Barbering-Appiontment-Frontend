import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Beard from "../../../public/Beard Grooming.jpeg";
import Adult from "../../../public/Adult Hair.jpeg";
const testimonials = [
  {
    id: 1,
    name: "Sam Houston",
    title: "THE BEST BARBER SERVICES",
    review:
      "Et proin ut in dignissim sem non a nullam magna lectus urna et dui quam tellus imperdiet sit purus.",
    image: Beard.src,
  },
  {
    id: 2,
    name: "John Doe",
    title: "EXCELLENT EXPERIENCE",
    review:
      "Fringilla scelerisque diam amet fermentum orci fringilla aliquet nulla lectus erat eu auctor.",
    image: Adult.src,
  },
  {
    id: 3,
    name: "Jane Smith",
    title: "HIGHLY RECOMMENDED",
    review:
      "Amet fermentum orci fringilla aliquet nulla lectus erat eu auctor et proin ut in dignissim sem.",
    image: Beard.src,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 relative">
      <div className="flex items-center justify-center">
        {/* Testimonial Card */}
        <div className="shadow-md p-6 text-center rounded-lg border">
          {/* Profile Image */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Stars */}
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
          {/* Title */}
          <h3 className="font-bold text-lg mb-2">
            {testimonials[currentIndex].title}
          </h3>
          {/* Review */}
          <p className="text-gray-600 mb-4">
            {testimonials[currentIndex].review}
          </p>
          {/* Name */}
          <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
