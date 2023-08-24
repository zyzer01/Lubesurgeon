import React from "react";
import Heading from "./utilities/Heading";
import Sub from "./utilities/Sub";
import Image from "next/image";
import schedule from "/public/images/shedule feature.png";
import quote from "/public/images/get a quote.png";
import maintenance from "/public/images/car maintenance.png";
import wallet from "/public/images/wallet pay.png";

const items = [
  {
    src: schedule,
    subText:  "Schedule your LubeSurgery using the website, or our iOS/Android app."
  },
  {
    src: quote,
    subText:  " Get a Quote. Provide your location and our mechanics come to you."
  },
  {
    src: maintenance,
    subText:  "Track your services, text your mechanic, receive notifications."
  },
  {
    src: wallet,
    subText:  "Rate and pay when your service is complete."
  }
]

function Features(props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="py-24 mx-auto">
          <Heading headTitle="How It Works" />
          <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-4 px-8 justify-center items-center text-center">
            {items.map((item, index) => (
              <div key={index}>
              <div className="flex justify-center">
                <Image src={item.src} width={130} height={60} alt="schedule" />
              </div>
              <Sub subText={item.subText}/>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
