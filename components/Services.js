import React from "react";
import Flexitems from "@/components/utilities/Flexitems";
import Image from "next/image";
import carTrunk from "/public/images/Car trunk area.png";
import autoService from "/public/images/auto service.png";
import autoPart from "/public/images/auto parts.png"
import autoCare from "/public/images/Auto cre.png"
import fixUp from "/public/images/fix up.png"
import roadSide from "/public/images/roadside assistace.png"

import movingCar from "public/images/car moving.png"

const services = [
  {
    url: autoService,
    alt: "schedule",
    subText: "Auto Service",
  },
  {
    url: autoCare,
    alt: "schedule",
    subText: "Auto Care",
  },
  {
    url: autoPart,
    alt: "schedule",
    subText: "Auto Parts",
  },
  {
    url: autoService,
    alt: "schedule",
    subText: "Tyre Service",
  },
  {
    url: fixUp,
    alt: "schedule",
    subText: "Fix up",
  },
  {
    url: roadSide,
    alt: "schedule",
    subText: "Roadside Assistance",
  },
];

function Services(props) {
  return (
    <div>
      <section className="text-gray-600 body-font pt-24 pb-16">
        <div className="grid md:grid-cols-2">
          <div>
            <Image
              className="object-cover object-center rounded hidden md:block"
              alt="hero"
              src={carTrunk}
            />
          </div>
          <div>
            <div className="flex flex-col justify-center pr-28">
              <h1 className="sm:text-4xl text-2xl font-bold justify-end flex title-font text-balablue ">
                Services We Provide
              </h1>
              <div className="flex justify-end mt-3 mb-5">
                <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 gap-8 md:gap-0 md:grid-cols-2 px-8 items-center text-center">
              {services.map((service, index) => (
                <div key={index}>
                <Flexitems
                  url={service.url}
                  alt={service.alt}
                  subText={service.subText}
                />
              </div>
              ))}          
            </div>
          </div>
          <div>
            <Image
              className="w-full mt-16 object-cover object-center rounded md:hidden"
              alt="hero"
              src={movingCar}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
