import Heading from './utilities/Heading';
import Image from 'next/image';

function Cars() {
  const carBrands = [
    '/images/cars/acura-logo-vector-01 1.png',
    '/images/cars/mercedes-benz-logo-vector-01 1.png',
    '/images/cars/bmw-logo-vector-01 1.png',
    '/images/cars/cadillac-logo 1.png',
    '/images/cars/chrysler-logo-2010-show 1.png',
    '/images/cars/aston-martin-logo-vector-01 1.png',
    '/images/cars/Dodge-logo-1990-2100x2100 1.png',
    '/images/cars/ford-logo 1.png',
    '/images/cars/honda-silver-logo-vector 1.png',
    '/images/cars/hyundai-motor-vector-logo 1.png',
    '/images/cars/Innoson_New_Logo_003_AutoReportNG 1.png',
    '/images/cars/jaguar-3d-vector 1.png',
    '/images/cars/toyota-logo-vector 1.png',
    '/images/cars/kia-vector-logo 1.png',
    '/images/cars/mitsubishi-logo-vector 1.png',
    '/images/cars/land-rover-logo 1.png',
    '/images/cars/lexus-logo-vector 1.png',
    '/images/cars/volkswagen-logo-vector 1.png',
    '/images/cars/mazda-logo-vector-download 1.png',
    '/images/cars/chevrolet-logo 1.png',
    '/images/cars/nissan-vector-logo 1.png',
    '/images/cars/peugeot-logo-vector 1.png',
    '/images/cars/volvo-logo-vector 1.png',
    '/images/cars/subaru-logo-2003 1.png',
    '/images/cars/jeep-auto-vector-logo 1.png',
    '/images/cars/rolls-royce-logo 1.png',
    '/images/cars/maserati-logo-2006-900x1200 1.png',
    '/images/cars/porsche-logo 1.png',
  ];

  return (
    <section className="py-24 px-8">
      <Heading headTitle="Cars" sub="We fix nearly all makes and model of cars" />
      <div className="grid grid-cols-5 gap-5 justify-center">
        {carBrands.map((brand, index) => (
          <div key={index} className="flex justify-center">
            <Image src={brand} width={100} height={50} alt={`Car Brand ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cars;

// // pages/index.tsx
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   const items = new Array(12).fill("x");
//   return (
//     <div className="m-2 grid grid-cols-12 gap-2">
//       {items.map((item, i) => {
//         return (
//           <div
//             key={i}
//             className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-gray-100"
//           ></div>
//         );
//       })}
//     </div>
//   );
// };
// export default Home;
