
import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Pills = () => {

    const categories = [
        "Finance",
        "Cryptocurrency",
        "Agency",
        "Health",
        "Education",
        "Lifestyle",
        "E-Commerce",
        "Design",
        "Talent-Outsourcing",
        "Food & Drinks",
        "Marketing",
        "Security",
        "Fashion",
        "Technology",
        "Travel",
        "Real Estate",
        "Automotive",
        "Entertainment",
        "Sports",
        "Environment",
        "Legal",
        "Human Resources",
        "Arts & Culture",
        "Gaming",
        "Wellness",
        "Non-Profit",
        "Publishing",
        "Music",
        "Parenting",
        "Science",
        "Retail",
        "Consulting",
        "Media",
        "Construction",
        "Engineering",
        "Manufacturing",
        "Hospitality",
        "Telecommunications",
        "Pharmaceuticals"
      ];
    
  return (
    <div className="App">
    <Swiper

      spaceBetween={10}
      slidesPerView={10}
      centeredSlides={false}
      grabCursor={true}
      loop={false}
    >
      {categories.map((pill, index) => (
        <SwiperSlide key={index} className="pill">
          {pill}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default Pills