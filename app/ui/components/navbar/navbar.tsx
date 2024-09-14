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
      href: '/contact',
    },
    {
        name: 'SHOP',
        href: '/shop',
    },
  ];


  return (
    // <nav className="absolute bg-white top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50 rounded-xl bg-navbar">
    <nav className="absolute bg-white top-8 sm:left-8 sm:right-8 md:top-4 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16 z-50 rounded-xl bg-navbar">
      <div className="py-10 pl-2 pr-6 lg:px-4 flex items-center justify-between h-16">
        <div className="md:ml-4 flex items-center">
          <Image
          alt="Kind Hearts Services Logo"
          src={"/navbar-logo.png"}
          width={150}
          height={20}
          // className='w-44 md:w-44'
          quality={100}
          priority={true}
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
                  'text-pink font-semibold': pathname === link.href,
                })
                }
              >
                  <p className={clsx('text-xs font-medium transition-all duration-300', {
                    'text-pink  after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-2/6 after:h-[2px] after:bg-pink after:transition-all after:duration-300': 
                    pathname === link.href})}>{link.name}</p>
              </Link>
            ))}
          <button>
            <Link
              href="/"
              className="text-white text-xs font-normal bg-pink ml-8 px-4 py-4 rounded-md"
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
                  <Image src="/navbar-burger.png" priority={true} alt='close nav' width={20} height={20} />  
                </> 
              : 
                <>
                  <Image src="/navbar-burger.png" priority={true} alt='open nav' width={25} height={25} />  
                </>
          }
          </button>
        </div>

        <div className={clsx(
                    "fixed top-0 left-0 w-64 h-screen bg-sidebar z-40 transition-transform duration-300 ease-in-out",
                    {
                        "-translate-x-full": !isMenuOpen,
                        "translate-x-0": isMenuOpen
                    }
                )}>
                    <div className="flex justify-between px-4 pb-4 pt-8">
                        <Image src="/navbar-logo.png" alt="logo" width={150} height={20} priority={true} quality={100} />
                        <button className='mb-auto' onClick={toggleMenu}>
                            <Image src="/navbar-close.png" alt="close menu" width={20} height={20} />
                        </button>
                    </div>
                    <div className="flex flex-col p-4">
                      {links.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href}
                          onClick={toggleMenu} 
                          className={clsx(
                            ' my-3 text-primary hover:text-secondary relative w-max', 
                          {
                            'text-pinl font-semibold': pathname === link.href,
                          })
                          }
                        >
                            <p className={clsx('text-xs font-medium transition-all duration-300', {
                              'text-pink  after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-2/6 after:h-[2px] after:bg-pink after:transition-all after:duration-300': 
                              pathname === link.href})}>{link.name}</p>
                        </Link>
                      ))}
                      <button onClick={toggleMenu} className='mt-8 mr-auto'>
                        <Link
                          href="/"
                          className="text-white text-xs font-normal bg-pink px-4 py-4 rounded-md"
                        >
                          BOOK APPOINTMENT
                        </Link>
                      </button>
                    </div>
                </div>

                {/* Overlay to close sidebar when clicked outside */}
                {isMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black opacity-50 z-30"
                        onClick={toggleMenu}
                    />
                )}
      </div>
    </nav>
  );
}