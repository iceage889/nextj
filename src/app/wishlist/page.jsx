import BreadCrumb from "@/components/breadcrumb";
import ProductCard from "../components/ProductCard";
import Images from "@/components/images";
import Link from "next/link";

export default function WishList() {
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
        <div className="flex justify-between mt-20 px-6">
          <h1>Wishlist(4)</h1>
          <Link
            href={"/"}
            className="border flex items-center justify-center w-[223px] h-[56px] text-center  "
          >
            Move All TO Bag
          </Link>
        </div>

        <div>
          <div className=" bg-white p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {sampleProducts.map((product, index) => (
              <ProductCard key={index} product={product} isWishlist={true} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-20 px-6">
          <h1>Just For You</h1>
          <Link
            href={"/"}
            className="border flex items-center justify-center w-[223px] h-[56px] text-center  "
          >
            See All
          </Link>
        </div>

        <div>
          <div className=" bg-white p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {sampleProducts.map((product, index) => (
              <ProductCard key={index} product={product} isWishlist={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
