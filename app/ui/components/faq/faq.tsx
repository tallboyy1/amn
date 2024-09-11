"use client"

import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes Aligning Minds Network's coaching approach unique?",
    answer: "Next.js is a React framework that enables server-side rendering and static site generation.",
  },
  {
    question: "How are the training and development programs at AMN structured?",
    answer: "React creates a virtual DOM, which is a representation of the real DOM. It updates the DOM based on changes in state and props efficiently.",
  },
  {
    question: "Can I expect a personalized experience with AMN services?",
    answer: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.",
  },
  {
    question: "What can I expect from an online coaching session?",
    answer: "CSS is a declarative language that describes how a document should look.",
  },
  {
    question: "How does AMN ensure the effectiveness of its coaching and training programs?",
    answer: "React creates a virtual DOM, which is a representation of the real DOM. It updates the DOM based on changes in state and props efficiently.",
  },
  {
    question: "Who are the coaches and trainers at Aligning Minds Network?",
    answer: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.",
  },
  {
    question: "How does AMN align its services with global and regional initiatives?",
    answer: "CSS is a declarative language that describes how a document should look.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  
  return (
      <div className='my-20'>
        <h2 className='text-center mb-8 text-2xl md:text-xl'>FAQs</h2>
        {/* <div className='bg-pink'> */}
            <div className="w-full bg-purple-opacity max-w-5xl mx-auto mb-20 py-12 space-y-4 rounded-md">
            {faqData.map((faq, index) => {
                return (
                    <div key={index} className="mx-5">
                <button
                    className="w-full mb-5 bg-white rounded-xl text-left py-6 px-6 md:px-6 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                    >
                    <span className="mr-4 md:mr-0 text-sm md:text-sm">{faq.question}</span>
                    <span>{openIndex === index ? 
                    <>
                        <Image 
                            alt='Close Answer'
                            src={"/home/faq-close-arrow.png"}
                            width={15}
                            height={50} 
                            quality={100}
                            priority={true}
                            />
                    </>
                    : 
                    <>
                        <Image 
                            alt='Open Answer'
                            src={"/home/faq-open-arrow.png"}
                            width={15}
                            height={50}
                            quality={100}
                            priority={true}
                            />
                    </>
                    }</span>
                </button>
                {openIndex === index && (
                    <div 
                    className="px-6 pb-4 text-sm text-gray-600"
                    >
                    {faq.answer}
                    </div>
                )}
                </div>
            )})}
        </div>
    </div>
  );
};

export default FAQAccordion;
