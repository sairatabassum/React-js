import React, { useState } from "react";
import Link from "../Link/Link";
import { MinusIcon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Coupons", link: "/coupons" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-indigo-200">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? (
          <XMarkIcon></XMarkIcon>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        {/* <MinusIcon></MinusIcon> */}
      </div>
      <ul
        className={`md:flex justify-center absolute md:static duration-500 ease in bg-indigo-200 w-full ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} routes={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
