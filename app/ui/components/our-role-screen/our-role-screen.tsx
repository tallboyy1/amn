import Image from "next/image";

export default function OurRoleScreen() {
    return (
        <>
            <main className="hidden md:flex relative bg-blue-100 py-10">
                <div 
                    className="relative w-full h-96 bg-cover bg-top" 
                    style={{ 
                        backgroundImage: `url('/about/our-role-screen.png')` 
                    }}
                >
                    <div className="relative flex flex-col justify-end items-center h-full text-center text-white px-4 pb-10">
                        <h2 className="text-4xl md:text-4xl font-heading font-semibold my-2 max-w-lg">Our Role in Global Goals</h2>
                        <p className="text-xs mb-4 max-w-2xl leading-6">Aligned with the UN Sustainable Development Goals, we actively contribute to these global aspirations through our focused coaching strategies and educational initiatives. Embark on a Journey of Change: Discover our coaching and learning programs, connect with our passionate coaches, and join a movement of empowerment and progress. Together, We Ignite a Brighter Future: Join us at Aligning Minds Network, where every step is part of a transformative journey. Together, let{`'`}s kindle a world of possibilities, one transformation at a time.</p>
                    </div>
                </div>
            </main>


            <main className="md:hidden max-w-5xl">
                <div className="w-full">
                    <Image
                        src="/about/our-role-screen.png"
                        alt="Descriptive text"
                        layout="responsive"
                        width={1000}
                        height={600}
                        priority={true}
                        quality={100}
                    />
                    <div className="flex flex-col justify-end items-center h-full text-center text-black px-4 pb-10">
                        <h2 className="text-2xl md:text-3xl font-heading font-semibold my-2 max-w-lg">Our Role in Global Goals</h2>
                        <p className="text-xs mb-4 max-w-2xl leading-6">Aligned with the UN Sustainable Development Goals, we actively contribute to these global aspirations through our focused coaching strategies and educational initiatives. Embark on a Journey of Change: Discover our coaching and learning programs, connect with our passionate coaches, and join a movement of empowerment and progress. Together, We Ignite a Brighter Future: Join us at Aligning Minds Network, where every step is part of a transformative journey. Together, let{`'`}s kindle a world of possibilities, one transformation at a time.</p>
                    </div>
                </div>
            </main>
        </>
    )
}
