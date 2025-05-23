const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function CategorySidebar() {
  return (
    <div className=" hidden lg:block  w-full sm:w-1/4 p-4 bg-white border-r text-sm font-medium ">
      <ul className="space-y-3">
        {categories.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-red-500 cursor-pointer flex justify-between"
          >
            {item}
            {item.includes("Fashion") && <span>›</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
