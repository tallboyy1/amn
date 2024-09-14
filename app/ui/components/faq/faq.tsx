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
    answer: "Our coaching approach is unique because we integrate personalized strategies with a focus on mindset transformation and holistic growth. We blend practical tools with deep insights, ensuring that our clients receive tailored guidance that aligns with their individual goals and challenges."
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
  },
  {
    question: "Who are the coaches and trainers at Aligning Minds Network?",
    answer: "Our coaches and trainers are seasoned professionals with diverse backgrounds in leadership, personal development, and various industries. They bring a wealth of experience and expertise, combined with a commitment to helping you achieve your goals."
  },
  {
    question: "How does AMN align its services with global and regional initiatives?",
    answer: "AMN aligns its services with global and regional initiatives by staying informed about key trends and challenges in different markets. We adapt our programs to address local needs while incorporating global best practices, ensuring that our services are relevant and impactful across various contexts."
  }
]


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
                  <div
                    key={index} 
                    className="mx-5"
                  >
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
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={answerFadeUpward}
                        transition={{ duration: 1 }} 
                        className="px-6 pb-4 text-sm text-gray-600"
                      >
                      {faq.answer}
                      </motion.div>
                  )}
                </div>
            )})}
        </div>
    </div>
  );
};

export default FAQAccordion;
