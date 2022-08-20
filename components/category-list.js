import React from "react";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";

import SubCategoryAddModal from "./helper/sub-category-add-modal";
import UnitAddModal from "./helper/unit-add-modal";

let subCategoryItems = [
  { name: "Tshirt", value: "tshirt" },
  { name: "Shirt", value: "shirt" },
  { name: "Pant", value: "pant" },
  { name: "Polo", value: "polo" },
];

let items = [
  { name: "Nylon", value: "nylon" },
  { name: "Cotton", value: "cotton" },
  { name: "Linen", value: "linen" },
  { name: "Spandex", value: "spandex" },
];
let units = [
  { name: "kg", value: "kg" },
  { name: "pound", value: "pound" },
];

const ItemPage = () => {
  // const [category, setCategory] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemName, setItemName] = useState("");
  const [subCategory, setSubCategory] = useState([subCategoryItems]);
  const [unit, setUnitName] = useState("");
  const [stockLimit, setStockLimit] = useState("");

  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isUnitAddOpen, setUnitAddOpen] = useState(false);

  // console.log("item is ", itemType);
  // console.log("item is ", itemName);
  // console.log("item is ", stockLimit);
  console.log("sub items inside are ", subCategoryItems);

  return (
    <div className=" text-gray-700 pt-20 mx-20 ">
      <div className="flex gap-6  min-w-[70rem] max-w-[80rem] items-center justify-center ">
        <div className="">
          <select
            name="itemType"
            id="type"
            className="bg-gray-100 p-1 rounded font-medium outline-none cursor-pointer"
            onChange={(event) => {
              event.preventDefault;
              setItemType(event.target.value);
            }}
          >
            <option value="">Item Type</option>
            {items.map((item) => {
              return (
                <option key={item.value} value="">
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
              <option value="t-shirt">T-Shirt</option>
              <option value="shirt">Shirt</option>
              <option value="hoodie">Hoodie</option>
              <option value="pant">Pant</option>
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
            <PlusCircleIcon className="text-fuchsia-500 cursor-pointer" />
          </div>
          <div className="w-8">
            <XCircleIcon className="text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <SubCategoryAddModal
        isOpen={isCategoryOpen}
        setIsOpen={setCategoryOpen}
        subCategoryItems={subCategoryItems}
      />
      <UnitAddModal isOpen={isUnitAddOpen} setIsOpen={setUnitAddOpen} units={units} />
    </div>
  );
};

export default ItemPage;

// useEffect(() => {
//   axios({
//     method: "get",
//     url: "https://idbdev.com/motion2/public/api/product-is-here-caught-me",
//     responseType: "steam",
//   }).then((response) => {
//     setProducts(response.data);
//   });
// },[]);
