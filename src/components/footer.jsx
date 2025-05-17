import Images from "@/components/images";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex border border-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white px-3 py-2 text-sm w-full outline-none"
            />
            <button className="bg-white text-black px-3 py-2 text-sm">➤</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm mb-1">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm mb-1">DH 1515, Bangladesh.</p>
          <p className="text-sm mb-1 mt-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="text-sm space-y-1">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="text-sm space-y-1">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-4">
            <img src={Images.frame.src} alt="" className="h-8 object-contain" />
          </div>
          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
