import React from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/freshcart-logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center gap-5">
            <Link
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}
                width={"120px"}
                className="h-7"
                alt="Flowbite Logo"
              />
            </Link>
            <ul className="flex gap-3">
              <li><Link className="text-slate-600" to="">Home</Link></li>
              <li><Link className="text-slate-600" to="cart">Cart</Link></li>
              <li><Link className="text-slate-600" to="products">Products</Link></li>
              <li><Link className="text-slate-600" to="categories">Categories</Link></li>
              <li><Link className="text-slate-600" to="brands">Brands</Link></li>
            </ul>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-body hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              className="text-sm font-medium text-fg-brand hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
