'use client'; 

import React, { useState } from 'react';
import clsx from 'clsx';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: 'HOME', 
      href: '/',
    },
    {
      name: 'ABOUT US',
      href: '/about',
    },
    { 
      name: 'SERVICES', 
      href: '/services',
    },
    {
      name: "FAQ'S",
      href: '/faq',
    },
    {
      name: 'CONTACT US',
      href: '/employee-portal',
    },
    {
        name: 'SHOP',
        href: '/blog',
    },
  ];


  return (
    // <nav className="absolute bg-white top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50 rounded-xl bg-navbar">
    <nav className="absolute bg-white top-8 md:top-8 left-8 md:left-8 right-8 md:right-8 z-50 rounded-xl bg-navbar">
      <div className="py-10 pl-2 pr-6 lg:px-4 flex items-center justify-between h-16">
        <div className="md:ml-4 flex items-center">
          <Image
          alt="Kind Hearts Services Logo"
          src={"/navbar-logo.png"}
          width={50}
          height={20}
          className='w-44 md:w-44'
          />
        </div>
        <div className="hidden xl:flex space-x-4 mr-6">
        {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={clsx(
                  ' my-5 text-primary hover:text-secondary relative', 
                {
                  'text-pinl font-semibold': pathname === link.href,
                })
                }
              >
                  <p className={clsx('text-xs font-light transition-all duration-300', {
                    'text-pink  after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-2/6 after:h-[2px] after:bg-pink after:transition-all after:duration-300': 
                    pathname === link.href})}>{link.name}</p>
              </Link>
            ))}
          <button>
          <Link
            href="/"
            className="text-white text-xs font-thin bg-pink ml-8 px-4 py-4 rounded-md"
          >
            BOOK APPOINTMENT
          </Link>
          </button>
        </div>

        {/* Burger Menu Button */}
        <div className="xl:hidden flex items-center">
    
          <button
            onClick={toggleMenu}
            className="text-black hover:text-primary focus:outline-none"
          >
            {
            isMenuOpen ? 
                <>
                  <Image src="/navbar/close-navbar.png" priority={true} alt='close nav' width={40} height={40} />  
                </> 
              : 
                <>
                  <Image src="/navbar/open-navbar.png" priority={true} alt='open nav' width={40} height={40} />  
                </>
          }
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 mt-2 md:mt-4 bg-white rounded-lg xl:hidden">
            {links.map((link) => {
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={clsx(
                  'mx-5 mt-2 font-light text-primary hover:text-secondary block px-4 py-4', 
                {
                  'text-secondary font-semibold': pathname === link.href,
                })
                }
                onClick={toggleMenu}
              >
                  <p className='text-sm'>{link.name}</p>
              </Link>
            );
          })}
          <button className='mx-9 mb-9 mt-4'>
          <Link
            href="/"
            className="text-white bg-secondary px-12 py-2 rounded-md"
          >
            Donate
          </Link>
          </button>
            {/* <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Home</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">About</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Contact</a> */}
          </div>
        )}
      </div>
    </nav>
  );
}