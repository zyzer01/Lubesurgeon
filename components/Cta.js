import React from 'react';
import Image from 'next/image';
import maintenance from '/public/images/road-background.png';
import mobileScreen from '/public/images/Home Screen 1.png';

function CTA(props) {
  return (
    <section className="py-24">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-bulaba px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true">
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#FF9F15" />
                  <stop offset={1} stopColor="#FF9F15" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Manage all your bookings
                <br />
                on the dashboard.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Sign in to your account to view all your appointments, vehicles on the Lubesurgeons
                dashboard.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="../images/dashboard image.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

{
  /* <div class="relative flex items-center">
  <Image
    className="object-cover object-center h-auto w-full"
    src={maintenance}
    alt="open car engine"
  />
  <div class="absolute px-8">
    <h1 className=" mb-1 text-xl md:text-3xl text-white font-bold tracking-wide text-balablue">
      The Lubesurgeons app
      <br className="hidden md:inline-block" />
      <span className="md:leading-normal leading-snug">
        {" "}
        is coming soon
      </span>
    </h1>
    <p class="text-white">Join the waitlist</p>
    <div className="flex justify-start mt-2 md:mt-4">
      <button disabled className="mr-3 inline-flex items-center bg-gray-100 py-1 px-4 focus:outline-none md:hover:scale-75 transition-all rounded-full text-white mt-4 md:mt-0">
        <svg
          width="18"
          height="18"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7048 11.995L0.980386 23.4994C0.358398 23.0227 -0.00446033 22.2823 4.13989e-05 21.4987V2.51136C-0.00436654 1.72777 0.358398 0.98724 0.980386 0.51062L12.7048 11.995Z"
            fill="#2196F3"
          />
          <path
            d="M22.0084 11.995C22.0085 12.9056 21.5196 13.746 20.7279 14.1959L17.0466 16.2366L12.7048 11.995L17.0465 7.75333L20.7278 9.81408C21.5145 10.2593 22.0031 11.0912 22.0084 11.995Z"
            fill="#FFC107"
          />
          <path
            d="M17.0465 16.2366L3.68132 23.6995C3.31115 23.8946 2.89933 23.9976 2.48086 23.9996C2.04326 24.0079 1.61259 23.8898 1.24036 23.6594C1.15098 23.6106 1.06413 23.5571 0.980286 23.4993L12.7048 11.995L17.0465 16.2366Z"
            fill="#F44336"
          />
          <path
            d="M17.0465 7.75342L12.7049 11.995L0.980408 0.510615C1.06435 0.452843 1.1511 0.399385 1.24048 0.350523C1.98739 -0.102088 2.92009 -0.117375 3.68144 0.310476L17.0465 7.75342Z"
            fill="#4CAF50"
          />
        </svg>
        <span className="ml-3 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-500">Download on</span>
          <span className="title-font font-medium text-sm text-gray-900">
            Google Play
          </span>
        </span>
      </button>
      <button disabled className="mr-3 inline-flex items-center bg-gray-100 py-1 px-4 focus:outline-none md:hover:scale-75 transition-all rounded-full text-white mt-4 md:mt-0">
        <svg
          width="19"
          height="21"
          viewBox="0 0 21 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.848 23.04C15.5472 24.3023 14.112 24.1057 12.744 23.5103C11.2896 22.9032 9.96 22.8648 8.424 23.5103C6.5112 24.336 5.496 24.096 4.344 23.04C-2.16 16.344 -1.2 6.144 6.192 5.76C7.9848 5.856 9.24 6.7512 10.296 6.8256C11.8656 6.5064 13.368 5.592 15.048 5.712C17.0663 5.8752 18.576 6.672 19.584 8.1048C15.432 10.6008 16.416 16.0728 20.2297 17.6088C19.4663 19.6128 18.4872 21.5928 16.8457 23.0568L16.848 23.04ZM10.152 5.688C9.9576 2.712 12.3696 0.264002 15.144 0.0240021C15.5256 3.456 12.024 6.024 10.152 5.688Z"
            fill="#1F2B4A"
          />
        </svg>
        <span className="ml-3 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-500">Get it on</span>
          <span className="title-font font-medium text-sm text-gray-900">
            App Store
          </span>
        </span>
      </button>
    </div>
  </div>
</div> */
}
