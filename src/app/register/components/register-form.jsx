"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(form);
  };

  return (
    <div className="flex-none flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-sm    p-6">
        <h2 className="text-4xl mb-1 font-inter font-medium">
          Create an account
        </h2>
        <p className="text-base text-gray-600 mb-5">Enter your details below</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border-b px-4 py-2  text-sm placeholder-gray-400"
          />
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            value={form.email}
            onChange={handleChange}
            className="w-full border-b px-4 py-2  text-sm placeholder-gray-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border-b px-4 py-2  text-sm placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-medium hover:bg-red-700"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full border py-2 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-gray-50"
          >
            <FcGoogle className="text-lg" />
            Sign up with Google
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have account?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
