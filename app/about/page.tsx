import Image from "next/image";
import OurRoleScreen from "../ui/components/our-role-screen/our-role-screen";
import CoreValues from "../ui/components/core-values/core-values";
import hero from "@/public/hero/about.png"
import CustomHero from "../ui/components/custom-hero/custom-hero";

export default function About() {
    return (
        <>
            <main>
                <CustomHero image={hero} title="About Us" />

                <section className="grid my-10 sm:grid-cols-1 sm:max-w-2xl md:mx-auto md:max-w-1xl lg:grid-cols-2 gap-16  lg:max-w-7xl mx-auto px-4 md:px-7 my:12 md:my-24">
                    <div className="">
                        <div className="hidden md:flex mx-auto lg:w-max lg:mx-auto">
                            <Image src="/about/about-amn.png" alt="mission png" quality={100} priority={true} width={500} height={200} className="mx-auto"/>
                        </div>
                        <div className="md:hidden mx-auto lg:w-max lg:mx-auto">
                            <Image src="/about/about-amn-small.png" alt="mission png" quality={100} priority={true} width={500} height={200} className="mx-auto"/>
                        </div>
                    </div>
                    <div className="lg:h-max lg:mb-auto">
                        <div
                            className="mb-2"
                            >
                            <p className="text-sm md:mx-auto md:max-w-lg leading-7 mb-6">About Aligning Minds Network</p>
                            <h2 className="text-4xl md:mx-auto md:max-w-lg font-heading mb-2">Aligning Minds Network - Pioneers of Transformation</h2>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">At Aligning Minds Network , we transcend traditional education; we are architects of transformative experiences. Our purpose is to unlock the latent potential within individuals and organizations, sparking a chain of positive change that knows no borders.</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <h2 className="text-2xl md:mx-auto md:max-w-lg font-heading mb-2">Envisioning a Transformed World</h2>
                                <ul className="">
                                    <li>
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Leaders, endowed with vision and coached to navigate tomorrow{`'`}s challenges.</p>
                                    </li>
                                    <li>
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Individuals, transformed through our coaching, brimming with confidence and innovation.</p>
                                    </li>
                                    <li>
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Organizations, flourishing in a culture where diversity drives breakthroughs and collective success.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <h2 className="text-2xl md:mx-auto md:max-w-lg font-heading mb-2">Our Methodology</h2>
                                <ul className="">
                                    <li className="">
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Tailored Coaching: Our coaching is a catalyst for personal and professional metamorphosis, custom-designed to resonate with each individual{`'`}s unique journey and objectives.</p>
                                    </li>
                                    <li>
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Individuals, transformed through our coaching, brimming with confidence and innovation.</p>
                                    </li>
                                    <li>
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Organizations, flourishing in a culture where diversity drives breakthroughs and collective success.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div>
                                <h2 className="text-2xl md:mx-auto md:max-w-lg font-heading mb-2">Our Commitment to Global Change</h2>
                                <ul className="">
                                    <li className="">
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Elevating leaders through transformational coaching</p>
                                    </li>
                                    <li>
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Fostering environmental stewardship with leadership programs that inspire sustainable action.</p>
                                    </li>
                                    <li>
                                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">• Bridging the educational-opportunity gap with skills for the 21st century.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden mx-auto lg:w-max lg:mx-auto">
                        <Image src="/about/about-amn-small-2.png" alt="mission png" quality={100} priority={true} width={500} height={200} className="mx-auto"/>
                    </div>
                </section>

                <OurRoleScreen/>

                <section className="flex flex-col-reverse md:grid mt-10 mb-12 md:mb-40 sm:grid-cols-1 sm:max-w-2xl md:mx-auto md:max-w-1xl lg:grid-cols-2 gap-4  lg:max-w-7xl mx-auto px-4 md:px-10 my:12 md:my-24">
                    <div className="lg:h-max lg:mb-auto">
                        <div
                            className="mb-2"
                            >
                            <p className="text-s mmd:mx-auto md:max-w-lg leading-7 mb-6">Who we are</p>
                            <h2 className="text-4xl md:mx-auto md:max-w-lg font-heading mb-2">Pioneers of Transformation</h2>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">At Aligning Minds Network,  we redefine the essence of learning and development. We{`'`}re not just educators; we are catalysts for meaningful change. Our realm of expertise spans a wide spectrum, each service intricately designed to spark profound personal and organizational transformation.</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">At the core of our philosophy is a commitment to personalized coaching. We believe in unlocking individual potential, nurturing growth that is as unique as the clients we serve. Our training programs are more than just educational experiences; they are empowering journeys that equip professionals and organizations with tools for success. Our consulting services are tailored to meet the unique challenges of various industries, driving efficiency and fostering innovation. Our team of speakers and facilitators specialize in transforming concepts into action, offering workshops and seminars that resonate and inspire.</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">Whether in a one-on-one coaching session or a corporate workshop, our focus is unwavering: to transform lives by enriching minds. We are dedicated to crafting a world where education is the cornerstone of societal progress, where every individual has the opportunity to excel in an ever-changing global landscape.</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">Join us in this journey of transformation at Aligning Minds Network, where we transcend conventional boundaries to achieve global advancement.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-full md:max-w-lg md:mx-auto lg:w-max lg:mx-auto">
                            <Image src="/about/about-pioneer.png" alt="mission png" quality={100} priority={true} width={500} height={200} className=""/>
                        </div>
                    </div>
                </section>


                <section className="md:grid sm:max-w-2xl md:mx-auto md:max-w-1xl lg:grid-cols-2 gap-4  lg:max-w-7xl mx-auto px-4 md:px-10 my:12 md:my-24">
                    <div>
                        <div className="md:max-w-md md:mx-auto lg:w-max lg:mx-auto">
                            <Image src="/about/our-mission.png" alt="mission png" quality={100} priority={true} width={500} height={200} className=""/>
                        </div>
                    </div>
                    <div className="lg:h-max lg:mb-auto">
                        <div
                            className="mb-2"
                            >
                            <p className="text-sm md:mx-auto md:max-w-lg leading-7 my-6">Our Mission</p>
                            <h2 className="text-4xl md:mx-auto md:max-w-lg font-heading mb-2">Shift, Transform, Impact: Empowering Transformation, Inspiring Lives </h2>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">At Aligning Minds Network, we redefine the boundaries of coaching and learning. Our core mission is to transform lives and boost organizational performance through personalized coaching and innovative learning experiences. Our specialized learning  and development programs are designed not just to educate but to unlock untapped potential, fostering personal and professional excellence. We focus on enhancing self-awareness, building professional skills, and driving organizational success. Committed to sustainable growth, our services — from individual and group coaching sessions to dynamic corporate workshops — are aligned with global initiatives for a brighter future.</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">Join us on this journey of transformation. Together, let{`'`}s shape a world where the mind{`'`}s development opens doors to limitless possibilities.</p>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="flex flex-col-reverse md:grid mt-12 md:mt-40 sm:grid-cols-1 sm:max-w-2xl md:mx-auto md:max-w-1xl lg:grid-cols-2 gap-4  lg:max-w-7xl mx-auto px-4 md:px-10 my:12 md:my-24">
                    <div className="lg:h-max lg:mb-auto">
                        <div
                            className="mb-2"
                            >
                            <p className="text-sm md:mx-auto md:max-w-lg leading-7 mb-6">Our Vission</p>
                            <h2 className="text-4xl md:mx-auto md:max-w-lg font-heading mb-2">Global Pioneers in Transformative Coaching and Development</h2>
                        </div>
                        <div className="mb-6">
                            <div>
                                <p className="text-xs md:mx-auto md:max-w-lg leading-7">Our vision at Aligning Minds Network is to lead globally in coaching, learning, and development, breaking new ground in educational empowerment and equality. We envision a world where access to transformative coaching and development tools enables every individual and organization to reach their full potential, transcending barriers of geography and socio-economic status. At the core of our vision is a commitment to fostering resilience, growth, and excellence through innovative coaching methods and partnerships. We aim to shape a future rich with opportunities and equality, empowering a diverse range of minds to contribute to a more inclusive and thriving global community.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="md:max-w-lg md:mx-auto lg:w-max lg:mx-auto">
                            <Image src="/about/our-vission.png" alt="mission png" quality={100} priority={true} width={500} height={200} className=""/>
                        </div>
                    </div>
                </section>

                <CoreValues />
            </main>
        </>
    )
}