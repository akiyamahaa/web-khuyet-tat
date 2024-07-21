import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import "./Header.css";
import { CiSearch } from "react-icons/ci";

function Header() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRef = useRef(null);
  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  return (
    <div className="flex justify-center h-16">
      <div className="container flex justify-between  items-center md:px-5">
        <div className="py-2 relative block md:hidden">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            More
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu absolute bg-white shadow-lg mt-2 py-2 w-48">
              <li className={`py-2 ${isActive("/") ? "text-blue-400" : ""}`}>
                <NavLink to="/">Trang Chủ</NavLink>
              </li>
              <li
                className={`py-2 ${
                  isActive("/introduction") ? "text-blue-400" : ""
                }`}
              >
                <NavLink to="/introduction">Giới thiệu</NavLink>
              </li>
              <li
                className={`py-2 ${isActive("/events") ? "text-blue-400" : ""}`}
              >
                <NavLink to="/events">Sự kiện</NavLink>
              </li>
              <li
                className={`py-2 ${
                  isActive("/products") ? "text-blue-400" : ""
                }`}
              >
                <NavLink to="/products">Sản phẩm</NavLink>
              </li>
              <li
                className={`py-2 ${isActive("/blog") ? "text-blue-400" : ""}`}
              >
                <NavLink to="/blog">Bài viết</NavLink>
              </li>
              <li
                className={`py-2 ${isActive("/about") ? "text-blue-400" : ""}`}
              >
                <NavLink to="/about">Liên hệ</NavLink>
              </li>
            </ul>
          )}
        </div>
        <div>
          <img
            src="https://reactjs.org/logo-og.png"
            alt=""
            className="w-12 object-cover"
          />
        </div>
        <nav className="navbar flex max-md:hidden">
          <ul className="gap-4 hidden md:flex">
            <li className={`py-2 ${isActive("/") ? "text-blue-400" : ""}`}>
              <NavLink to="/">Trang Chủ</NavLink>
            </li>
            <li
              className={`py-2 ${
                isActive("/introduction") ? "text-blue-400" : ""
              }`}
            >
              <NavLink to="/introduction">Giới thiệu</NavLink>
            </li>
            <li
              className={`py-2 ${isActive("/events") ? "text-blue-400" : ""}`}
            >
              <NavLink to="/events">Sự kiện</NavLink>
            </li>
            <li
              className={`py-2 ${isActive("/products") ? "text-blue-400" : ""}`}
            >
              <NavLink to="/products">Sản phẩm</NavLink>
            </li>
            <li className={`py-2 ${isActive("/blog") ? "text-blue-400" : ""}`}>
              <NavLink to="/blog">Bài viết</NavLink>
            </li>
            <li className={`py-2 ${isActive("/about") ? "text-blue-400" : ""}`}>
              <NavLink to="/about">Liên hệ</NavLink>
            </li>
            <li className="py-2 ">
              <CiSearch className="text-[20px]" />
            </li>
          </ul>
        </nav>
        <div className="py-2 block md:hidden">
          <CiSearch className="text-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default Header;
