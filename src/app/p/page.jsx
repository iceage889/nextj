import BreadCrumb from "@/components/breadcrumb";
import ProductDetail from "./components/productdetails";
import RedMenu from "../../components/redmenu";
import SectionHeaders from "@/components/sectionheaders";
import FlashSale from "../components/flashsale";
import BrowseSale from "../components/browsesale";
import ProductSection from "../components/product";

export default function ProductManageSection() {
  return (
    <div>
      <div>
        <BreadCrumb
          items={[
            {
              title: "Account",
              url: "/",
            },
            {
              title: "Gaming",
              url: "/",
            },
            {
              title: "Havic HV G-92 Gamepad",
              url: "/",
            },
          ]}
        />
        <ProductDetail />
        <ProductSection title={"Related Item"} subtitle={""} />
      </div>
    </div>
  );
}
