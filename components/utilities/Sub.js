import React from "react";

const Sub = (props) => {
  return (
    <div className="flex-grow lg:px-8">
      <p className="leading-relaxed text-base">
        {props.subText}
      </p>
    </div>
  );
};

export default Sub;
