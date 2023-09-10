import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import openCar from '/public/images/open car.png';
import heroCar from '/public/images/car and yellow background.png';
import oppositeHero from '/public/images/opposite hero.png';
import Link from 'next/link';

function Hero(props) {
  const imageUrl = isMobile ? openCar : heroCar;

  return (
    <div>
      <section className="md:px-16 px-6 py-16 lg:py-0 text-gray-600 body-font">
        <div className="grid md:grid-cols-2 items-center gap-24">
          <div>
            <h1 className="xl:text-5xl lg:text-4xl mb-3 text-4xl font-extrabold tracking-wide text-balablue">
              Spoil yourself with
              <br className="hidden lg:inline-block" />
              <span className="md:leading-normal leading-snug"> convenient car care</span>
            </h1>
            <div className="flex mb-4 justify-start">
              <div className="w-20 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <p className="mb-6 md:mb-8 text-lg leading-relaxed">
              On-demand car care to transform your vehicle at home or at work. All we need is your
              key.
            </p>
            <div className="flex justify-start">
              <button className="mr-3 inline-flex items-center bg-balablue border-2 border-balablue py-4 px-6 focus:outline-none hover:bg-headingColor hover:border-2 hover:border-balablue md:hover:scale-75 transition-all rounded-full text-white mt-4 md:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-sign-turn-slight-right"
                  viewBox="0 0 16 16">
                  <path d="m8.335 6.982.8 1.386a.25.25 0 0 0 .451-.039l1.06-2.882a.25.25 0 0 0-.192-.333l-3.026-.523a.25.25 0 0 0-.26.371l.667 1.154-.621.373A2.5 2.5 0 0 0 6 8.632V11h1V8.632a1.5 1.5 0 0 1 .728-1.286l.607-.364Z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435Zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z"
                  />
                </svg>

                <span className="ml-3 flex items-start flex-col leading-none">
                  <Link
                    href="https://dashboard.lubesurgeons.com"
                    className="text-white hover:text-white">
                    Book an appointment
                  </Link>
                </span>
              </button>
            </div>
          </div>
          <div>
            <Image
              className="object-cover object-center rounded hidden md:block"
              alt="hero"
              src={imageUrl}
            />
            <Image
              className="object-cover object-center rounded md:hidden"
              alt="hero"
              src={oppositeHero}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
