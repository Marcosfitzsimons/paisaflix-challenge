import React from "react";
import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";

const getFeaturedData = async () => {
  const res = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies"
  );
  const data = await res.json();
  return data.data;
};

const Featured = async () => {
  const data = await getFeaturedData();

  return (
    <section>
      <div className="w-[min(85%,1200px)] mx-auto">
        <div className="">
          <h2 className="">Featured</h2>
          <p className="">View More</p>
        </div>
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3">
          {data.map((movie) => (
            <div
              key={movie._id}
              className="box relative w-full h-[340px] lg:h-[560px] lg:first:col-start-1 lg:first:col-end-3 after:bg-gradient-to-b after:from-transparent after:to-black after:inset-0 after:absolute after:z-10"
            >
              <div className="relative w-[90%] mx-auto h-full py-4 flex flex-col items-start justify-between z-20">
                <span className="bg-yellow-400 px-2 rounded-full text-black">
                  {movie.genre}
                </span>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-6">
                    <p className="flex items-center gap-1 text-slate-200">
                      <AiOutlineClockCircle /> {movie.duration}
                    </p>
                    <p className="flex items-center gap-1 text-slate-200">
                      <AiOutlineEye className="text-xl" /> {movie.views}
                    </p>
                  </div>
                  <h3 className="text-white font-bold text-xl lg:text-4xl">
                    {movie.name}
                  </h3>
                </div>
              </div>
              <Image
                src={movie.coverImage}
                alt={movie.name}
                fill
                className="lg:object-cover lg:object-center -z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
