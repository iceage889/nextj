"use client";

import { Store, DollarSign, ShoppingBag, Wallet } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Store className="w-6 h-6 text-black" />,
      number: "10.5k",
      label: "Sallers active our site",
      highlight: false,
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      number: "33k",
      label: "Mopnthly Produuct Sale",
      highlight: true,
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-black" />,
      number: "45.5k",
      label: "Customer active in our site",
      highlight: false,
    },
    {
      icon: <Wallet className="w-6 h-6 text-black" />,
      number: "25k",
      label: "Anual gross sale in our site",
      highlight: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`rounded-md shadow-sm border p-6 flex flex-col items-center text-center space-y-4 ${
            stat.highlight ? "bg-red-500 text-white border-none" : "bg-white"
          }`}
        >
          <div
            className={`rounded-full w-14 h-14 flex items-center justify-center bg-gray-200 ${
              stat.highlight ? "bg-white" : ""
            }`}
          >
            {stat.icon}
          </div>
          <p className="text-2xl font-bold">{stat.number}</p>
          <p
            className={`text-sm ${
              stat.highlight ? "text-white" : "text-gray-700"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
