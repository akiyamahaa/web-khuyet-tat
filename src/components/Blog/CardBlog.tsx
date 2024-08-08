import { Blog } from "@/constants/blog";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
type BlogProps = {
  blog: Blog;
};
const CardBlog = ({ blog }: BlogProps) => {
  return (
    <Link
      to={`${blog.id}`}
      className="h-[401px] p-2 bg-secondary-100 rounded-2xl flex flex-col"
    >
      <img
        src={blog.thumnail}
        alt={blog.title}
        className="w-full bg-center h-[200px] object-cover position rounded-2xl"
      />
      <div className="flex flex-col flex-1 space-y-2 justify-evenly">
        <LinesEllipsis
          className="font-semibold text-lg"
          text={blog.title}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
        <LinesEllipsis
          className="font-normal text-subtitle text-base"
          text={blog.description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
        <div className="flex flex-row items-center justify-start space-x-2">
          <img src="./assets/clock.svg" alt={blog.title} className="w-4 h-4" />
          <span className="mr-1 text-subtitle">{blog.dateTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
