import CoreValues from "../ui/components/core-values/core-values";
import OurRoleScreen from "../ui/components/our-role-screen/our-role-screen";
import ServicesCard from "../ui/components/services-card/services-card";

export default function Services () {
    return (
        <>
            <main>
                <section className="mt-10">
                    <div className="w-8/12 md:w-5/12 px-4 mx-auto text-center mb-10">
                        <h2 className="font-heading text-3xl mb-5">Discover the AMN Difference: Unleash Your Extraordinary Potential</h2>
                        <p className="mb-4 text-xs leading-6"><span className="font-bold">Do you yearn for a life brimming with purpose, fulfillment, and a sense of limitless possibility?</span> <br /> At Aligning Minds Network (AMN), we{`'`}re not just about coaching and training,; we{`'`}re your catalyst for transformation, guiding you from feeling stuck and unfulfilled to ignited and empowered.</p>
                        <p className="font-medium text-sm">Here{`'`}s how AMN is different</p>
                    </div>

                    <section>
                        <ServicesCard />
                    </section>

                    <OurRoleScreen />
                    <CoreValues />
                </section>
            </main>
        </>
    )
}