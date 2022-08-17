import React from "react";
import { useEffect, useState, useRef } from "react";

const Dropdown = ({ dropdownTitle, itemList, handleClickItem }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);

  return (
    <div>
      <div className="relative w-28 xl:w-36 2xl:w-44 transition-all duration-300">
        <button
          className="category-button safari-category-filter"
          onClick={() => setShowDropdown((b) => !b)}
        >
          {dropdownTitle}
        </button>

        {showDropdown && (
          <div
            ref={dropdown}
            className="w-44 absolute right-0 z-50 font-light text-sm text-center rounded-b-md"
          >
            {Array.isArray(itemList) && (
              <ul className="bg-gprc_primary text-white w-28 xl:w-36 2xl:w-44 py-2 ml-auto mt-2 rounded-md">
                {itemList.map((item) => {
                  return (
                    <li
                      key={item._id ? item._id : item}
                      value={item.keyword ? item.keyword : item}
                      onClick={() => {
                        handleClickItem(item.keyword ? item.keyword : item);
                        setShowDropdown((b) => !b);
                      }}
                      className="drop-down-button uppercase"
                    >
                      {item.keyword
                        ? item.keyword
                        : item.name
                        ? item.name
                        : item}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;