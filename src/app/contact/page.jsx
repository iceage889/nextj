"use client";

import BreadCrumb from "@/components/breadcrumb";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <BreadCrumb
        items={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Contact",
            url: "/contact",
          },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          {/* Call To Us */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
              <p className="text-sm text-gray-600 mt-1">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm mt-2">Phone: +8801611112222</p>
            </div>
          </div>
          <hr />
          {/* Write To Us */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Write To US</h3>
              <p className="text-sm text-gray-600 mt-1">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm mt-2">Emails: customer@exclusive.com</p>
              <p className="text-sm">support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow rounded-lg p-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-gray-100 p-3 rounded text-sm w-full outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="bg-gray-100 p-3 rounded text-sm w-full outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="bg-gray-100 p-3 rounded text-sm w-full outline-none"
              required
            />
          </div>
          <textarea
            rows={6}
            placeholder="Your Message"
            className="bg-gray-100 p-3 rounded text-sm w-full outline-none"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
