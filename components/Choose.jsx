import Heading from './utilities/Heading';
import Image from 'next/image';
import openCar from '/public/images/open car.png';

function Choose(props) {
  return (
    <section className="px-4 sm:px-8 md:px-32 py-10">
      <Heading headTitle="Why Choose LubeSurgeons?" />
      <div className="text-center">
        <Image className="object-cover object-center w-full" src={openCar} alt="open car engine" />
      </div>
    </section>
  );
}

export default Choose;
