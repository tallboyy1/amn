"use client";
import Image from "next/image";
import AboutUsScreen from "./ui/components/about-us-screen/about-us-screen";
import FAQAccordion from "./ui/components/faq/faq";

import Link from "next/link";
import Testimonials from "./ui/components/testimonials/testimonials";
import HeroSection from "./ui/components/hero-section/hero-section";


export default function Home() {
  return (
    <main className="">

      <HeroSection/>

      <div className="my-16 w-max mx-auto md:hidden">
        <button>
          <Link
            href="/"
            className="text-white text-xs font-normal bg-pink px-8 py-6 rounded-md"
          >
            BOOK APPOINTMENT
         </Link>
        </button>
      </div>

      <section className="md:mt-16">
        <div className="w-full md:w-5/12 px-4 mx-auto text-center mb-10">
          <h2 className="font-heading font-bold text-purple text-2xl md:text-3xl mb-5">Discover the AMN Difference: Unleash Your Extraordinary Potential</h2>
          <p className="mb-4 text-xs leading-6"><span className="font-bold">Do you yearn for a life brimming with purpose, fulfillment, and a sense of limitless possibility?</span> <br /> At Aligning Minds Network (AMN), we{`'`}re not just about coaching and training; we{`'`}re your catalyst for transformation, guiding you from feeling stuck and unfulfilled to ignited and empowered.</p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:w-9/12 w-11/12 mx-auto">
          <div className="h-48 md:h-72 flex justify-center text-white bg-pink max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Personalised Coaching, Deeply Aligned</h3>
                <p className="text-sm">Forget generic programs. Discover coaching designed just for you, aligning your inner purpose with your goals for a life of true fulfillment.</p>    
            </div>
          </div>

          <div className="h-48 md:h-72 flex justify-center text-white bg-purple  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Expert Collaborators, Not Just Coaches</h3>
                <p className="text-sm">Partner with experts who go beyond coaching, offering deep collaboration to help you unlock your fullest potential.</p>    
            </div>
          </div>

          <div className="h-48 md:h-72 flex justify-center text-white bg-pink  max-w-sm overflow-hidden rounded-2xl">
            <div className="px-6 pb-8 mt-auto">
                <h3 className="font-heading text-xl mb-2">Beyond Coaching, a Transformation Ecosystem</h3>
                <p className="text-sm">Enter a holistic transformation ecosystem, where coaching, tools, and community unite to empower your personal and professional growth.</p>    
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
                <p className="text-sm">At our core, we focus on transforming your mindset to unlock potential, overcome barriers, and achieve lasting personal growth.</p>    
            </div>
          </div>
          
        </div>
      </section>

      <section className="grid my-10 sm:grid-cols-1 sm:max-w-2xl md:mx-auto md:max-w-1xl lg:grid-cols-2 gap-8 md:gap-16  lg:max-w-7xl mx-auto px-4 md:px-7 my:12 md:my-24">
        <div className="">
          <div className="hidden md:flex mx-auto lg:w-max lg:mx-auto">
              <Image src="/home/about-amn.png" alt="mission png" quality={100} priority={true} width={500} height={200} className="mx-auto"/>
          </div>
          <div className="md:hidden mx-auto lg:w-max lg:mx-auto">
              <Image src="/home/about-amn-small.png" alt="mission png" quality={100} priority={true} width={500} height={200} className="mx-auto"/>
          </div>
        </div>

        {/* Right side: Text */}
        <div className="lg:h-max lg:mb-auto mx-auto">
          <div className="mb-2">
            <p className="text-xs md:max-w-lg leading-7 mb-3">About Aligning Minds Network</p>
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
          <Link href="about">
            <div className="flex">
                  <p className="text-sm w-max">Read More</p>
                  <div className="my-auto ml-2">
                    <Image src="/home/read-more-arrow.png" alt="Read More Arrow" height={20} width={12}/>  
                  </div>
            </div>
          </Link>
        </div>
      </section>

      <AboutUsScreen/>
      <section className="lg:flex gap-10 lg:w-8/12 mx-4 lg:mx-auto">
        <div className="mb-8 lg:mb-0 lg:w-8/12">
          <div className="relative">
            <Image
              src="/home/schedule-free-consultation.png"
              alt="Schedule Free Consultation Images"
              width={1200}
              height={500}
              priority={true}
              quality={100}
            />
            <div className="hidden md:flex absolute bottom-6 left-6">
              <Link href="/about"><button className="bg-custom-cyan bg-custom-gradient-1 text-white text-lg py-2 w-full font-heading px-3 rounded-md">Schedule your free consultation today</button></Link>
            </div>
          </div>
        </div>
        <div className="my-auto">
          <p className="lg:w-56 leading-8 px-2 md:px-0 text-xs">Join us at Aligning Minds Network, where your journey to achieving excellence is not just a goal – it{`'`}s a transformative experience that reshapes how you perceive, interact with, and conquer your world. Let{`'`}s unlock your extraordinary potential, together. Ready to embark on your journey?</p>
        </div>

        <div className="w-full mx-auto mt-7 md:hidden">
          <Link href="/about"><button className="bg-custom-cyan bg-custom-gradient-1 text-white text-lg py-3 w-full font-heading px-5 border-2 border-white rounded-md">Schedule your free consultation today</button></Link>
        </div>

        {/* <div className="md:hidden flex justify-center items-center md:justify-start md:items-center">
          <Link href="/schedule-free-consultation" passHref>
            Schedule a Free Consultation
          </Link>
        </div> */}

      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <div className="mx-4">
        <FAQAccordion />
      </div>
    </main>
  );
}
