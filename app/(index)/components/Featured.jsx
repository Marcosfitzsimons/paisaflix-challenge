import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import toHoursAndMinutes from "../../utils/toHoursAndMinutes";

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
        <div className="flex items-center justify-between py-4 lg:py-8 font-bold">
          <h2 className="text-xl lg:text-2xl xl:text-4xl">Featured</h2>
          <p className="text-yellow-400 lg:text-xl">View More</p>
        </div>
        <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
          {data.map((movie) => (
            <Link
              key={movie._id}
              href={`/${movie._id}`}
              className="lg:first:col-start-1 lg:first:col-end-3"
            >
              <div className="relative w-full h-[340px] lg:h-[560px] after:bg-gradient-to-b after:from-transparent after:to-black after:inset-0 after:absolute after:z-10">
                <div className="relative px-2 h-full py-5 flex flex-col items-start justify-between z-20 lg:px-4">
                  <span className="bg-yellow-400 px-4 py-1 rounded-full text-black">
                    {movie.genre}
                  </span>
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex items-center gap-6">
                      <p className="flex items-center gap-2 text-slate-200">
                        <AiOutlineClockCircle className="text-xl" />{" "}
                        {toHoursAndMinutes(movie.duration)}
                      </p>
                      <p className="flex items-center gap-2 text-slate-200">
                        <AiOutlineEye className="text-2xl" /> {movie.views}
                      </p>
                    </div>
                    <h3 className="text-white font-bold text-2xl lg:text-4xl">
                      {movie.name}
                    </h3>
                  </div>
                </div>
                <Image
                  src={movie.coverImage}
                  alt={movie.name}
                  fill
                  className="lg:object-cover lg:object-center -z-10"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
