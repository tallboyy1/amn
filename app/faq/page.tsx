import AboutUsScreen from "../ui/components/about-us-screen/about-us-screen";
import CoreValues from "../ui/components/core-values/core-values";
import FAQCard from "../ui/components/page-faq/faq-page-card";

export default function FAQ(){
    return (
        <>
            <main>
                <div className="max-w-96 mx-auto text-center">
                    <h2 className="font-heading text-2xl mb-5">Popular Question</h2>
                    <p className="mx-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod enim tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <FAQCard />
                <section>
                    <AboutUsScreen />
                </section>
                <section>
                    <CoreValues />
                </section>
            </main>
        </>
    )
}