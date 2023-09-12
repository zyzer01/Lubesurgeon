'use client';

import React, { useState, useEffect } from 'react';
import Cta from '@/components/Cta';
import Cars from '@/components/Cars';
import Choose from '@/components/Choose';
import Features from '@/components/Features';
import Hero from '@/components/HomeHero';
import ServiceSection from '@/components/ServiceSection';
import AccordionItem from '@/components/AccordionItem';
import Heading from '@/components/utilities/Heading';
import ConsentModal from '@/components/ConsentModal';
import Cookies from 'js-cookie';

const accordionItems = [
  {
    title: 'How can I book a vehicle maintenance service with your company?',
    content:
      "You can easily book a service with us by visiting our website and following the simple booking process. Choose your desired service, select a date and time, and provide your vehicle details. It's that easy!",
  },
  {
    title: 'What types of vehicle maintenance services do you offer?',
    content:
      'We offer a wide range of services, including engine diagnostics, oil changes, tire services, brake repairs, and more. Check our services page for a complete list of services we provide.',
  },
  {
    title: 'How can I cancel or reschedule my appointment?',
    content:
      "To cancel or reschedule your appointment, log in to your account on our website and go to the 'Bookings' section. There, you can make changes to your scheduled services.",
  },
  {
    title: 'Are your technicians certified and experienced?',
    content:
      'Absolutely. Our technicians are highly trained, certified, and experienced in handling various vehicle maintenance tasks. Rest assured, your vehicle will be in expert hands.',
  },
  {
    title: 'Do you provide pickup and drop-off services for customers?',
    content:
      'Yes, we offer pickup and drop-off services within a specified area. This convenience ensures your vehicle is serviced without any hassle on your part.',
  },
];

const Home = () => {
  // const [isConsentModalOpen, setIsConsentModalOpen] = useState(true);
  // const [hasConsent, setHasConsent] = useState(false);

  // useEffect(() => {
  //   // Check if the 'consent' cookie exists and is set to 'true'
  //   const consentCookie = Cookies.get('consent');
  //   if (consentCookie === 'true') {
  //     setHasConsent(true);
  //   }
  // }, []);

  // const handleAccept = () => {
  //   // Set a cookie to track user consent (e.g., 'consent=true').
  //   Cookies.set('consent', 'true', { secure: true }); // Example cookie name and value
  //   setIsConsentModalOpen(false);
  //   setHasConsent(true); // Update the consent status in state
  // };

  // const handleReject = () => {
  //   // Handle the "Reject" action (e.g., deny cookies).
  //   setIsConsentModalOpen(false);
  // };

  // // const hasConsent = document.cookie.includes('consent=true');

  return (
    <div>
      {/* {hasConsent && (
      <ConsentModal
        isOpen={isConsentModalOpen}
        onAccept={handleAccept}
        onReject={handleReject}
        onClose={() => setIsConsentModalOpen(false)}
      />
    )} */}
      <Hero />
      <Features />
      <ServiceSection />
      <Choose />
      <div class="px-4 pt-16 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
      <Cars />
      <Cta />
    </div>
  );
};

export default Home;
