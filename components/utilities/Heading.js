import React from 'react';

function Heading(props) {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-balablue">
          {props.headTitle}
        </h1>
        <p className="my-2 md:my-4 text-lg text-secondary leading-relaxed">{props.sub}</p>
        <div className="flex mt-4 md:mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
