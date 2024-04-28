import React from "react";

function MoviesResults({ results }) {
  return (
    <div>
      {results.map((movie) => {
        return (
          <div key={movie.id}>
            <h2>{movie.original_title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesResults;
