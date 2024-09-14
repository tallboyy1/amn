"use client"

import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

const answerFadeUpward = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What makes Aligning Minds Network's coaching approach unique?",
        answer: "Our coaching methodology is rooted in a blend of cognitive-behavioral techniques, strength-based approaches, and reflective practices, tailored to each individual's or group's specific goals. We focus on transformative experiences that go beyond standard coaching paradigms, aiming to not just achieve goals but also to foster long-term personal and professional growth."
    },
    {
        question: "How are the training and development programs at AMN structured?",
        answer: "Our training and development programs are structured to be comprehensive and adaptable. We start with a thorough assessment of your needs, followed by customized modules that cover essential skills and strategies. Each program includes interactive sessions, practical exercises, and ongoing support to ensure sustained progress."
    },
    {
        question: "Can I expect a personalized experience with AMN services?",
        answer: "Absolutely. At AMN, personalization is at the heart of our services. We tailor our coaching and training to fit your unique needs, preferences, and goals. This ensures that every aspect of your experience is relevant and impactful."
    },
    {
        question: "What can I expect from an online coaching session?",
        answer: "In an online coaching session with AMN, you can expect a dynamic and engaging experience. Our sessions include personalized coaching, interactive discussions, and practical exercises designed to address your specific goals. We use various tools and techniques to ensure that you receive valuable insights and actionable steps."
    },
    {
        question: "How does AMN ensure the effectiveness of its coaching and training programs?",
        answer: "We ensure the effectiveness of our programs through a combination of expert coaches, evidence-based methods, and continuous feedback. Our programs are regularly updated based on the latest research and client outcomes, and we measure success through regular assessments and client feedback."
    }
]


interface FAQItem1 {
    question: string;
    answer: string;
    index: number;
  }

  const faqData1: FAQItem1[] = [
    {
        index: 5,
        question: "What types of goals can Aligning Minds Network help with?",
        answer: "Aligning Minds Network helps with a wide range of goals, from personal development and career advancement to leadership and team effectiveness. We work with you to identify your specific goals and provide tailored strategies to achieve them."
    },
    {
        index: 6,
        question: "How long does a typical coaching program last?",
        answer: "The duration of our coaching programs varies based on your needs and goals. Typically, programs range from a few weeks to several months, with flexible scheduling to accommodate your availability and pace."
    },
    {
        index: 7,
        question: "What types of support are available between coaching sessions?",
        answer: "Between coaching sessions, you have access to various forms of support, including email consultations, progress check-ins, and additional resources like worksheets and online tools to help you stay on track."
    },
    {
        index: 8,
        question: "Can AMN assist with team coaching and development?",
        answer: "Yes, AMN offers team coaching and development programs designed to enhance team dynamics, improve collaboration, and align team goals with organizational objectives. Our approach fosters a cohesive and high-performing team environment."
    },
    {
        index: 9,
        question: "How can I measure the success of my coaching experience with AMN?",
        answer: "Success is measured through a combination of self-assessment, feedback from your coach, and progress toward your defined goals. We use regular check-ins and performance metrics to track your development and ensure that you are achieving the outcomes you desire."
    }
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
                                    <motion.div 
                                        initial="hidden"
                                        animate="visible"
                                        variants={answerFadeUpward}
                                        transition={{ duration: 1 }} 
                                        className="px-8 pb-4 bg-faq-ash text-sm text-white" >
                                            {faq.answer}
                                    </motion.div>
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
                                    <motion.div 
                                        initial="hidden"
                                        animate="visible"
                                        variants={answerFadeUpward}
                                        transition={{ duration: 1 }} 
                                        className="px-8 pb-4 text-sm bg-faq-ash text-white" >
                                            {faq.answer}
                                    </motion.div>
                                )}
                            </div>
                        )})}
                    </div>
                </div>
            </div>
    );
};

export default FAQCard;
