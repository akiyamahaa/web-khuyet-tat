import React, { useEffect, useState } from "react";
import CardBlog from "./CardBlog";
import { dataBlogs } from "@/constants/blog";
import { CustomPagination } from "@/common/CustomPagination";

const ListBlog = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [data, setData] = useState(dataBlogs);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    setData(dataBlogs.slice(start, end));
  }, [page, pageSize]);
  return (
    <div className="w-[75%] m-auto pt-[6rem] pb-[8rem] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data && data.map((blog) => <CardBlog key={blog.id} blog={blog} />)}
      </div>
      <CustomPagination
        className="mt-16 w-full md:w-auto mx-auto  space-x-1"
        count={Math.ceil(dataBlogs.length / pageSize)}
        variant="outlined"
        onChange={handleChange}
        page={page}
        color="primary"
      />
    </div>
  );
};

export default ListBlog;
