"use client"; // if using Next.js App Router

import Images from "@/components/images";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownTo = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownTo - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const sampleProducts = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: Images.cartbag.src,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: Images.speaker.src,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: Images.cartpad.src,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: Images.cloth.src,
    },

    // {
    //   name: "AK-900 Wired Keyboard",
    //   price: 960,
    //   originalPrice: 1160,
    //   rating: 4,
    //   reviews: 75,
    //   image: "/images/keyboard.jpg",
    // },
  ];

  return (
    <div className=" grid pb-10 border-b my-10 ">
      <div className="p-6 flex flex-col md:flex-row items-center justify-between bg-white rounded-lg">
        <div className="grid items-center gap-2 mb-4 md:mb-0">
          <div className="flex gap-4">
            <div className="w-4 h-6 bg-red-500 rounded-sm "></div>
            <p className="text-red-500 font-semibold">Today's</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mr-4">Flash Sales</h2>
        </div>

        <div className="flex items-center space-x-4">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-extrabold">
                {String(Object.values(timeLeft)[idx]).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-white p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} product={product} isWishlist={true} />
        ))}
      </div>
      <Link
        href={"/"}
        className="border-[#DB4444] flex items-center justify-center h-[58px] w-[234px] bg-[#DB4444] text-white text-center m-auto "
      >
        View All Products
      </Link>
    </div>
  );
}
