import BreadCrumb from "@/components/breadcrumb";
import CartPage from "./components/cartPage";

export default function cart() {
  return (
    <div>
      <div>
        <BreadCrumb
          items={[
            {
              title: "Home",
              url: "/",
            },
            {
              title: "Cart",
              url: "Cart",
            },
          ]}
        />
      </div>
      <div>
        <CartPage />
      </div>
    </div>
  );
}
