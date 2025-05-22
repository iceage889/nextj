"use client";

import Images from "@/components/images";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: Images.desk.src,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: Images.Gamepad.src,
    },
  ]);

  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(value) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-white p-6 md:p-12">
      <div className="overflow-x-auto mb-8">
        <table className="w-full table-auto text-left border-separate border-spacing-y-4">
          <thead className="text-sm text-gray-500">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="bg-white shadow rounded-md">
                <td className="flex items-center gap-4 p-4">
                  <button
                    className="text-red-500 text-lg font-bold"
                    onClick={() => handleRemove(item.id)}
                  >
                    ✖
                  </button>
                  <img src={item.image} className="w-14 h-14" />
                  {item.name}
                </td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="border rounded-md px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty.toString().padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <button className="border border-black px-6 py-2 rounded-md">
          Return To Shop
        </button>
        <button className="border border-black px-6 py-2 rounded-md">
          Update Cart
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Coupon */}
        <div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border px-4 py-2 rounded-md flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="border p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
          <div className="text-sm space-y-2 mb-4">
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-base">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>
          <button className="bg-red-500 text-white w-full py-3 rounded-md hover:bg-red-600">
            Proceed to checkout
          </button>
        </div>
      </div>
    </main>
  );
}
