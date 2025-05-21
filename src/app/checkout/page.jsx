import BreadCrumb from "@/components/breadcrumb";
import Billing from "./components/checkout";

export default function CheckOutPage() {
  return (
    <>
      <div>
        <div>
          <BreadCrumb
            items={[
              {
                title: "Home",
                url: "/",
              },
              {
                title: "My Account",
                url: "My",
              },
              {
                title: "Product",
                url: "",
              },
              {
                title: "View Cart",
                url: "",
              },
              {
                title: "CheckOut",
                url: "",
              },
            ]}
          />
        </div>
        <div>
          <Billing />
        </div>
      </div>
    </>
  );
}
