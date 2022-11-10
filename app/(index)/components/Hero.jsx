import React from "react";
import Link from "next/link";
import Image from "next/image";
import Trailers from "./Trailers";
import toHoursAndMinutes from "../../utils/toHoursAndMinutes";

const getHeroData = async () => {
  const res = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero"
  );
  const data = await res.json();
  return data.data;
};

const Hero = async () => {
  const data = await getHeroData();

  return (
    <section className="relative z-10">
      <div className="w-[min(85%,1200px)] mx-auto pt-24 pb-16 flex flex-col items-start gap-8 py-4 z-20 lg:py-10 lg:pt-32 lg:pb-32">
        <div className="flex flex-col lg:gap-3">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-7xl">
            {data.name}
          </h1>
          <p className="rating text-lg text-yellow-300 sm:text-xl lg:text-2xl xl:text-3xl">
            {String("★").repeat(data.rating).padEnd("5", "☆")}
          </p>
        </div>
        <p className="text-sm text-gray-300 w-[90%] sm:text-base sm:w-[70%] sm:leading-5 lg:leading-7 lg:w-[40%] lg:text-base lg:pt-4 xl:leading-8 xl:w-[35%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus
          fugit illo non laudantium similique? Praesentium eveniet voluptatum
          fuga nesciunt.
        </p>
        <div className="flex flex-col gap-2 text-sm lg:text-base lg:gap-4 pb-2">
          <p>Genre : {data.genre}</p>
          <p>Duration : {toHoursAndMinutes(data.duration)}</p>
          <p>Ratings : {data.rating}</p>
        </div>
        <Link
          href="/"
          className="bg-yellow-400 text-black w-full text-center font-semibold py-2 px-10 rounded-full md:w-auto lg:py-4 lg:px-20 lg:text-lg xl:px-28 hover:scale-105 transition-transform"
        >
          Watch now
        </Link>
        <Trailers />
      </div>
      <div className="cover-image after:bg-gradient-to-r after:from-black/50 after:to-transparent after:inset-0 after:absolute after:-z-20 lg:absolute lg:w-[42%] lg:inset-y-0 lg:right-0 lg:after:from-black/20">
        <Image
          src={data.coverImage}
          alt="cover image"
          fill
          className="-z-30 object-cover object-center lg:object-top"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};
export default Hero;
