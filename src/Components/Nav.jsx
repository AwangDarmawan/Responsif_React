import React, { useState } from 'react';
import Frame from "../Assets/img/svg/Frame 2.svg";
import keranjang from "../Assets/img/svg/keranjnag.svg";
import arrow from "../Assets/img/svg/arrow-down.svg";
const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="py-7 px-16 bg-putih fixed top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex items-center justify-between mx-auto">
          <img src={Frame} alt="" />
          <div>
            <ul className="hidden lg:flex justify-center gap-5">
              <li>
                <a href="" className="font-poppins text-ungu font-medium">Products</a>
              </li>
              <li className="relative group">
                <a
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="font-poppins text-ungu font-medium cursor-pointer flex"
                >
                  Services
                  <img src={arrow} alt="" />
                </a>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <ul className="absolute bg-white shadow-lg mt-2 py-2 w-48">
                    <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Service 1</a></li>
                    <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Service 2</a></li>
                    <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Service 3</a></li>
                  </ul>
                )}
              </li>
              <li><a href="" className="font-poppins text-ungu font-medium">Pricing</a></li>
              <li><a href="" className="font-poppins text-ungu font-medium">Testimonial</a></li>
              <li><a href="" className="font-poppins text-ungu font-medium">Blog</a></li>
            </ul>
          </div>
          <div className="flex gap-3">
            <button>
              <img src={keranjang} alt="" />
            </button>
            <button className="bg-ungu font-semibold text-white rounded-full py-2 px-7 font-poppins">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

