import React from "react";
import Link from "next/link";
import Image from "next/image";
import Trailers from "./Trailers";

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
      <div className="w-[min(85%,1200px)] mx-auto pt-16 flex flex-col items-start gap-5 py-4 lg:py-10 z-20">
        <div className="flex flex-col lg:gap-3">
          <h1 className="font-bold text-3xl lg:text-5xl xl:text-7xl">
            {data.name}
          </h1>
          <p className="rating text-lg text-yellow-300">
            {String("★").repeat(data.rating).padEnd("5", "☆")}
          </p>
        </div>
        <p className="text-sm sm:w-[65%] lg:w-[50%] lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus
          fugit illo non laudantium similique? Praesentium eveniet voluptatum
          fuga nesciunt.
        </p>
        <div className="text-sm lg:text-base">
          <p>Genre : {data.genre}</p>
          <p>Duration : {data.duration}</p>
          <p>Ratings : {data.rating}</p>
        </div>
        <Link href="/">Watch now</Link>
        <Trailers />
      </div>
      <div className="img-gradient">
        <Image
          src={data.coverImage}
          alt="cover image"
          layout="fill"
          className="-z-10 object-contain object-right-top bg-gradient-to-right from-black to-white"
        />
      </div>
    </section>
  );
};
export default Hero;
