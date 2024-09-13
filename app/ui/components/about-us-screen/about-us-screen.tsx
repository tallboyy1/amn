import Image from "next/image";
import Link from "next/link";

export default function AboutUsScreen() {
    return (
        <>
            <main className="hidden md:flex relative bg-blue-100 py-10">
                <div 
                    className="relative w-full h-96 bg-center bg-contain" 
                    style={{ 
                        backgroundImage: `url('/home/about-us-screen.png')` 
                    }}
                >
                    <div className="relative flex flex-col justify-end items-center h-full text-center text-white px-4 pb-6">
                        <p className="text-xs">About Us</p>
                        <h2 className="text-3xl md:text-3xl font-heading font-semibold mt-3 max-w-lg">Aligning Minds Network Pioneers of Transformation</h2>
                        <p className="text-xs mb-3 max-w-lg leading-5">At Aligning Minds Network , we transcend traditional education; we are architects of transformative experiences. Our purpose is to unlock the latent potential within individuals and organisation{`'`}s, sparking a chain of positive change that knows no borders.</p>
                        <Link href="/about"><button className="bg-custom-cyan bg-custom-gradient-1 text-white text-xs py-3 px-12 border-2 border-white rounded-md">Read More</button></Link>
                    </div>
                </div>
            </main>




            <main className="md:hidden max-w-5xl">
                <div className="w-full">
                    <div 
                        className="relative w-full h-96 bg-cover bg-right" 
                        style={{ 
                            backgroundImage: `url('/home/about-us-screen.png')` 
                        }}
                    >
                        <div className="relative flex flex-col justify-end items-center h-full text-center text-white px-4 pb-6">
                            <p className="text-xs">About Us</p>
                            <h2 className="text-3xl md:text-3xl font-heading font-semibold mt-3 max-w-lg">Aligning Minds Network Pioneers of Transformation</h2>
                        </div>
                    </div>
                    <div className="mt-7 flex flex-col justify-end items-center h-full text-center text-black px-4 pb-10">
                        <p className="text-xs mb-3 max-w-lg leading-5">At Aligning Minds Network , we transcend traditional education; we are architects of transformative experiences. Our purpose is to unlock the latent potential within individuals and organisation{`'`}s, sparking a chain of positive change that knows no borders.</p>
                        <Link href="/about"><button className="bg-custom-cyan bg-custom-gradient-1 text-white text-xs py-3 px-12 border-2 border-white rounded-md">Read More</button></Link>
                    </div>
                </div>
            </main>
        </>
    )
}
