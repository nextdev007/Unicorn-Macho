import Link from "next/link";

import React from "react";

const NavLink = ({ category, isActive }) => {
  return (
    <div className="">
      <Link
        href={`/${category}`}
        className={`${
          isActive &&
          "font-bold pb-4 underline underline-offset-8 decoration-red-600 decoration-4"
        }`}
      >
        <div className="uppercase">{category}</div>
      </Link>
    </div>
  );
};

export default NavLink;
