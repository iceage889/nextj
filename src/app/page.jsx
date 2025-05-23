import Images from "@/components/images";
import CategorySidebar from "./components/CategorySidebar";
import ProductCard from "./components/ProductCard";
import PromoCarousel from "./components/PromoCarousel";
import FlashSale from "./components/flashsale";
import BrowseSale from "./components/browsesale";
import CategoryIcons from "./components/CategoryIcons";
import ProductSection from "./components/product";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row p-4 gap-4">
        <CategorySidebar />
        <PromoCarousel />
      </div>
      <div>
        <FlashSale />
        <BrowseSale />
        <ProductSection />
      </div>
    </div>
  );
}
