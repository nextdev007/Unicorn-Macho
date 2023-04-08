import React from "react";

const HomeStatus = ({ img }) => {
  return (
    <div className=" cursor-pointer hover:scale-110 ">
      <img src={img} alt="" className="h-28 lg:h-36 w-28 rounded-lg" />
    </div>
  );
};

export default HomeStatus;
