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
        answer: "Our coaching methodology is rooted in a blend of cognitive-behavioral techniques, strength-based approaches, and reflective practices, tailored to each individual's or group's specific goals. We focus on transformative experiences that go beyond standard coaching paradigms, aiming to not just achieve goals but also to foster long-term personal and professional growth",
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
];


interface FAQItem1 {
    question: string;
    answer: string;
    index: number;
  }

const faqData1: FAQItem1[] = [
    {
        index: 5,
        question: "What makes Aligning Minds Network's coaching unique?",
        answer: "Next.js is a React framework that enables server-side rendering and static site generation.",
    },
    {
        index: 6,
        question: "How are the training and development programs at AMN structured?",
        answer: "React creates a virtual DOM, which is a representation of the real DOM. It updates the DOM based on changes in state and props efficiently.",
    },
    {
        index: 7,
        question: "Can I expect a personalized experience with AMN services?",
        answer: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.",
    },
    {
        index: 8,
        question: "What can I expect from an online coaching session?",
        answer: "CSS is a declarative language that describes how a document should look.",
    },
    {
        index: 9,
        question: "How does AMN ensure the effectiveness of its coaching and training programs?",
        answer: "React creates a virtual DOM, which is a representation of the real DOM. It updates the DOM based on changes in state and props efficiently.",
    },
];

const FAQCard: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };
  
  return (
        <div className='my-10 md:my-20'>
            <div className='mx-4 md:w-9/12 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-around md:mx-auto'>
                <div>
                    {faqData.map((faq, index) => {
                        return (
                            <div key={index} className="w-full mb-5">
                            <button
                                className="w-full bg-faq-ash text-white h-28 text-left py-6 px-6 md:px-6 flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                                >
                                <span className="mr-4 md:mr-0 text-lg md:text-lg font-heading">{faq.question}</span>
                                <span>{openIndex === index ? 
                                <>
                                    <Image 
                                        alt='Close Answer'
                                        src={"/faq/faq-close-arrow.png"}
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
                                        src={"/faq/faq-open-arrow.png"}
                                        width={15}
                                        height={50}
                                        quality={100}
                                        priority={true}
                                        />
                                </>
                                }</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-8 pb-4 bg-faq-ash text-sm text-white" >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    )})}
                </div>
                <div>
                    {faqData1.map((faq) => {
                        const index = faq.index
                        return (
                            <div key={index} className="w-full mb-5">
                            <button
                                className="w-full bg-faq-ash text-white h-28 text-left py-6 px-6 md:px-6 flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                                >
                                <span className="mr-4 md:mr-0 text-lg md:text-lg font-heading">{faq.question}</span>
                                <span>{openIndex === index ? 
                                <>
                                    <Image 
                                        alt='Close Answer'
                                        src={"/faq/faq-close-arrow.png"}
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
                                        src={"/faq/faq-open-arrow.png"}
                                        width={15}
                                        height={50}
                                        quality={100}
                                        priority={true}
                                        />
                                </>
                                }</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-8 pb-4 text-sm bg-faq-ash text-white" >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    )})}
                </div>
            </div>
        </div>
  );
};

export default FAQCard;
