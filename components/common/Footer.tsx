import { Star } from "lucide-react";
import React from "react";

type Props = {
    smoothScroll: (targetId: string) => void;
};

const Footer = ({smoothScroll}: Props) => {

  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Little Stars Daycare</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Where every child shines bright! Creating nurturing environments
              for growth, learning, and endless possibilities.
            </p>
            <div className="text-sm text-gray-400">
              Licensed by the State Department of Children Services
              <br />
              Accredited by the National Association for the Education of Young
              Children
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => smoothScroll("about")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => smoothScroll("programs")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Programs
              </button>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Admissions
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Calendar
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Rainbow Street</p>
              <p>Sunshine City, SC 12345</p>
              <p>(555) 123-KIDS</p>
              <p>hello@littlestarsdaycare.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Little Stars Daycare. All rights reserved. Made
            with ❤️ for families.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
