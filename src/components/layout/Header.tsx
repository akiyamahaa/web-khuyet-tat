import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_PATH,
  ROOT,
  INTRODUCTION_PATH,
  ENVENT_PATH,
  BLOG_PATH,
  STORE_PATH,
} from "@/routes/constant";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className="flex justify-center h-16">
      <div className="container flex justify-between  items-center">
        <div>
          <img
            src="https://reactjs.org/logo-og.png"
            alt=""
            className="w-12 object-cover"
          />
        </div>
        <ul className="flex gap-4">
          <li className="py-2">
            <Link to={ROOT}>Trang Chủ</Link>
          </li>
          <li className="py-2">
            {" "}
            <Link to={INTRODUCTION_PATH}>Giới thiệu</Link>
          </li>
          <li className="py-2">
            {" "}
            <Link to={ENVENT_PATH}>Sự kiện</Link>
          </li>
          <li className="py-2">
            {" "}
            <Link to={STORE_PATH}>Cửa Hàng</Link>
          </li>
          <li className="py-2">
            {" "}
            <Link to={BLOG_PATH}>Bài viết</Link>
          </li>
          <li className="py-2">
            <Link to={ABOUT_PATH}>Liên hệ</Link>
          </li>
          <li className="py-2 ">
            <CiSearch className="text-[20px]" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
