import BreadCrumb from "@/components/breadcrumb";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 py-10">
      <BreadCrumb
        items={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "404 error",
            url: "/",
          },
        ]}
      />

      <div className=" flex flex-col items-center py-16 gap-8 text-center">
        <h1 className=" font-medium text-6xl sm:text-8xl lg:text-[110px]">
          404 Not Found{" "}
        </h1>
        <p>Your visit page not found.You may go home page</p>
        <Link
          href={"/"}
          className="bg-[#DB4444] text-white w-full  max-w-[254px] border rounded text-center py-2"
        >
          Back to Home page
        </Link>
      </div>
    </div>
  );
}
