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
    <article>
      <h2 className="">Trailers</h2>
      <ul className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        {data.slice(0, 4).map((trailer) => (
          <li key={trailer._id} className="">
            <Image
              src={trailer.trailerImage}
              alt="trailer image"
              width={180}
              height={90}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Trailers;
