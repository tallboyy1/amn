import Image, { StaticImageData } from "next/image";

interface HeroProps{
    image: StaticImageData;
    title?: string;
    content?: string;
}

const CustomHero = ({image, title, content}: HeroProps) => {
  return (
      <div className="relative">
        <div className="absolute inset-0" style={{height: "60vh"}}>
          {/* <img
            src={image}
            alt="Hero Image"
            className="object-cover w-full h-96"
          /> */}
          {/* {typeof image === "string" ? (
          <img src={image} alt="Hero Image" className="object-cover w-full h-96" />
        ) : ( */}
          <Image
            src={image}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority={true}
          />
        {/* )} */}
        </div>
        {/* <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r from-black-opacity-10 via-black/1 to-black/0"></div> */}
        <div className=" mx-3 text-center relative flex flex-col justify-center items-center"  style={{height: "60vh"}}>
            <h1 className="text-4xl md:text-4xl lg:text-5xl my-3 text-white font-heading font-semibold">{title}</h1>
            {content && <small className={"text-xs md:text-sm text-white font-light"}>{content}</small>}
        </div>
      </div>
  );
}

export default CustomHero;