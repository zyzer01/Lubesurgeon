import React from 'react';
import { OtherHero } from '@/components/OtherHero';
import { Services } from '@/components/Services';
import AccordionItem from '@/components/AccordionItem';
import Heading from '@/components/utilities/Heading';

export const metadata = {
  title: 'Services',
};

const accordionItems = [
  {
    title: 'What is Comprehensive Vehicle Maintenance?',
    content:
      "Comprehensive Vehicle Maintenance includes a thorough inspection of your vehicle's engine, spark plug replacement, and interior cleaning to ensure your car runs smoothly and stays clean.",
  },
  {
    title: 'Why is Engine Oil Change necessary?',
    content:
      "Engine Oil Change involves replacing the old oil with fresh oil, which is crucial for your engine's health. It helps lubricate engine parts, reduce friction, and maintain optimal performance.",
  },
  {
    title: 'What does the Tire Care Service include?',
    content:
      'The Tire Care Service covers tire inflation, tire tread repair, and the installation of new tires when needed. It ensures your tires are safe and in good condition for the road.',
  },
  {
    title: 'Why should I consider Cooling System Maintenance?',
    content:
      "Cooling System Maintenance involves inspecting the compressor, replacing the air filter, and cleaning the coolant system. It helps prevent overheating and ensures your vehicle's cooling system functions efficiently.",
  },
  {
    title: 'What does the Brake System Checkup involve?',
    content:
      'The Brake System Checkup includes an examination of brake fluid, pedal spring inspection, and necessary spring maintenance. It ensures your brakes are in optimal working condition for safety.',
  },
  {
    title: 'What are the Additional Vehicle Services offered?',
    content:
      'Additional Vehicle Services encompass various options, such as body repair and painting, steering system inspection, and starter/charging system service, addressing a wide range of vehicle needs.',
  },
];

const About = () => {
  return (
    <div>
      <OtherHero
        heading="Our Services and Pricing"
        sub="Explore a wide range of vehicle maintenance services and their competitive prices."
        buttonText="Get Started"
        href="https://dashboard.lubesurgeons.com/book"
      />
      <Services />
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Heading headTitle="Frequently Asked Questions" />
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="space-y-4">
            {accordionItems.map((item, index) => (
              <AccordionItem key={index} title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
