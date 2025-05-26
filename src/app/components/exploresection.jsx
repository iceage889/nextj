import Images from "@/components/images";
import SectionHeaders from "@/components/sectionheaders";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Explore() {
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
    <div>
      <div>
        <SectionHeaders
          title={"Our Products"}
          subtitle={"Explore Our Products"}
        />
      </div>
      <div className=" bg-white p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} product={product} isWishlist={true} />
        ))}

        {sampleProducts.map((product, index) => (
          <ProductCard key={index} product={product} isWishlist={true} />
        ))}
      </div>
      <Link
        href={"/"}
        className="border-[#DB4444] flex items-center justify-center h-[58px] w-[234px] bg-[#DB4444] text-white text-center m-auto mb-6 "
      >
        View All Products
      </Link>
    </div>
  );
}
