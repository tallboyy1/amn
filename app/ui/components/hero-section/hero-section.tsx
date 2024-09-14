"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import hero1 from "@/public/hero/home/hero-1.png";
import hero2 from "@/public/hero/home/hero-1.png";
import hero3 from "@/public/hero/home/hero-1.png";
import Link from "next/link";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: hero1,
      heading: "Welcome to Aligning Minds Network",
      description:
        "Transforming Lives by Transforming Minds ",
    },
    {
      image: hero2,
      heading: "The Transformation Expert Network",
      description:
        "Transforming Lives by Transforming Minds",
    },
    {
      image: hero3,
      heading: "Bettering Lives, Transforming Minds",
      description:
        "Transforming Lives by Transforming Minds",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0" style={{ height: "80vh" }}>
        <Image
          src={currentSlide.image}
          alt="Hero Image"
          className="object-cover w-full"
          sizes="100vw"
          quality={100}
          priority={true}
          style={{ height: "80vh" }}
        />
      </div>
      <div
        className="w-72 md:w-96 ml-4 pb-4 md:pt-52 md:mb-0 md:ml-20 relative flex flex-col justify-end md:justify-center items-left"
        style={{ height: "80vh" }}
      >
        <h1 className="text-3xl md:text-5xl my-3 text-white font-heading font-semibold">
          {currentSlide.heading}
        </h1>
        <small className="text-white text-xl font-light">
          {currentSlide.description}
        </small>
        <div className="my-8 hidden md:flex">
          <button>
            <Link
              href="/"
              className="text-white text-xs font-normal bg-pink px-4 py-4 rounded-md"
              >
              BOOK APPOINTMENT
            </Link>
          </button>
        </div>
        <div className="flex mt-3 md:mt-14 md:ml-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 mr-2 rounded-full bg-none border-2 border-white ${
                currentIndex === index ? "bg-hero-dash-blue bg-white" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
            {/* <div
              className={`h-0.5 md:h-1 rounded-sm w-3 md:w-6 ${
                currentIndex === 0 ? "bg-hero-dash-blue" : "bg-white"
              } mr-2`}
            ></div>
            <div
              className={`h-0.5 md:h-1 rounded-sm w-3 md:w-6 ${
                currentIndex === 1 ? "bg-hero-dash-blue" : "bg-white"
              } mr-2`}
            ></div>
            <div
              className={`h-0.5 md:h-1 rounded-sm w-3 md:w-6 ${
                currentIndex === 2 ? "bg-hero-dash-blue" : "bg-white"
              }`}
            ></div> */}
          </div>
      </div>
    </div>
  );
}