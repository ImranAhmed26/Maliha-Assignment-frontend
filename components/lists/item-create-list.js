import React from "react";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";

import { items } from "../../lib/constants";
import { baseUrl } from "../../lib/api";
import SubCategoryAddModal from "../modal/sub-category-add-modal";
import UnitAddModal from "../modal/unit-add-modal";

let units = [
  { name: "kg", value: "kg" },
  { name: "pound", value: "pound" },
];

const ItemCreateComponent = () => {
  const [itemType, setItemType] = useState("");
  const [itemName, setItemName] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [unit, setUnitName] = useState("");
  const [stockLimit, setStockLimit] = useState();

  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isUnitAddOpen, setUnitAddOpen] = useState(false);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const res = await axios.get(`${baseUrl}`);
  //     setSubCategory(res.data.items.map((item)=>{return item.subCategory}));
  //   };
  //   fetchItems();
  // }, []);
  // console.log("subs are ", subCategory);

  const body = {
    type: itemType,
    name: itemName,
    subCategory: [subCategory],
    unit: [unit],
    stock: stockLimit,
  };

  const handleSubmit = async () => {
    const res = await axios
      .post(`${baseUrl}`, body)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  console.log("body is ", body);

  return (
    <div className=" text-gray-700 pt-20 mx-20 text-center font-medium text-xl cursor-default">
      <div className="flex gap-9 py-2 min-w-[70rem] max-w-[80rem] items-center justify-center bg-white m-1 rounded-md ">
        <div className="">
          <select
            name="itemType"
            id="type"
            className="bg-gray-100 p-2 rounded font-medium outline-none cursor-pointer"
            onChange={(event) => {
              event.preventDefault;
              setItemType(event.target.value);
            }}
          >
            <option value="">Item Type</option>
            {items.map((item) => {
              return (
                <option key={item.name} value={`${item.name}`}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            placeholder="Item Name"
            className="outline-none border rounded-sm p-1 text-center"
            onChange={(event) => {
              event.preventDefault;
              setItemName(event.target.value);
            }}
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="px-1">
            <select
              name="sub-category"
              id="sub-category"
              className="bg-gray-100 p-1 rounded font-medium outline-none cursor-pointer"
              onChange={(event) => {
                event.preventDefault;
                setSubCategory(event.target.value);
              }}
            >
              <option value="">Sub-Category Name</option>
              {subCategory.map((item, i) => {
                return (
                  <option key={i} value={`${item}`}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex w-8" onClick={() => setCategoryOpen(true)}>
            <PlusCircleIcon className="text-fuchsia-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="">
            <select
              name="unit"
              id="unit"
              className="bg-gray-100 p-1 rounded font-medium outline-none cursor-pointer items-center"
              onChange={(event) => {
                event.preventDefault;
                setUnitName(event.target.value);
              }}
            >
              <option value="volvo">Unit Name</option>
              <option value="saab">KG</option>
              <option value="mercedes">Gram</option>
              <option value="audi">Pound</option>
            </select>
          </div>
          <div className="flex w-8" onClick={() => setUnitAddOpen(true)}>
            <PlusCircleIcon className="text-fuchsia-500 cursor-pointer" />
          </div>
        </div>
        <div>
          <input
            placeholder="Stock Limit"
            className="outline-none border rounded-sm p-1 text-center"
            onChange={(event) => {
              event.preventDefault;
              setStockLimit(event.target.value);
            }}
          />
        </div>
        <div className="flex gap-2">
          <div className="w-8">
            <PlusCircleIcon
              className="text-fuchsia-500 cursor-pointer"
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
          <div className="w-8">
            <XCircleIcon className="text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <SubCategoryAddModal
        isOpen={isCategoryOpen}
        setIsOpen={setCategoryOpen}
        subCategory={subCategory}
      />
      <UnitAddModal isOpen={isUnitAddOpen} setIsOpen={setUnitAddOpen} units={units} />
    </div>
  );
};

export default ItemCreateComponent;

// useEffect(() => {
//   axios({
//     method: "get",
//     url: "https://idbdev.com/motion2/public/api/product-is-here-caught-me",
//     responseType: "steam",
//   }).then((response) => {
//     setProducts(response.data);
//   });
// },[]);
