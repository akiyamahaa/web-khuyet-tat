import React from "react";
import { useLocation, Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
interface BreadCrumbProps {
  customPaths?: { [key: string]: string };
  customTitles?: { [key: string]: string };
  className?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  customPaths,
  customTitles,
  className,
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const resolvePathname = (pathname: string, index: number) => {
    const fullPath = `/${pathnames.slice(0, index + 1).join("/")}`;
    if (customTitles && customTitles[fullPath]) {
      return customTitles[fullPath];
    }
    if (customPaths && customPaths[pathname]) {
      return customPaths[pathname];
    }
    return pathname;
  };

  return (
    <div className={`flex items-center text-sm py-[1rem] ${className}`}>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast && pathnames.length !== 1 ? (
          <span key={to} className="flex flex-row items-center justify-center">
            <MdKeyboardArrowRight /> {resolvePathname(value, index)}
          </span>
        ) : (
          <Link key={to} to={to} className="text-blue-500 hover:underline mr-1">
            {resolvePathname(value, index)}
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
