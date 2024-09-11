"use client";

export default function CoreValues() {
    return (
        <main className="pt-14 mx-4">
            <h3 className="w-max mx-auto">Core Values</h3>
            {/* <section className="w-max sm:w-10/12 mt-16 mb-20 mx-auto bg-white grid grid-cols-1 lg:grid-cols-5 gap-10"> */}
            <section className="mt-16 mb-20 flex justify-around  flex-wrap gap-10">
                <div className="mb-10 lg:mb-0 text-left w-44">
                    <h1 className="text-2xl h-16 mb-6 text-wrap font-heading leading-6">Integrity & Accountability</h1>
                    <span className="text-black w-max text-xs">Upholding ethical standards in every interaction and taking responsibility for our actions and outcomes.</span>
                </div>

                <div className="mb-10 lg:mb-0 text-left w-44">
                    <h1 className="text-2xl h-16 mb-6 text-wrap font-heading leading-6">Inclusivity & Empowerment</h1>
                    <span className="text-black w-max text-xs">Embracing diversity and creating conditions that enable people to reach their full potential.</span>
                </div>

                <div className="mb-10 lg:mb-0 text-left w-44">
                    <h1 className="text-2xl h-16 mb-6 text-wrap font-heading leading-6">Sustainability</h1>
                    <span className="text-black w-max text-xs">Focused on generating long-term positive impact for individuals, communities, and the environment.</span>
                </div>

                <div className="text-left w-44">
                    <h1 className="text-2xl h-16 mb-6 text-wrap font-heading leading-6">Innovation & Excellence</h1>
                    <span className="text-black w-max text-xs">Committed to cutting-edge methods and delivering the highest quality in all our endeavors.</span>
                </div>

                <div className="text-left w-44">
                    <h1 className="text-2xl h-16 mb-6 text-wrap font-heading leading-6">Collaborative Impact</h1>
                    <span className="text-black text-wrap w-max text-xs">Building partnerships and teamwork to amplify our reach and deepen our societal contribution.</span>
                </div>
            </section>
        </main>
    );
}
