import Image, { StaticImageData } from "next/image";

interface HeroProps{
    image: StaticImageData;
    title: string;
}

const CustomHero = ({image, title}: HeroProps) => {
    return (
      <section className="bg-hero-gradient relative flex justify-center items-center pt-40 md:pt-28 pb-20">
        <div className="relative w-10/12">
          {/* Image */}
          <Image 
            src={image}
            alt="hero image" 
            height={500} 
            width={800} 
            className="w-full" 
            priority={true}
            quality={100}
          />
  
          {/* Text Overlay */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-5xl font-heading font-bold">{title}</h1>
          </div>
        </div>
      </section>
    );
}

export default CustomHero;