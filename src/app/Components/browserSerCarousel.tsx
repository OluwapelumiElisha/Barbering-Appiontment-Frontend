"use client";

import Carousel from "@/components/ui/carousel";
import Adult from '../../../public/Adult Hair.jpeg'
import BeardTrim from '../../../public/Beard Trim.avif'
import Scalp from '../../../public/premium_photo-1706800175636-c3efbcf75c68.avif'
import Kids from '../../../public/kids.avif'
import Neck from '../../../public/Neck Shave.jpeg'
import Beard from '../../../public/Beard Grooming.jpeg'

export function CarouselDemo() {
  const slideData = [
    {
      title: "Adult Haircut",
      button: "BOOK AN APPIONMENT",
      src: Adult,
      description: 'Professional haircut designed for adults, featuring precise trimming, shaping, and styling to achieve a clean, polished, and confidence-boosting appearance tailored to you.',
      price: 540
    },
    {
      title: "Beard Trim",
      button: "BOOK AN APPIONMENT",
      src: BeardTrim,
      description: 'Neatly trims and shapes your beard to maintain a well-groomed look, removing stray hairs and ensuring clean, defined edges for confidence.',
      price: 540
    },
    {
      title: "Scalp Moisturizing",
      button: "BOOK AN APPIONMENT",
      src: Scalp,
      description: 'Hydrating scalp treatment nourishes, refreshes, and soothes dry skin, promoting healthier hair growth while leaving your scalp feeling soft and rejuvenated.',
      price: 540

    },
    {
      title: "Kids Haircut",
      button: "BOOK AN APPIONMENT",
      description: 'Fun, friendly haircut designed for kids, combining precision and comfort to create stylish, age-appropriate looks that keep children happy and confident.',
      src: Kids,
      price: 540
    },
    {
        title: "Neck Shave",
        button: "BOOK AN APPIONMENT",
        description: 'Smooth, close neck shave removes unwanted hair, enhancing cleanliness and style. Includes precise edging for a sharp, professional, polished appearance.',
        src: Neck,
        price: 540
      },
      {
        title: "Beard Grooming",
        button: "BOOK AN APPIONMENT",
        description: 'Comprehensive beard care includes trimming, shaping, and conditioning for a neat, stylish look while promoting softness and healthy beard maintenance.',
        src: Beard,
        price: 540
      },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
