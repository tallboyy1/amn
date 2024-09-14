import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import CoreValues from "@/app/ui/components/core-values/core-values"
import CustomHero from "@/app/ui/components/custom-hero/custom-hero"
import ServicesCard from "@/app/ui/components/services-card/services-card"
import hero from "@/public/hero/services.png"
import Image from 'next/image';
import OurRoleScreen from '@/app/ui/components/our-role-screen/our-role-screen';


interface serviceInterface {
    image: string,
    title: string,
    slug: string,
    description: string;
}

const slugify = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
};

interface Params {
    slug: string;
}

const serviceData = [
    {
        image: "/services/service-1-content.png",
        title: "Personalized Coaching, Deeply Aligned",
        slug: slugify("Personalized Coaching, Deeply Aligned"),
        description: "Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
    },
    {
        image: "/services/service-2-content.png",
        title: "Expert Collaborators, Not Just Coaches",
        slug: slugify("Expert Collaborators, Not Just Coaches"),
        description: "At AMN, we don’t just offer coaching; we collaborate closely with you as expert partners in your journey. Our team brings a wealth of experience and a collaborative spirit to every interaction. We aim to empower you with the insights and strategies needed to achieve your goals, leveraging our collective expertise to drive meaningful change and lasting success."
    },
    {
        image: "/services/service-3-content.png",
        title: "Beyond Coaching, a Transformation Ecosystem",
        slug: slugify("Beyond Coaching, a Transformation Ecosystem"),
        description: "Our approach goes beyond traditional coaching by creating a comprehensive ecosystem designed for transformation. We integrate advanced tools, resources, and ongoing support to ensure that you not only reach your goals but also evolve in all dimensions. This ecosystem fosters an environment where personal and professional growth is continuous and impactful."
    },
    {
        image: "/services/service-4-content.png",
        title: "Flexibility Woven into Your Success",
        slug: slugify("Flexibility Woven into Your Success"),
        description: "We understand that success is not one-size-fits-all, which is why flexibility is integral to our approach. Our programs are designed to adapt to your evolving needs and circumstances, offering customizable solutions that fit your unique path. This flexibility ensures that you can navigate your journey to success on your terms, with support tailored to your specific context."
    },
    {
        image: "/services/service-5-content.png",
        title: "Proven Methods, Innovative Approach",
        slug: slugify("Proven Methods, Innovative Approach"),
        description: "Combining proven methods with innovative techniques, we offer a unique blend of tradition and modernity in our services. Our approach is grounded in established best practices, yet flexible enough to incorporate cutting-edge strategies. This ensures that you benefit from a comprehensive, forward-thinking approach that delivers results in a rapidly changing world."
    },
    {
        image: "/services/service-6-content.png",
        title: "Mindset Transformation at the Core",
        slug: slugify("Mindset Transformation at the Core"),
        description: "At the heart of our coaching is a focus on mindset transformation. We believe that shifting your mindset is key to unlocking your full potential. Through our programs, you'll engage in deep introspection and develop a growth-oriented mindset that drives personal and professional breakthroughs. This core transformation enables you to tackle challenges with renewed vigor and clarity."
    },
    {
        image: "/services/service-7-content.png",
        title: "Organizations Thrive, People Flourish",
        slug: slugify("Organizations Thrive, People Flourish"),
        description: "We recognize that the success of an organization is deeply connected to the growth of its people. Our services are designed to enhance both organizational performance and individual development. By fostering a culture of growth and collaboration, we help organizations thrive while ensuring that each member flourishes and contributes to collective success."
    },
    {
        image: "/services/service-8-content.png",
        title: "Workshops & Seminars Igniting Learning, Inspiring Action",
        slug: slugify("Workshops & Seminars Igniting Learning, Inspiring Action"),
        description: "Our workshops and seminars are crafted to ignite curiosity, inspire action, and foster continuous learning. These dynamic sessions are designed to provide actionable insights and practical skills, encouraging participants to implement what they've learned immediately. Whether you're looking to deepen your knowledge or spark new initiatives, our events are tailored to meet your needs."
    },
    {
        image: "/services/service-9-content.png",
        title: "Speaking Engagements that Resonate",
        slug: slugify("Speaking Engagements that Resonate"),
        description: "Our speaking engagements are designed to resonate deeply with your audience. We deliver impactful presentations that not only inform but also inspire and motivate. Each engagement is tailored to address the specific interests and challenges of your audience, ensuring that the message is both relevant and engaging, leaving a lasting impression."
    },
    {
        image: "/services/service-10-content.png",
        title: "A Diverse Community",
        slug: slugify("A Diverse Community"),
        description: "Joining AMN means becoming part of a vibrant and diverse community. We bring together individuals from various backgrounds and industries, creating a rich network of shared experiences and perspectives. This diverse community provides invaluable support, fosters collaborative opportunities, and enhances your growth journey through a multitude of voices and insights."
    }
];

