import React from "react";
import Heading from "@/components/utilities/Heading";
import { OtherHero } from "@/components/OtherHero";
import { OtherFeatures } from "@/components/OtherFeatures";

const featuredItems = [
  {
    title: "Total Transparency",
    content:
      "We prioritize transparency in all our services. We believe in providing clear and honest information to our customers so they can make informed decisions about their vehicle maintenance.",
    button: 'Learn more',
    },
  {
    title: "Swiftness to the Job",
    content: "We understand the importance of quick service when it comes to vehicle maintenance. Our skilled team is dedicated to delivering swift and efficient service to get you back on the road as soon as possible.",
    button: 'Learn more',
  },
  {
    title: "Transparency",
    content: "kjbfladc lacvknsak clas apk sl lo kn lofl kld ok mz.vfa",
    button: 'Learn more',
  },
];

const About = () => {
  return (
    <>
      <OtherHero
        heading="Welcome to Lubesurgeons"
        sub="Your Trusted Partner for Vehicle Maintenance and Care"
        href="https://dashboard.lubesugeons.com/auth/signup"
        buttonText="Get Started"
      />
      <OtherFeatures items={featuredItems} />
    </>
  );
};

export default About;
