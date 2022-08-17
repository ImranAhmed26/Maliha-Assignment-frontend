import Image from "next/image";
import React from "react";
import { useState } from "react";

const ProductCard = ({ name, productImage, price, sellPrice, stock, item }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (item) => {
    console.log(item);
    setCartItems([...cartItems, item]);
  };

  console.log(cartItems);

  return (
    <div className="w-68 pt-6 px-6 bg-white text-gray-700 font-semibold rounded-md m-auto mt-2 drop-shadow-md"></div>
  );
};

export default ProductCard;
