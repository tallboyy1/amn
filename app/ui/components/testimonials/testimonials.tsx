"use client";



// export default function Testimonial () {
//     return (
//         <>
//             <section className="mt-20">
//                 <h2 className='text-center mb-8 text-2xl md:text-xl'>Testimonials</h2>

//                 <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl lg:h-96 bg-pink py-6 px-4 lg:py-16 lg:px-10 text-white lg:mx-auto rounded-3xl mx-4">
//                     <div className="flex flex-col-reverse lg:flex-row gap-12">
//                         <div className="flex flex-col">
//                             <div className="basis-1/4 my-auto lg:mx-auto mb-6 lg:mb-20">
//                                 <h2 className="text-2xl lg:text-3xl w-max font-heading">Allamano S.</h2>
//                                 <p className="text-xs lg:text-sm w-max">CEO Bitcarter</p>
//                             </div>
//                             <div className="flex w-max mx-auto lg:mx-0">
//                                 <div className="w-3 h-3 mr-2 rounded-full border-2 border-white bg-white"></div>
//                                 <div className="w-3 h-3 mr-2 rounded-full border-2 border-white"></div>
//                                 <div className="w-3 h-3 rounded-full border-2 border-white"></div>
//                             </div>
//                         </div>
//                         <div className="basis-3/4">
//                             <p className="text-xs leading-7">In the fast-evolving fintech sector, I quickly realized that technical prowess alone wasn't the key to real success. Leadership acumen, visionary thinking, and fostering team synergy were vital pieces of the puzzle. This understanding led me to Aligning Minds Network's masterclass, and the experience has been nothing short of revolutionary. The program went far beyond just imparting knowledge; it transformed the way I perceive and approach challenges. Aligning Minds Network equipped me with tools and, more importantly, the clarity and purpose to use them effectively. The influence of this masterclass is now evident in every aspect of our work — from groundbreaking innovations and cohesive team collaborations to enhanced customer engagements. It wasn't just a learning journey; it was a pivotal point that propelled both my personal growth and our company's success to new heights.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }



import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Allamano S.",
      title: "CEO Bitcarter",
      text: "In the fast-evolving fintech sector, I quickly realized that technical prowess alone wasn't the key to real success. Leadership acumen, visionary thinking, and fostering team synergy were vital pieces of the puzzle. This understanding led me to Aligning Minds Network's masterclass, and the experience has been nothing short of revolutionary. The program went far beyond just imparting knowledge; it transformed the way I perceive and approach challenges. Aligning Minds Network equipped me with tools and, more importantly, the clarity and purpose to use them effectively. The influence of this masterclass is now evident in every aspect of our work — from groundbreaking innovations and cohesive team collaborations to enhanced customer engagements. It wasn't just a learning journey; it was a pivotal point that propelled both my personal growth and our company's success to new heights.",
    },
    {
      name: "Jane D.",
      title: "Founder, TechWomen",
      text: "The program transformed the way I perceive and approach challenges. Aligning Minds Network equipped me with tools and clarity that I never knew I needed and fostering team synergy were vital pieces of the puzzle. This understanding led me to Aligning Minds Network's masterclass, and the experience has been nothing short of revolutionary. The program went far beyond just imparting knowledge; it transformed the way I perceive and approach challenges. Aligning Minds Network equipped me with tools and, more importantly, the clarity and purpose to use them effectively. The influence of this masterclass is now evident in every aspect of our work — from groundbreaking innovations and cohesive team collaborations to enhanced customer engagements. It wasn't just a learning journey; it was a pivotal point that propelled both my personal growth and our company's success to new heights.",
    },
    {
      name: "John R.",
      title: "CTO InnovatorsHub",
      text: "The influence of this masterclass is now evident in every aspect of our work — from groundbreaking innovations to enhanced customer engagements. and fostering team synergy were vital pieces of the puzzle. This understanding led me to Aligning Minds Network's masterclass, and the experience has been nothing short of revolutionary. The program went far beyond just imparting knowledge; it transformed the way I perceive and approach challenges. Aligning Minds Network equipped me with tools and, more importantly, the clarity and purpose to use them effectively. The influence of this masterclass is now evident in every aspect of our work — from groundbreaking innovations and cohesive team collaborations to enhanced customer engagements. It wasn't just a learning journey; it was a pivotal point that propelled both my personal growth and our company's success to new heights.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-20">
      <h2 className="text-center mb-8 text-2xl md:text-xl">Testimonials</h2>

      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl lg:h-96 bg-pink py-6 px-4 lg:py-16 lg:px-10 text-white lg:mx-auto rounded-3xl mx-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          <div className="flex flex-col">
            <div className="basis-1/4 my-auto lg:mx-auto mb-6 lg:mb-20">
              <h2 className="text-2xl lg:text-3xl w-max font-heading">{testimonials[currentIndex].name}</h2>
              <p className="text-xs lg:text-sm w-max">{testimonials[currentIndex].title}</p>
            </div>
            <div className="flex w-max mx-auto lg:mx-0">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 mr-2 rounded-full border-2 border-white cursor-pointer ${
                    index === currentIndex ? "bg-white" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="basis-3/4">
            <p className="text-xs leading-7">{testimonials[currentIndex].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
