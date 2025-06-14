import Link from "next/link";

export default function RedMenu() {
  return (
    <div>
      <Link
        href={"/"}
        className="border-[#DB4444] flex items-center justify-center h-[58px] w-[234px] bg-[#DB4444] text-white text-center m-auto mb-6 "
      >
        View All Products
      </Link>
    </div>
  );
}
