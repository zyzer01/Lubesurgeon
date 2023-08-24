import React from "react";
import Heading from "./utilities/Heading";
import Image from "next/image";
import openCar from '/public/images/open car.png'

function Choose(props) {
  return (
    <div>
      <section className="px-32">
        <Heading headTitle="Why Choose LubeSurgeons?" />
        <div className="text-center">
          <Image
            className="object-cover object-center w-full"
            src={openCar}
            alt="open car engine"
          />
        </div>
      </section>
    </div>
  );
}

export default Choose;
