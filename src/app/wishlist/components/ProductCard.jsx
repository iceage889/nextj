import { Heart, Eye, Delete, Trash, Trash2 } from "lucide-react";
import Image from "next/image";

const ProductCard = ({ product, isWishlist }) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className=" group bg-white transition relative max-w-xs h-fit">
      {/* Discount Badge */}
      <span className="absolute z-10 top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
        -{discount}%
      </span>

      {/* Icons */}
      <div className="absolute top-2 right-2 space-y-2 z-10 flex flex-col lg:group-hover:opacity-100 transition">
        {isWishlist === true ? (
          <button className="bg-white rounded-full p-1 shadow hover:scale-105">
            <Trash2 className="w-5 h-5 text-gray-600" />
          </button>
        ) : (
          <>
            <button className="bg-white rounded-full p-1 shadow hover:scale-105">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="bg-white rounded-full p-1 hover:scale-105">
              <Eye className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}
      </div>

      {/* Product Image */}
      <div className="bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center relative">
        <Image
          src={product.image}
          alt={product.name}
          width={270}
          height={250}
          className="object-contain group-hover:scale-110 transition group-active:scale-110"
        />
        {/* Add to Cart Button */}
        <div className="absolute lg:hidden lg:group-hover:block lg:group-active:block w-full bottom-0 left-0">
          <button className="bg-black text-white w-full py-2 rounded-md hover:bg-gray-900">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <div className="flex items-center gap-2 text-red-500 mt-1">
          <span className="text-base font-semibold">${product.price}</span>
          <span className="line-through text-gray-400">
            ${product.originalPrice}
          </span>
        </div>

        {/* Ratings */}
        <div className="flex items-center text-sm mt-1">
          <div className="text-yellow-400">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </div>
          <span className="text-gray-500 ml-2">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
