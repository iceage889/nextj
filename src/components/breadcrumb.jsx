import Link from "next/link";

export default function BreadCrumb({ items }) {
  return (
    <div className="mb-6 text-sm text-gray-500">
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className={
            items.length - 1 !== i ? "text-gray-500" : "text-black font-medium"
          }
        >
          {" "}
          {item.title} {items.length - 1 !== i && "/"}
        </Link>
      ))}
      {/* <span className="font-medium text-black">Contact</span> */}
    </div>
  );
}
