import React from "react";
import { useEffect, useState } from "react";

import { PlusCircleIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";

const ItemPage = () => {
  const [category, setCategory] = useState();

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://idbdev.com/motion2/public/api/product-is-here-caught-me",
  //     responseType: "steam",
  //   }).then((response) => {
  //     setProducts(response.data);
  //   });
  // },[]);

  return (
    <div className=" text-gray-700 pt-20 mx-20 ">
      <div className="flex gap-6  min-w-[70rem] max-w-[80rem] items-center justify-center ">
        <div className="">
          <select
            name="itemType"
            id="type"
            className="bg-gray-100 p-1 rounded font-medium outline-none cursor-pointer"
          >
            <option value="">Item Type</option>
            <option value="cottom">Cotton</option>
            <option value="nylon">Nylon</option>
            <option value="linen">Linen</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Item Name"
            className="outline-none border rounded-sm p-1 text-center"
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="px-1">
            <select
              name="sub-category"
              id="sub-category"
              className="bg-gray-100 p-1 rounded font-medium outline-none cursor-pointer"
            >
              <option value="">Sub-Category Name</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="shirt">Shirt</option>
              <option value="hoodie">Hoodie</option>
              <option value="pant">Pant</option>
            </select>
          </div>
          <div className="flex w-8 ">
            <PlusCircleIcon className="text-fuchsia-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="">
            <select
              name="unit"
              id="unit"
              className="bg-gray-100 p-1 rounded font-medium outline-none cursor-pointer items-center"
            >
              <option value="volvo">Unit Name</option>
              <option value="saab">KG</option>
              <option value="mercedes">Gram</option>
              <option value="audi">Pound</option>
            </select>
          </div>
          <div className="flex w-8">
            <PlusCircleIcon className="text-fuchsia-500 cursor-pointer" />
          </div>
        </div>
        <div>
          <input
            placeholder="Stock Limit"
            className="outline-none border rounded-sm p-1 text-center"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-8">
            <PlusCircleIcon className="text-fuchsia-500 cursor-pointer" />
          </div>
          <div className="w-8">
            <XCircleIcon className="text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
