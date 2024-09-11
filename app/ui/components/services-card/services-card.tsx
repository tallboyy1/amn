import Image from "next/image";

interface serviceInterface {
    image: string,
    title: string,
}

const serviceData: serviceInterface[] = [
    {
        image: "/about/services/services-1.png",
        title: "Personalized Coaching, Deeply Aligned"
    },
    {
        image: "/about/services/services-2.png",
        title: "Expert Collaborators, Not Just Coaches"
    },
    {
        image: "/about/services/services-3.png",
        title: "Beyond Coaching, a Transformation Ecosystem"
    },
    {
        image: "/about/services/services-4.png",
        title: "Flexibility Woven into Your Success"
    },
    {
        image: "/about/services/services-5.png",
        title: "Proven Methods, Innovate Approach"
    },
    {
        image: "/about/services/services-6.png",
        title: "Mindset Transformation at the Core"
    },
    {
        image: "/about/services/services-7.png",
        title: "Organizations Thrive, People Flourish"
    },
    {
        image: "/about/services/services-8.png",
        title: "Workshops & Seminars Igniting Learning, Inspiring Action"
    },
    {
        image: "/about/services/services-9.png",
        title: "Speaking Engagements that Resonate"
    },
    {
        image: "/about/services/services-10.png",
        title: "A Diverse Community"
    }

]

export default function ServicesCard(){
    return (
        <>
            <div className="mb-8 flex w-9/12 justify-center mx-auto flex-wrap gap-4">
                {serviceData.map((service, index)=> {
                    return (
                        <div key={index} className="relative w-60 md:w-60 ">
                            <Image
                                src={service.image}
                                alt={"service card"}
                                // layout="responsive"
                                width={300}
                                height={300}
                                priority={true}
                                quality={100}
                                // className="object-cover w-full h-full"
                            />
                            <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                                <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">{service.title}</h2>
                                <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-1.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>

                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-2.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>

                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-3.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>

                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-4.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>

                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-5.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>

                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-6.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>

                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-7.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>


                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-8.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>


                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-9.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div>


                <div className="relative w-60 md:w-60 ">
                    <Image
                        src="/about/services/services-10.png"
                        alt={"service card"}
                        // layout="responsive"
                        width={300}
                        height={300}
                        priority={true}
                        quality={100}
                        // className="object-cover w-full h-full"
                    />
                    <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2 pb-7">
                        <h2 className="text-xl md:text-xl text-wrap font-heading font-medium text-white mb-3">Personalized Coaching, Deeply Aligned</h2>
                        <span className="inline-block mt-4 text-white text-xs font-semibold">Read more</span>
                    </div>
                </div> */}
            </div>
        </>
    )
}