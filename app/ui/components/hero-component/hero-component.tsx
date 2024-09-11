// import Image from "next/image";

// const ServicesHero = () => {
//   return (
//     <section className="bg-pink">
//         <div className="flex flex-col place-items-center pt-40 pb-20">
//             <Image src="/hero/about.png" alt="hero image" height={500} width={800} className="w-11/12"/>
//             <div className="z-50 bottom-0 left-0">
//             </div>
//         </div>
//     </section>
//   );
// }

// export default ServicesHero;


import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="bg-hero-gradient relative flex justify-center items-center pt-40 md:pt-28 pb-20">
      <div className="relative w-10/12">
        {/* Image */}
        <Image 
          src="/hero/about.png" 
          alt="hero image" 
          height={500} 
          width={800} 
          className="w-full" 
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-5xl font-heading font-bold">About Us</h1>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero

