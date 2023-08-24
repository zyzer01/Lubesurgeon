import Image from "next/image";
import React from "react";

function Flexitems(props) {
  return (
    <div>
      <div className="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
        <Image src={props.url} alt={props.alt}  />
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">{props.subText}</p>
      </div>
    </div>
  );
}

export default Flexitems;

                        