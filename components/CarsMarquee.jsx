import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Heading from './utilities/Heading';

const firstCarBrand = [
  '/images/cars/acura-logo-vector-01 1.png',
  '/images/cars/mercedes-benz-logo-vector-01 1.png',
  '/images/cars/peugeot-logo-vector 1.png',
  '/images/cars/cadillac-logo 1.png',
  '/images/cars/chrysler-logo-2010-show 1.png',
  '/images/cars/aston-martin-logo-vector-01 1.png',
  '/images/cars/chevrolet-logo 1.png',
];

const secondCarBrand = [
  '/images/cars/toyota-logo-vector 1.png',
  '/images/cars/kia-vector-logo 1.png',
  '/images/cars/mitsubishi-logo-vector 1.png',
  '/images/cars/land-rover-logo 1.png',
  '/images/cars/lexus-logo-vector 1.png',
  '/images/cars/volkswagen-logo-vector 1.png',
  '/images/cars/mazda-logo-vector-download 1.png',
];

const thirdCarBrand = [
  '/images/cars/ford-logo 1.png',
  '/images/cars/subaru-logo-2003 1.png',
  '/images/cars/honda-silver-logo-vector 1.png',
  '/images/cars/hyundai-motor-vector-logo 1.png',
  '/images/cars/Innoson_New_Logo_003_AutoReportNG 1.png',
  '/images/cars/jaguar-3d-vector 1.png',
  '/images/cars/jeep-auto-vector-logo 1.png',
];

const fourthCarBrand = [
  '/images/cars/nissan-vector-logo 1.png',
  '/images/cars/rolls-royce-logo 1.png',
  '/images/cars/bmw-logo-vector-01 1.png',
  '/images/cars/volvo-logo-vector 1.png',
  '/images/cars/Dodge-logo-1990-2100x2100 1.png',
  '/images/cars/maserati-logo-2006-900x1200 1.png',
  '/images/cars/porsche-logo 1.png',
];

export const CarsMarquee = () => {
  return (
    <div className="py-20">
      <Heading headTitle="Cars" sub="We fix nearly all makes and model of cars" />

      <Marquee direction={'right'} className="flex items-center mb-10">
        {firstCarBrand.map((brand, index) => (
          <div key={index} className="mx-10 md:mx-20">
            <Image src={brand} width={100} height={50} alt={`Car Brand ${index}`} />
          </div>
        ))}
      </Marquee>

      <Marquee className="flex items-center mb-10">
        {secondCarBrand.map((brand, index) => (
          <div key={index} className="mx-20">
            <Image
              src={brand}
              width={100}
              height={50}
              alt={`Car Brand ${index}`}
              className="w-16 sm:w-100"
            />
          </div>
        ))}
      </Marquee>

      <Marquee direction={'right'} className="flex items-center mb-10">
        {thirdCarBrand.map((brand, index) => (
          <div key={index} className="mx-20">
            <Image src={brand} width={100} height={50} alt={`Car Brand ${index}`} />
          </div>
        ))}
      </Marquee>

      <Marquee>
        {fourthCarBrand.map((brand, index) => (
          <div key={index} className="mx-20">
            <Image
              src={brand}
              width={100}
              height={50}
              alt={`Car Brand ${index}`}
              className="w-16 sm:w-100"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
