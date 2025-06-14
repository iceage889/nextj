// components/ProductDetail.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Images from "@/components/images";

const images = [Images.mainpad.src, Images.pad1.src, Images.pad2.src];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="flex flex-col   md:flex-row gap-10 p-6 max-w-7xl mx-auto">
      {/* Left - Images */}
      <div className="flex flex-1 flex-col-reverse lg:flex-row gap-4">
        <div className="flex flex-none lg:flex-col gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`cursor-pointer h-20 w-20 border rounded-md p-1 lg:w-[170px] lg:h-[138px] relative ${
                selectedImage === img ? "border-red-500" : "border-gray-200"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                className="object-cover"
                src={img}
                alt="thumb"
                fill
                sizes="170px"
              />
            </div>
          ))}
        </div>

        <div className="w-full  relative h-[400px] lg:h-auto">
          <Image
            src={selectedImage}
            alt="product"
            fill
            sizes="500px"
            className="object-cover "
          />
        </div>
      </div>

      {/* Right - Info */}
      <div className="flex-1 md:max-w-[400px] md:w-full md:flex-none space-y-4">
        <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-yellow-500">★★★★★</span>
          <span>(150 Reviews)</span>
          <span className="text-green-600 ml-2">| In Stock</span>
        </div>

        <p className="text-2xl font-bold">$192.00</p>

        <p className="text-gray-600">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>

        <hr />

        {/* Colours */}
        <div>
          <p className="font-semibold mb-1">Colours:</p>
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-300 border-2 border-black"></div>
            <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-black"></div>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p className="font-semibold mb-1">Size:</p>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded ${
                  size === "M"
                    ? "bg-red-500 text-white border-red-500"
                    : "border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity + Cart */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex border border-gray-300 rounded">
            <button
              className="px-3 text-xl"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              className="px-3 text-xl"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>

          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            Buy Now
          </button>

          <button className="border p-2 rounded hover:bg-gray-100">❤️</button>
        </div>

        {/* Delivery Info */}
        <div className="border p-4 rounded space-y-2 mt-4 text-sm">
          <p className="font-semibold">🚚 Free Delivery</p>
          <p className="text-gray-600">
            Enter your postal code for Delivery Availability
          </p>
          <hr />
          <p className="font-semibold">↩️ Return Delivery</p>
          <p className="text-gray-600">Free 30 Days Delivery Returns.</p>
        </div>
      </div>
    </div>
  );
}
