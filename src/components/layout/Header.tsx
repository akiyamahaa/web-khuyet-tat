import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_PATH, ROOT } from "@/routes/constant";

function Header() {
  return (
    <div className="App">
      <ul className="flex gap-4">
        <li>
          <Link to={ROOT}>HOME</Link>
        </li>
        <li>
          <Link to={ABOUT_PATH}>ABOUT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
