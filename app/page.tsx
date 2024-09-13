"use client";
import Image from "next/image";
import AboutUsScreen from "./ui/components/about-us-screen/about-us-screen";
import FAQAccordion from "./ui/components/faq/faq";
import { useEffect, useState } from "react";
import hero1 from "../public/hero/home/hero-1.png";
import hero2 from "../public/hero/home/hero-1.png";
import hero3 from "../public/hero/home/hero-1.png";
import Link from "next/link";



export default function Home() {
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
      heading: "Text 2",
      description:
        "Text 2",
    },
    {
      image: hero3,
      heading: "Text 3",
      description:
        "Text 3",
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
    <main className="">

      <section className="bg-hero-gradient py-8 text-center flex flex-col-reverse md:flex-col items-center justify-center" style={{height: "73vh"}}>
      </section>

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
          <small className="text-white font-light">
            {currentSlide.description}
          </small>
          <div className="my-4">
            <button>
              <Link
                href="/"
                className="text-white text-xs font-normal bg-pink px-4 py-4 rounded-md"
                >
                BOOK APPOINTMENT
              </Link>
            </button>
          </div>
          <div className="flex mt-3 md:ml-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 mr-2 rounded-full bg-none border-2 border-white ${
                  currentIndex === index ? "bg-hero-dash-blue" : "bg-white"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      














      
      
      <section className="mt-44">
        <div className="w-8/12 md:w-5/12 px-4 mx-auto text-center mb-10">
          <h2 className="font-heading font-bold text-purple text-3xl mb-5">Discover the AMN Difference: Unleash Your Extraordinary Potential</h2>
          <p className="mb-4 text-xs leading-6"><span className="font-bold">Do you yearn for a life brimming with purpose, fulfillment, and a sense of limitless possibility?</span> <br /> At Aligning Minds Network (AMN), we{`'`}re not just about coaching and training,; we{`'`}re your catalyst for transformation, guiding you from feeling stuck and unfulfilled to ignited and empowered.</p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:w-12/12 w-10/12 mx-auto">
          <div className="h-48 md:h-72 flex justify-center text-white bg-pink  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Personalised Coaching, Deeply Aligned</h3>
                <p className="text-sm">Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations.</p>    
            </div>
          </div>

          <div className="h-48 md:h-72 flex justify-center text-white bg-purple  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Expert Collaborators, Not Just Coaches</h3>
                <p className="text-sm">Our coaches are more than industry veterans; they{`'`}re skilled collaborators who co-create your roadmap to success.</p>    
            </div>
          </div>

          <div className="h-48 md:h-72 flex justify-center text-white bg-pink  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Beyond Coaching, a Transformation Ecosystem</h3>
                <p className="text-sm">AMN is your one-stop shop for growth. We offer specialized learning and development programs.</p>    
            </div>
          </div>
          <div className="h-48 md:h-72 flex justify-center text-white bg-purple  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Flexibility Woven into Your Success</h3>
                <p className="text-sm">Choose from in-person, online, and hybrid coaching models that seamlessly integrate into your busy life.</p>    
            </div>
          </div>

          <div className="h-48 md:h-72 flex justify-center text-white bg-pink  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Proven Methods, Innovate Approach</h3>
                <p className="text-sm">We blend cutting-edge coaching methodologies with unique, research-backed tools and techniques.</p>    
            </div>
          </div>

          <div className="h-48 md:h-72 flex justify-center text-white bg-purple  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Mindset Transformation at the Core</h3>
                <p className="text-sm">At AMN, we understand that true transformation starts within.</p>    
            </div>
          </div>
        </div>
      </section>

      {/* <section className="grid mt-10 sm:grid-cols-1 sm:max-w-2xl md:mx-auto md:max-w-1xl lg:grid-cols-2 gap-4  lg:max-w-7xl mx-auto px-4 md:px-10 my:12 md:my-24">
                    <div className="">
                        <div className="relative md:max-w-sm md:mx-auto lg:w-7/12 lg:mx-auto">
                            <Image src="/home/about-amn.png" alt="mission png" quality={100} priority={true} width={1200} height={900} className=""/>
                            <Image src="/home/about-amn.png" alt="mission png" quality={100} priority={true} layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                    <div className="lg:h-max lg:mb-auto">
                        <div
                            className="mb-2"
                            >
                            <p className="text-xs md:mx-auto md:max-w-lg leading-7">About Aligning Minds Network</p>
                            <h2 className="text-4xl md:mx-auto md:max-w-lg font-heading mb-2">Welcome to Aligning Minds Network</h2>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">Transforming Lives by Transforming Minds Welcome to Aligning Minds Network - A Journey Towards Transformation <br /><br /> Greetings, I am Princess Otigbu, your navigator and ally here at  Aligning Minds Network. As you navigate our space, I want to extend a warm, personal welcome to you — a fellow traveler on the path of discovery and transformation. Here, we believe in nurturing your potential, seed by seed. Every experience, every challenge, is a bud waiting to bloom. We're not just coaches and educators; we're partners, tilling the soil of your potential and helping you cultivate the fruits of your talents and dreams. <br /><br /> Our belief is simple yet profound: within each person lies an undiscovered universe of capability and brilliance. Our mission? To journey alongside you, illuminating the way as you uncover and weave together your unique talents and dreams, crafting a life and career rich with purpose and fulfilment. <br /><br /> As you peruse our offerings, envision the future you can create. Whether you seek to elevate your personal life, professional career, or organisational culture, we are here to help chart the course to your ultimate destination. </p>
                            </div>
                        </div>
                    </div>
                </section> */}

      <section className="grid mt-10 sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:max-w-7xl mx-auto px-4 md:px-10 my-12 md:my-24">
        {/* Left side: Image */}
        <div className="flex justify-center">
          <div className="relative md:max-w-sm lg:w-9/12">
            <Image 
              src="/home/about-amn.png" 
              alt="mission png" 
              quality={100} 
              priority={true} 
              layout="responsive" 
              objectFit="contain" 
              width={600} 
              height={400} 
              className=""
            />
          </div>
        </div>

        {/* Right side: Text */}
        <div className="lg:h-max lg:mb-auto mx-auto">
          <div className="mb-2">
            <p className="text-xs md:max-w-lg leading-7">About Aligning Minds Network</p>
            <h2 className="text-4xl md:max-w-lg font-heading mb-2">
              Welcome to Aligning Minds Network
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-xs md:max-w-lg leading-7">
              Transforming Lives by Transforming Minds.
              Welcome to Aligning Minds Network - A Journey Towards Transformation.
              <br /><br />
              Greetings, I am Princess Otigbu, your navigator and ally here at Aligning Minds Network. As you navigate our space, I want to extend a warm, personal welcome to you — a fellow traveler on the path of discovery and transformation. Here, we believe in nurturing your potential, seed by seed. Every experience, every challenge, is a bud waiting to bloom. We{`'`}re not just coaches and educators; we{`'`}re partners, tilling the soil of your potential and helping you cultivate the fruits of your talents and dreams.
              <br /><br />
              Our belief is simple yet profound: within each person lies an undiscovered universe of capability and brilliance. Our mission? To journey alongside you, illuminating the way as you uncover and weave together your unique talents and dreams, crafting a life and career rich with purpose and fulfilment.
              <br /><br />
              As you peruse our offerings, envision the future you can create. Whether you seek to elevate your personal life, professional career, or organisational culture, we are here to help chart the course to your ultimate destination.
            </p>
          </div>
        </div>
      </section>

      <AboutUsScreen/>
      <section className="md:flex gap-10 md:w-8/12 mx-4 md:mx-auto">
        <div className="mb-8 md:mb-0 md:w-8/12">
          <div className="">
            <Image
              src="/home/schedule-free-consultation.png"
              alt="Schedule Free Consultation Images"
              width={1200}
              height={500}
              priority={true}
              quality={100}
            />
          </div>
        </div>
        <div className="my-auto">
          <p className="md:w-56 leading-8">Join us at Aligning Minds Network, where your journey to achieving excellence is not just a goal – it{`'`}s a transformative experience that reshapes how you perceive, interact with, and conquer your world. Let{`'`}s unlock your extraordinary potential, together. Ready to embark on your journey?</p>
        </div>
      </section>

      <FAQAccordion />
    </main>
  );
}
