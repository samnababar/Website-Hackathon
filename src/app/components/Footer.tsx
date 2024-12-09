// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="text-gray-600">
            <p className="text-sm">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold text-gray-900">Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="font-semibold text-gray-900">Help</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold text-gray-900">Newsletter</h4>
            <form className="mt-4 flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition text-sm"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          <p>2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
