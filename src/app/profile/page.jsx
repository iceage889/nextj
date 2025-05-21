import BreadCrumb from "@/components/breadcrumb";
import AccountPage from "./components/account";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <>
      <div>
        <div className=" flex justify-between">
          <BreadCrumb
            items={[
              {
                title: "Home",
                url: "/",
              },
              {
                title: "My Account",
                url: "/profile",
              },
            ]}
          />
          <div>
            <p>Welcome! Md Rimel</p>
          </div>
        </div>
        <div className="py-6">
          <AccountPage />
        </div>
      </div>
    </>
  );
}
