import BreadCrumb from "@/common/BreadCrumb";
import { Blog, dataBlogs } from "@/constants/blog";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const contentStyle = {
  whiteSpace: "pre-line",
};
const BlogDetail = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<Blog>();
  useEffect(() => {
    const blogData = dataBlogs.find((item) => item.id === Number(id));
    console.log("result", blogData);
    setData(blogData);
  }, [id]);
  return (
    <div className="bg-secondary-200 w-full m-auto">
      <div className="w-[75%] m-auto ">
        <BreadCrumb
          className="pt-[6rem] pl-3"
          customPaths={{ blog: "Bài viết" }}
          customTitles={{
            [`/blog/${data?.id}`]: data?.title || "Chi tiết bài viết",
          }}
        />
        <div className="pb-[4rem] flex flex-col md:flex-row justify-center">
          <div className="flex flex-col gap-y-4 items-center w-100% md:gap-x-8 pt-[4rem]">
            <p className="text-normal text-[30px] font-bold text-center">
              {data?.title}
            </p>
            <p className=" text-[18px] text-center">{data?.description}</p>
            <p className="text-subtitle text-[14px]">
              Thực hiện:{" "}
              <span className="text-[#000000] font-semibold">
                {data?.author}
              </span>{" "}
              <span className="bg-[#6B7280] w-2 h-2 rounded-full inline-block"></span>{" "}
              {data?.day}
            </p>
            <img src="" alt="" className="w-full" />
            {data?.subContent &&
              data.subContent.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-4 items-center w-100%"
                >
                  <div className="text-center">
                    <img src={item?.imageUrl} alt="" className="w-full" />
                    <span className=" text-subtitle  text-[14px]">
                      {item?.descImage}
                    </span>
                  </div>
                  <p style={contentStyle}>{item?.content}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
