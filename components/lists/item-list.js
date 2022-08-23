import axios from "axios";
import React, { useEffect, useState } from "react";

import { baseUrl } from "../../lib/api";

const ItemInfoList = () => {
  const [data, setData] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(`${baseUrl}`);
      setData(res.data);
    };
    fetchItems();
  }, []);

  console.log(data.items);

  return (
    <div className=" text-gray-700 pt-20 px-20 p-1 text-center font-medium text-xl cursor-default w-screen h-screen bg-gray-100 flex flex-col items-center">
      <div className="flex gap-20 py-2 min-w-[70rem] max-w-[80rem] items-center justify-center bg-white m-1 rounded-md">
        <div className="p-2 text-center w-40 capitalize ">Type</div>
        <div className="p-2 text-center w-40 capitalize ">Name</div>
        <div className="p-2 text-center w-60 capitalize ">Sub Category</div>
        <div className="p-2 text-center w-40 capitalize ">Unit</div>
        <div className="p-2 text-center w-40 capitalize ">Stock</div>
      </div>
      <div>
        {data.items?.map((item) => {
          return (
            <div
              key={item._id}
              className="flex gap-20 py-2 min-w-[70rem] max-w-[80rem] items-center justify-center bg-white m-1 rounded-md "
            >
              <div className="">
                <div className=" p-2 rounded w-40 capitalize ">
                  {`${item.type ? item.type : "Null"}`}
                </div>
              </div>
              <div>
                <div className="p-1 text-center w-40 capitalize ">{item.name}</div>
              </div>
              <div className=" w-60">
                <select
                  name="sub-category"
                  id="sub-category"
                  className="bg-gray-100 p-1 rounded  outline-none cursor-pointer w-56 text-center"
                  onChange={(event) => {
                    event.preventDefault;
                    setSubCategory(event.target.value);
                  }}
                >
                  <option value="">Sub-Category Name</option>
                  {item.subCategory.map((item) => {
                    return (
                      <option key={item} value="t-shirt">
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-1 p-1 text-center w-40 ">
                <div className="w-4">
                  <select
                    name="unit"
                    id="unit"
                    className="bg-gray-100 p-1 rounded  outline-none cursor-pointer items-center"
                  >
                    <option value="volvo">Unit Name</option>
                    {item.unit.map((item) => {
                      return (
                        <option key={item} value="t-shirt">
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div>
                <div className="p-1 text-center w-40 ">{` ${item.stock}`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemInfoList;
