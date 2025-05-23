import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";

const categories = [
  { name: "Phones", icon: Smartphone },
  { name: "Computers", icon: Monitor },
  { name: "SmartWatch", icon: Watch },
  { name: "Camera", icon: Camera },
  { name: "HeadPhones", icon: Headphones },
  { name: "Gaming", icon: Gamepad2 },
];
export default function BrowseSale() {
  return (
    <div className="grid pb-10 border-b my-10 ">
      <div className="grid items-center gap-2 p-6 mb-4 md:mb-0">
        <div className="flex gap-4">
          <div className="w-4 h-6 bg-red-500 rounded-sm "></div>
          <p className="text-red-500 font-semibold">Categories</p>
        </div>
        <h2 className="text-3xl md:text-9 font-bold mr-4">
          Browse By Category
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="border rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow"
          >
            <Icon className="w-8 h-8 mb-2 text-black" />
            <p className="text-sm font-medium text-center">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
