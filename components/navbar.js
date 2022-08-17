import Router from "next/router";

import ItemPage from "./category-list";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-700 text-gray-100">
        <div className="h-16 px-4 max-w-4xl xl:max-w-6xl mx-auto ">
          <ItemPage />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
