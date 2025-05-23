"use client";
import Images from "@/components/images";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: Images.iphone.src,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    cta: "Shop Now",
  },
  {
    image: Images.iphone.src,
    title: "iPhone 15 Series",
    subtitle: "Up to 20% off Voucher",
    cta: "Shop Now",
  },
  {
    image: Images.iphone.src,
    title: "iPhone 16 Series",
    subtitle: "Up to 30% off Voucher",
    cta: "Shop Now",
  },
  // You can add more slides here...
];

export default function PromoCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full sm:w-3/4 relative">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={` top-0 left-0 w-full transition-opacity duration-700 ${
            i === active
              ? "relative opacity-100 z-10"
              : "absolute opacity-0 z-0"
          }`}
        >
          <div className="flex items-center bg-black text-white p-10 rounded-lg min-h-[280px]">
            <div className="flex-1 space-y-4">
              <h3 className="text-sm text-gray-400">{slide.title}</h3>
              <h2 className="text-4xl font-bold">{slide.subtitle}</h2>
              <button className="underline underline-offset-4 text-sm">
                {slide.cta} →
              </button>
            </div>
            <div className="hidden md:block flex-1 text-center">
              <Image
                src={slide.image}
                alt={slide.title}
                width={300}
                height={300}
                className="inline-block"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === active ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
