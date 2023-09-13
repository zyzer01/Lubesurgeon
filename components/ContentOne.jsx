import Link from 'next/link';

export const ContentOne = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className=" text-3xl font-bold tracking-tight text-balablue sm:text-4xl">
              Discover the Difference <br className="hidden md:block" />
              with <span className="inline-block text-primary">Lubesurgeons</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-gray-700">
              At Lubesurgeons, we&apos;re dedicated to providing top-notch vehicle maintenance
              services that prioritize quality and convenience. Our experienced technicians are here
              to ensure your vehicle runs at its best, offering a wide range of services tailored to
              your needs. Experience the future of vehicle maintenance with us.
            </p>
            <Link
              href="/services"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
