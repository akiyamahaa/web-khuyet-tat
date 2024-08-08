import BreadCrumb from "@/common/BreadCrumb";
import Banner from "@/components/Banner/Banner";
import ListBlog from "@/components/Blog/ListBlog";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-secondary-200 w-full">
      <Banner
        name="Bài viết"
        imgUrl="https://s3-alpha-sig.figma.com/img/2940/34d5/93dfc9e9932f7b307c312ae53b470ebe?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WZT4t2qX~Ff7eJQa23RdGXn34KlhPV8GbiQ8Yv~b-1YGyRywdHuM1lx9We4jyQJmEs1qrWZWFOTGkfG3DDP5Z1Iq6~2lYwmsxiqvq4NX2yIssPZpkDp7M7ZJIy7~CjFSR9UtNZSNO5Ks3YK8at6i2ICpvdIIvtvUZnNnhqlagUgeor9br7jhhak8r5gEaQBWGDUSL5ATdgjTsvW8UkWXljnNBum8I3TxuSlnfXUPUgM4n6iFgwOgZFhg1WmDwm~9YkpTFTltJD41U9YYM5z7i5atQ5uKUIa9IdEQ2-0HzlVUaY5FL~jHEXaq2QMJVSWrSxShpexp375iJCACEVj0Jg__"
      />
      <ListBlog />
    </div>
  );
};

export default Blog;