// const serviceData = [
//     {
//         image: "/services/service-1-content.png",
//         title: "Personalized Coaching, Deeply Aligned",
//         slug: slugify("Personalized Coaching, Deeply Aligned"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-2-content.png",
//         title: "Expert Collaborators, Not Just Coaches",
//         slug: slugify("Expert Collaborators, Not Just Coaches"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-3-content.png",
//         title: "Beyond Coaching, a Transformation Ecosystem",
//         slug: slugify("Beyond Coaching, a Transformation Ecosystem"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-4-content.png",
//         title: "Flexibility Woven into Your Success",
//         slug: slugify("Flexibility Woven into Your Success"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-5-content.png",
//         title: "Proven Methods, Innovate Approach",
//         slug: slugify("Proven Methods, Innovate Approach"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-6-content.png",
//         title: "Mindset Transformation at the Core",
//         slug: slugify("Mindset Transformation at the Core"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-7-content.png",
//         title: "Organizations Thrive, People Flourish",
//         slug: slugify("Organizations Thrive, People Flourish"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-8-content.png",
//         title: "Workshops & Seminars Igniting Learning, Inspiring Action",
//         slug: slugify("Workshops & Seminars Igniting Learning, Inspiring Action"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-9-content.png",
//         title: "Speaking Engagements that Resonate",
//         slug: slugify("Speaking Engagements that Resonate"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     },
//     {
//         image: "/services/service-10-content.png",
//         title: "A Diverse Community",
//         slug: slugify("A Diverse Community"),
//         description: "Personalized Coaching, Deeply Aligned: Forget generic programs. We craft one-on-one and group sessions tailor-made to your unique needs and aspirations. Whether you're a leader seeking to scale your impact, a creative yearning to ignite your passion, or an individual navigating life's complexities, AMN becomes your personal roadmap to success."
//     }
// ]

const getServiceBySlug = (slug: string): serviceInterface | undefined => {
    return serviceData.find((service) => service.slug === slug);
};

export function generateMetadata({ params }: { params: Params }): Metadata {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        return {
            title: 'Service not found',
        };
    }

    return {
        title: service.title,
        description: service.description,
    };
}

const ServicePage = ({ params }: { params: Params }) => {

    const service = getServiceBySlug(params.slug);

    if (!service) {
        // If no service is found, show a 404 page
        notFound();
    }
    return (
        <>
            <main>
                <CustomHero image={hero} title="Services" />
                <section className="mt-10">
                    <div className="w-full px-4 sm:w-8/12 md:w-5/12  mx-auto text-center mb-10">
                        <h2 className="font-heading text-3xl mb-5">Discover the AMN Difference: Unleash Your Extraordinary Potential</h2>
                        <p className="mb-4 text-xs leading-6"><span className="font-bold">Do you yearn for a life brimming with purpose, fulfillment, and a sense of limitless possibility?</span> <br /> At Aligning Minds Network (AMN), we{`'`}re not just about coaching and training,; we{`'`}re your catalyst for transformation, guiding you from feeling stuck and unfulfilled to ignited and empowered.</p>
                        <p className="font-medium text-sm">Here{`'`}s how AMN is different</p>
                    </div>

                    {/* <div>
                    </div> */}
                    <div className="relative md:w-10/12 md:mx-auto">
                        <Image
                            src={service.image}
                            alt="Descriptive text"
                            layout="responsive"
                            width={1000}
                            height={600}
                            priority={true}
                            quality={100}
                        />
                        <div className="absolute mb-3 ml-3 lg:mb-28 lg:ml-16 inset-0 flex flex-col justify-end items-start text-center text-white">
                            <h2 className="text-xl md:text-4xl font-heading font-medium">{service.title}</h2>
                        </div>
                    </div>

                    <div className='md:w-10/12 mx-4 md:mx-auto my-16 md:my-32'>
                        <p className='leading-7'>{service.description}</p>
                    </div>

                    <section className=''>
                        <ServicesCard />
                    </section>

                    <section className='mt-9 lg:hidden'>
                        <OurRoleScreen />
                    </section>

                    <CoreValues />
                </section>
            </main>
        </>
    )
}

export default ServicePage;

export async function generateStaticParams() {
    return serviceData.map((service) => ({
        slug: service.slug,
    }));
}