import React from 'react';
import { OtherHero } from '@/components/OtherHero';
import { Pricing } from '@/components/Pricing';

const About = () => {
  return (
    <div>
      <OtherHero
        heading="All our pricing plans"
        sub="Jkjsbdkcjd jsncksc knsdkc scknknsdkn dknslvk skvnsldsnv"
        buttonText="Get started"
        href="https://dashboard.lubesurgeons.com/book"
      />
      <Pricing />
    </div>
  );
};

export default About;
