import Image from 'next/image';
import React from 'react';
import VideoAbout from './VideoAbout';

export const VideoContent = () => {
  return (
    <div className="px-4 py-16  mx-auto">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col flex-wrap justify-center">
          <div className=" mb-6">
            <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-headingColor sm:text-3xl sm:leading-normal">
              Where quick, efficient service <br className="hidden md:block" />
              conquers{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-blue-100" />
                <span className="relative inline-block text-primary">vehicle troubles</span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We bring vehicle maintenance to your doorstep. No need to worry about a thing; all we
              need are your keys. Our mission is to make your life easier by providing top-notch,
              hassle-free car care services right at your home or office.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2 md:grid-cols-1">
            <div className="bg-white border-l-4 shadow-sm border-primary flex">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-balablue">
                  Your Satisfaction is Our Priority
                </h6>
                <p className="text-sm text-gray-900">
                  We&apos;re committed to delivering the best possible service to ensure your
                  vehicle runs smoothly, and you can trust us to handle all your car maintenance
                  needs.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-primary">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-balablue">
                  Convenient and Reliable
                </h6>
                <p className="text-sm text-gray-900">
                  We offer unparalleled convenience with our mobile mechanic services. Say goodbye
                  to long waits at the auto shop; Lubesurgeons is here to save your time and deliver
                  peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <VideoAbout url={'https://youtu.be/sEVv4mH6V_E?si=nY709C-76p32dcun'} />
        </div>
      </div>
    </div>
    // <div className="overflow-x-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
    //   <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
    //     <div className="flex flex-col flex-wrap justify-center">
    //       <div className=" mb-6">
    //         <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-headingColor sm:text-4xl sm:leading-none">
    //           Where quick, efficient service <br className="hidden md:block" />
    //           conquers{' '}
    //           <span className="relative px-1">
    //             <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-blue-100" />
    //             <span className="relative inline-block text-primary">vehicle troubles</span>
    //           </span>
    //         </h2>
    //         <p className="text-base text-gray-700 md:text-lg">
    //           We bring vehicle maintenance to your doorstep. No need to worry about a thing; all we
    //           need are your keys. Our mission is to make your life easier by providing top-notch,
    //           hassle-free car care services right at your home or office.
    //         </p>
    //       </div>

    //     </div>

    //   </div>
    // </div>
  );
};
