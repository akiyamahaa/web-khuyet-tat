import React from "react";
import { IQueryOptions, queryDocuments } from "@/config/firebase/api";
import { EQueryOperator } from "@/config/firebase/type";
import "./Home.css";

type Props = {};

const imgUrl = "/assets/banner.png";

const Home = (props: Props) => {
  const getList = async () => {
    const options: IQueryOptions = {
      property: "regions",
      queryOperator: EQueryOperator.ARRAY_CONTAIN,
      value: "east_coast",
    };
    const list = await queryDocuments("cities", options);
    console.log("list", list);
  };
  return (
    <div>
      <div>
        <div className="banner">
          <div className=" flex flex-col justify-center items-center pt-20">
            <div className="text-3xl font-bold ">
              Câu lạc bộ người khuyết tật
            </div>
            <div className="text-2xl py-2">
              Tạo ra sự nhận thức và hỗ trợ cho cộng đồng người khuyết tật
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <img src={imgUrl} alt="" className="object-cover w-7/12 h-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
