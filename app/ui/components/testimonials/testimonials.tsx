"use client";


import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Stephen R.",
      title: "Founder, BBnS",
      text: "Navigating the complexities of today’s business landscape taught me that mastering technical skills is just one part of the equation. Leadership, strategic vision, and fostering team synergy play equally important roles. Aligning Minds Network provided a profound shift in my perspective. They went beyond traditional training, offering a comprehensive approach that transformed how I handle challenges and lead my team. The clarity and tools gained have driven significant improvements in our project outcomes and team dynamics. The impact of this process is visible in every aspect of my work, from innovative solutions to enhanced client relations. It wasn’t just a course—it was a transformative experience that advanced both my personal growth and our organization’s success.",
    },
    {
      name: "Angela R.",
      title: "CTO Stovoo",
      text: "In the fast-paced world of business, I soon realized that technical skills alone weren't enough for true success. Leadership, vision, and team cohesion were essential components I was missing. Discovering Aligning Minds Network’s masterclass was a game-changer. The experience was more than just educational; it fundamentally transformed my approach to leadership and problem-solving. The program provided me with actionable tools and, more crucially, the clarity to apply them effectively. This transformation is evident in every facet of our work, from innovative projects and seamless team collaborations to improved client interactions. It was not just a learning opportunity but a pivotal moment that elevated both my personal development and our company's overall performance.",
    },
    {
      name: "Janice S.",
      title: "CEO Bitcarter",
      text: "Realizing that technical expertise alone wasn't sufficient for achieving true success in today’s competitive environment led me to Aligning Minds Network. The experience was revolutionary. It didn’t just provide knowledge but redefined my approach to leadership and strategic thinking. Aligning Minds Network offered valuable tools and the insight to use them effectively, which has led to noticeable improvements in our team’s collaboration and project outcomes. The influence of AMN has permeated all aspects of our work—from innovative breakthroughs to stronger client relationships. It marked a significant turning point in my personal development and contributed immensely to our company’s growth and success. I will describe the experience as indeed a revolutionary one.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-10 pt-10">
      <h2 className="text-center mb-8 text-2xl md:text-xl">Testimonials</h2>

      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl lg:h-80 bg-pink py-6 px-4 lg:py-12 lg:px-10 text-white lg:mx-auto rounded-3xl mx-4">
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
