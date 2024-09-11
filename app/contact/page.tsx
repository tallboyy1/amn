"use client";
import styles from "@/app/ui/styles/contact.module.css"
import Image from "next/image";
import { useState } from "react";
import CustomHero from "../ui/components/custom-hero/custom-hero";
import hero from "@/public/hero/contact.png"

export default function Contact () {


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <>
            <main>
                <CustomHero image={hero} title="Contact Us" />
                <div className="md:flex flex-none md:flex-1 mx-4 md:mx-32 my-8 md:my-20">
                    <div className="flex-1"></div>
                    <div className="flex-1">
                        <p>Contact Us</p>
                        <h2 className="font-heading text-3xl">Let’s Get In Touch</h2>
                    </div>
                </div>
                <div className="md:flex flex-none md:flex-1 mx-4 md:mx-32 my-8 md:my-32">
                    <section className="flex-1">
                    {/* <form onSubmit={handleSubmit} className={styles.contactForm}> */}
                        <form className={styles.contactForm}>
                            {/* Name input */}
                            <div className="mb-8">
                                <input
                                className={`${styles.input} py-5 px-5 text-xs w-full`}
                                type="text"
                                name="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                placeholder="Your Name *"
                                required
                                />
                            </div>
                            {/* Email and Phone inputs */}
                            <div className="flex md:gap-5 lg:gap-5 flex-wrap">
                                <div className="w-full md:flex-1 lg:flex-1 mb-8">
                                <input
                                    className={`${styles.input} py-5 px-5 text-xs w-full`}
                                    type="email"
                                    name="email"
                                //   value={formData.email}
                                //   onChange={handleChange}
                                    placeholder="Your Email"
                                />
                                </div>
                                <div className="w-full md:flex-1 lg:flex-1 mb-8">
                                <input
                                    className={`${styles.input} py-5 px-5 text-xs w-full`}
                                    type="phone"
                                    name="phone"
                                //   value={formData.phone}
                                //   onChange={handleChange}
                                    placeholder="Your Phone *"
                                    required
                                />
                                </div>
                            </div>
                            <div className="mb-8">
                                <input
                                className={`${styles.input} py-5 px-5 text-xs w-full`}
                                type="text"
                                name="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                placeholder="Your Subject"
                                required
                                />
                            </div>
                            {/* Message input */}
                            <div className="mb-8">
                                <textarea
                                rows={10}
                                className={`${styles.input} py-5 px-5 text-xs w-full`}
                                name="message"
                                // value={formData.message}
                                // onChange={handleChange}
                                placeholder="Your Message *"
                                required
                                ></textarea>
                            </div>
                            {/* Submit button */}
                            <button
                                type="submit"
                                className="w-full md:w-max px-8 py-3 bg-faq-ash font-heading text-white text-lg mt-6"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Message"}
                            </button>
                            {isSubmitted && <p className="mt-4 rounded-lg bg-green text-sm text-white py-4 px-8">Message sent successfully! We will revert momentarily.</p>}
                        </form>
                    </section>
                    <section className="flex-1 mx-12">
                        <div className="flex mb-8">
                            <Image src="/contact/phone.png" alt="phone image" height={50} width={70} priority={true} quality={100}/>
                            <div className="ml-8 my-auto">
                                <p className="font-heading mb-2 text-2xl">Calling Support</p>
                                <span><a href="tel:+12679947800">(267) 994-7800</a></span>
                            </div>
                        </div>
                        <div className="flex mb-8">
                            <Image src="/contact/email.png" alt="phone image" height={50} width={70} priority={true} quality={100}/>
                            <div className="ml-8 my-auto">
                                <p className="font-heading mb-2 text-2xl">Email Information</p>
                                <span><a href="mailto:+info@aligningmindsnetwork.com">info@aligningmindsnetwork.com</a></span>
                            </div>
                        </div>
                        <div className="flex mb-8">
                            <div>
                                <Image src="/contact/address.png" alt="phone image" height={50} width={70} priority={true} quality={100}/>
                            </div>
                            <div className="ml-8 my-auto">
                                <p className="font-heading mb-2 text-2xl">Address</p>
                                <span>701 Cathedral Road <br />Suite 45- 1539 <br /> Philadelphia</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <iframe className="w-screen mb-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1932861417636!2d-75.60947112397963!3d39.75776849548223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fdc30dbfffff%3A0xebeb51b6df203be!2s1013%20Centre%20Rd%20Suite%20403S%2C%20Wilmington%2C%20DE%2019805%2C%20USA!5e0!3m2!1sen!2sgh!4v1724623499567!5m2!1sen!2sgh" width="800" height="600" style={{border:"0"}} loading="lazy"></iframe>
                </div>
            </main>
        </>
    )
}