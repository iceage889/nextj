"use client";
import Images from "@/components/images";
import { useState, useEffect } from "react";

export default function ProductPromo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBuyNow = () => {
    // Add logic to handle "Buy Now" action (e.g., redirect to purchase page)
    console.log("Buy Now clicked");
  };

  return (
    <div className=" p-8 flex items-center justify-center">
      <div className="relative w-full max-w-7xl bg-black text-white p-6  shadow-lg flex flex-col md:flex-row items-center">
        {/* Categories Label */}
        <div className="absolute top-4 left-4 text-green-400 text-sm">
          Categories
        </div>

        {/* Text and Timer */}
        <div className="w-full md:w-1/2 text-center md:text-left p-6">
          <h1 className="text-4xl font-bold mb-4">
            Enhance Your Music Experience
          </h1>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
              {timeLeft.days}
            </div>
            <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
              {timeLeft.hours}
            </div>
            <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
              {timeLeft.minutes}
            </div>
            <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center">
              {timeLeft.seconds}
            </div>
          </div>
          <button
            onClick={handleBuyNow}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Buy Now!
          </button>
        </div>

        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Images.speakerboom.src}
            alt="JBL Speaker"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
