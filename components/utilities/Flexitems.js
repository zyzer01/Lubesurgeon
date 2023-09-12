import Image from 'next/image';
import React from 'react';

function Flexitems(props) {
  return (
    <div>
      <div className="inline-flex items-center">
        <Image src={props.url} alt={props.alt} />
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">{props.subText}</p>
      </div>
    </div>
  );
}

export default Flexitems;
