import React from 'react';
import { OtherHero } from '@/components/OtherHero';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';

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
      <Faq />
    </div>
  );
};

export default About;
