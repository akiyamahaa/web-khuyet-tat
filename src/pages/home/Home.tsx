import React from "react";
import {
  IQueryOptions,
  queryDocuments,
} from "@/config/firebase/api";
import { EQueryOperator } from "@/config/firebase/type";
type Props = {};

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
      <h1>This is Home Page</h1>
      <button onClick={getList}>test firebase create</button>
    </div>
  );
};

export default Home;
