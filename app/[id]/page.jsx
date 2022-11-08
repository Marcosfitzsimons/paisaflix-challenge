import React from "react";

const MovieDetails = ({ params }) => {
  const id = params;
  return <div>Esto es la movie {id} </div>;
};

export default MovieDetails;
