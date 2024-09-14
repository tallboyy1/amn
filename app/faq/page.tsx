import AboutUsScreen from "../ui/components/about-us-screen/about-us-screen";
import CoreValues from "../ui/components/core-values/core-values";
import CustomHero from "../ui/components/custom-hero/custom-hero";
import OurRoleScreen from "../ui/components/our-role-screen/our-role-screen";
import FAQCard from "../ui/components/page-faq/faq-page-card";
import hero from "@/public/hero/faq.png"

export default function FAQ(){
    return (
        <>
            <main>
                <CustomHero image={hero} title="FAQs" />
                
                <div className="mt-8 max-w-96 mx-auto text-center">
                    <h2 className="font-heading text-2xl mb-5">Popular Question</h2>
                    <p className="mx-4 text-sm">Explore our comprehensive FAQ section to find clear and concise answers to the most common questions. Reach out to us through the contact page for further inquiries.</p>
                </div>
                <FAQCard />
                <section>
                    <div className="hidden md:block w-screen">
                        <AboutUsScreen />
                    </div>
                    <div className="md:hidden">
                        <OurRoleScreen />
                    </div>
                </section>
                <section>
                    <CoreValues />
                </section>
            </main>
        </>
    )
}