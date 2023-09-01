import React from 'react';
import Flexitems from '@/components/utilities/Flexitems';
import Image from 'next/image';
import carTrunk from '/public/images/Car trunk area.png';
import autoService from '/public/images/auto service.png';
import autoPart from '/public/images/auto parts.png';
import autoCare from '/public/images/Auto cre.png';
import fixUp from '/public/images/fix up.png';
import roadSide from '/public/images/roadside assistace.png';

import movingCar from 'public/images/car moving.png';

const services = [
  {
    url: autoService,
    alt: 'schedule',
    subText: 'Auto Service',
  },
  {
    url: autoCare,
    alt: 'schedule',
    subText: 'Auto Care',
  },
  {
    url: autoPart,
    alt: 'schedule',
    subText: 'Auto Parts',
  },
  {
    url: autoService,
    alt: 'schedule',
    subText: 'Tyre Service',
  },
  {
    url: fixUp,
    alt: 'schedule',
    subText: 'Fix up',
  },
  {
    url: roadSide,
    alt: 'schedule',
    subText: 'Roadside Assistance',
  },
];

function Services(props) {
  return (
    <section className="text-gray-600 body-font py-24">
      <div className="grid lg:grid-cols-2">
        <div>
          <Image
            className="object-cover object-center rounded hidden md:block"
            alt="hero"
            src={carTrunk}
          />
        </div>
        <div>
          <div className="flex lg:justify-end justify-center xl:pr-32 md:pr-16">
            <h1 className="sm:text-4xl text-3xl font-bold justify-end flex title-font text-balablue ">
              Services We Provide
            </h1>
          </div>
          <div className="flex mt-4 mb-8 md:mt-6 xl:pr-32 lg:pr-16 justify-center lg:justify-end">
            <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
          <div className="grid grid-cols-3 md:gap-0 lg:grid-cols-2 items-center text-center">
            {services.map((service, index) => (
              <div key={index}>
                <Flexitems url={service.url} alt={service.alt} subText={service.subText} />
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
  );
}

export default Services;
