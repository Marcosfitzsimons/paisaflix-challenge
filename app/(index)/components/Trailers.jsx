import React from "react";
import Image from "next/image";

const getTrailersData = async () => {
  const res = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers"
  );
  const data = await res.json();
  return data.data;
};

const Trailers = async () => {
  const data = await getTrailersData();
  return (
    <article className="z-20 w-full">
      <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl py-4 lg:py-8">
        Trailers
      </h2>
      <ul className="flex flex-col gap-4 md:flex-row">
        {data.slice(0, 4).map((trailer, index) => (
          <li
            key={trailer._id}
            className="relative w-full h-36 after:bg-gradient-to-b after:from-transparent after:to-black/30 after:inset-0 after:absolute after:z-10"
          >
            <Image
              src={trailer.trailerImage}
              alt="trailer image"
              fill
              className="object-cover"
            />
            <p className="absolute -bottom-[14px] right-3 z-30 text-2xl font-bold">
              0{index + 1}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Trailers;
