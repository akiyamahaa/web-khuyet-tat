import { StyleDivider } from "@/common/StyleDivider";
import { Product, products } from "@/constants/product";
import { formatNumber } from "@/utils/convertPrice";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id, product } = useParams();
  const [productDetail, setProductDetail] = useState<Product>();
  useEffect(() => {
    const productData = products.find(
      (item) => item.id === Number(product) && item.storeId === Number(id)
    );
    setProductDetail(productData);
  }, []);
  return productDetail ? (
    <div className="bg-secondary-200 w-full m-auto">
      <div className="w-[75%] m-auto ">
        <div className="pt-[4rem] pb-[4rem] flex flex-col md:flex-row justify-center">
          <div className="flex flex-col items-center w-100% md:flex-row md:gap-x-8">
            <div className="flex flex-col items-center w-100% overflow-hidden md:w-2/5 md:flex-row mt-[1rem] rounded-xl">
              <img
                src={productDetail?.imgUrl}
                alt=""
                className="object-cover h-full"
              />
            </div>
            <div className="space-y-8 md:w-3/5 gap-y-2 flex flex-col">
              <p className="text-[28px] text-tile font-bold">
                {productDetail?.title}
              </p>
              <p className="text-[18px] text-subtitle font-normal">
                Giá khoảng:{" "}
                <b className="text-[#F23030] text-[24px] font-bold">
                  {formatNumber(productDetail?.price || 0)}đ
                </b>
              </p>
              <Link
                to={productDetail?.link || "/"}
                target="_blank"
                className="px-[28px] py-[13px] hover:opacity-95 bg-primary rounded-xl w-fit text-white"
              >
                Đến nơi bán
              </Link>
              {/* <p className="text-2xl text-tile font-bold">{store?.company}</p>
              <div>{store?.introduce}</div>
              <div>
                <div>Địa chỉ: {store?.address}</div>
                <div>Hotline: {store?.phone}</div>
                <div>
                  Website:{" "}
                  <u className="text-link cursor-pointer">{store?.website}</u>
                </div>
                <div>
                  Email:{" "}
                  <u className="text-link cursor-pointer">{store?.email}</u>
                </div>
                <div>
                  Giờ mở cửa:{" "}
                  {store?.openHours &&
                    store?.openHours[0]?.startTime &&
                    `${store.openHours[0]?.startTime} - ${store.openHours[0]?.endTime}`}
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <StyleDivider />
        {/* <div className="py-8 text-[32px] flex flex-col justify-center items-center">
          <div className="text-normal text-center uppercase">Mô tả</div>
          <div className="w-16 h-1 bg-primary mt-2 mb-8"></div>
          <ProductList products={productInStore} /> 
        </div> */}
      </div>
    </div>
  ) : (
    <div className="bg-secondary-200 w-full m-auto">
      <div className="w-[75%] m-auto ">
        <div className="pt-[4rem] pb-[4rem] flex flex-col md:flex-row justify-center">
          <div className="flex flex-col items-center w-100% md:flex-row md:gap-x-8">
            <CircularProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
