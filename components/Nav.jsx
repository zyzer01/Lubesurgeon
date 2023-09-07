'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import Button from '@/components/utilities/Button';
import logo from 'public/images/lubsurgeons logo.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const DesktopLink = ({ to, children }) => (
    <Link
      href={to}
      className="text-gray-900 hover:bg-balablue hover:text-white px-3 py-2 rounded-md">
      {children}
    </Link>
  );

  const MobileLink = ({ to, children }) => (
    <Link
      onClick={closeMobileMenu}
      href={to}
      className="text-gray-900 hover:bg-balablue hover:text-white block px-3 py-2 rounded-md text-base font-medium">
      {children}
    </Link>
  );

  return (
    <div>
      <nav className="bg-gray py-5">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-between items-center">
            <div className="">
              <Link href="/">
                <Image src={logo} alt="Workflow" />
              </Link>
            </div>
            <div className="">
              <div className="">
                <DesktopLink to="/services">Services</DesktopLink>
                <DesktopLink to="/about">About</DesktopLink>
                <DesktopLink to="https://www.dashboard.lubesurgeons.com/contact">
                  Contact
                </DesktopLink>
              </div>
            </div>
            <div className="">
              <Link
                href="https://www.dashboard.lubesurgeons.com/auth/signin"
                className="underline text-balablue mt-4 mr-4 md:mt-0">
                Sign in
              </Link>
              <Link href="https://www.dashboard.lubesurgeons.com/book">
                <Button text="Book Now" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-4 pb-4">
          <div className="flex md:hidden">
            <Link href="/">
              <Image src={logo} alt="Workflow" />
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileLink to="/services">Services</MobileLink>

                <MobileLink to="/about">About</MobileLink>

                <MobileLink to="https://www.dashboard.lubesurgeons.com/contact">Contact</MobileLink>

                <MobileLink to="https://www.dashboard.lubesurgeons.com/book">Book</MobileLink>

                <MobileLink to="/https://www.dashboard.lubesurgeons.com/auth/signin">
                  Sign in
                </MobileLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
