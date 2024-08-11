import { Product } from "@/constants/product";
import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Link, useLocation } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { formatNumber } from "@/utils/convertPrice";
import { CustomPagination } from "@/common/CustomPagination";

const ProductList = (
  props: React.PropsWithChildren<{ products: Product[] }>
) => {
  const location = useLocation();
  console.log(location);
  const { products } = props;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [data, setData] = useState(products);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    setData(products.slice(start, end));
  }, [page, pageSize]);
  const isLaptop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-8">
        {data &&
          data.map((product) =>
            isLaptop ? (
              <Link
                to={`${location?.pathname}/${product.id}`}
                key={product.id}
                className="md:w-full p-4 bg-secondary-100 rounded-2xl flex flex-col justify-between gap-y-4 cursor-pointer group"
              >
                <div className="w-full h-[200px] md:h-[250px] relative">
                  <div className="h-full w-full overflow-hidden relative rounded-2xl">
                    <img
                      src={product.imgUrl}
                      alt={product.title}
                      className="absolute w-full h-full scale-105 object-cover left-0 top-0 transform transition-transform duration-1000 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-1000"></div>
                    <div className="absolute text-secondary-100 w-full h-0 group-hover:h-full group-hover:bg-opacity-50 group-hover:bottom-0 left-0 bottom-[-15%] transform transition-all duration-1000 p-4 backdrop-filter backdrop-blur-sm">
                      <div className="flex w-full justify-end mb-5">
                        {product.isFavorite ? (
                          <IoHeartOutline className="text-white hover:text-blue-200 text-[1.8rem]" />
                        ) : (
                          <IoHeartSharp className="text-blue-200 text-[1.8rem]" />
                        )}
                      </div>
                      <LinesEllipsis
                        className="text-[14px] font-semibold md:text-[16px] uppercase text-center"
                        text={product.title}
                        maxLine={isLaptop ? "3" : "2"}
                        ellipsis="..."
                        trimRight
                        basedOn="words"
                      />
                      <p className="text-[12px] md:text-[14px] text-center">
                        Giá: {formatNumber(product.price || 0)}đ
                      </p>
                      <p className="text-[12px] hover:underline md:text-[14px] text-center">
                        Nhấn để xem chi tiết
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                to={`${location?.pathname}/${product.id}`}
                key={product.id}
                className="md:w-[251px] p-4 bg-secondary-100 rounded-2xl flex flex-col gap-y-4 cursor-pointer"
              >
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="flex flex-col flex-1 justify-start">
                  <LinesEllipsis
                    className="font-semibold text-[16px] md:text-[18px]"
                    text={product.title}
                    maxLine={isLaptop ? "3" : "2"}
                    ellipsis="..."
                    trimRight
                    basedOn="words"
                  />
                </div>
              </Link>
            )
          )}
      </div>
      <CustomPagination
        className="mt-16 w-full md:w-auto mx-auto  space-x-1"
        count={Math.ceil(products.length / pageSize)}
        variant="outlined"
        onChange={handleChange}
        page={page}
        color="primary"
      />
    </>
  );
};

export default ProductList;
