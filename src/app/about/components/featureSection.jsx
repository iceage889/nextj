"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Truck, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Free and Fast Delivery",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    title: "24/7 Customer Service",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
  },
];

export default function FeatureCarousel() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-md">
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center border-4 border-gray-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg uppercase">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {feature.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
