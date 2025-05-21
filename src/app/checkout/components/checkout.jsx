"use client";
import Images from "@/components/images";
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [coupon, setCoupon] = useState("");

  return (
    <main className="min-h-screen bg-white p-6 md:p-12">
      <h1 className="text-2xl font-semibold mb-8">Billing Details</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Billing Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium">
              First Name<span className="text-red-500">*</span>
            </label>
            <input className="w-full border px-4 py-2 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium">Company Name</label>
            <input className="w-full border px-4 py-2 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Street Address<span className="text-red-500">*</span>
            </label>
            <input className="w-full border px-4 py-2 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Apartment, floor, etc. (optional)
            </label>
            <input className="w-full border px-4 py-2 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Town/City<span className="text-red-500">*</span>
            </label>
            <input className="w-full border px-4 py-2 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input className="w-full border px-4 py-2 rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-md bg-gray-100"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="accent-red-500 mr-2" />
            <label className="text-sm">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Items */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={Images.Gamepad.src}
                  className="w-12 h-12"
                  alt="LCD Monitor"
                />
                <span>LCD Monitor</span>
              </div>
              <span>$650</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={Images.desk.src}
                  className="w-12 h-12"
                  alt="Gamepad"
                />
                <span>H1 Gamepad</span>
              </div>
              <span>$1100</span>
            </div>

            {/* Summary */}
            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-base">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="flex justify-between">
            <div className="space-y-2">
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />
                  Bank
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                  />
                  Cash on delivery
                </label>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex gap-3">
              <img src={Images.Bkash.src} className="h-5" alt="bKash" />
              <img src={Images.Visa.src} className="h-5" alt="Visa" />
              <img
                src={Images.Mastercard.src}
                className="h-5"
                alt="Mastercard"
              />
              <img src={Images.image.src} className="h-5" alt="Nagad" />
            </div>
          </div>

          {/* Coupon */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 border px-4 py-2 rounded-md"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Apply Coupon
            </button>
          </div>

          {/* Place Order */}
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 w-full">
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
}
