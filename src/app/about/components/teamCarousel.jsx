"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Images from "@/components/images";
import Image from "next/image";

export default function TeamCarousel() {
  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: Images.tom.src,
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: Images.emma.src,
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: Images.will.src,
    },
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: Images.tom.src,
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: Images.emma.src,
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: Images.will.src,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 pb-10 flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-52 h-64 object-cover mb-4 rounded shadow"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <div className="flex gap-4 mt-4 text-gray-600">
                <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
