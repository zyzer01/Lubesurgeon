import React from "react";
import Heading from "@/components/utilities/Heading";
import { OtherHero } from "@/components/OtherHero";
import { OtherFeatures } from "@/components/OtherFeatures";
import { ContentOne } from "@/components/ContentOne";


const featuredItems = [
  {
    title: "Total Transparency",
    content:
      "We provide clear and honest pricing, ensuring you always know what to expect.",
    button: 'Learn more',
    },
  {
    title: "Swiftness to the Job",
    content: "Our team is known for swift and efficient service to get you back on the road as soon as possible.",
    button: 'Learn more',
  },
  {
    title: "Reliability",
    content: "Count on us for consistent and dependable vehicle maintenance solutions.",
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
      <ContentOne />
    </>
  );
};

export default About;