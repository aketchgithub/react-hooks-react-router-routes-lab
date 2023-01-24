import React from "react";
import { directors } from "../data";

function Directors() {
  const fetchDirectors = directors.map((director) =>(
    <div key={director.name}>
      {director.name}

    <ul>
      {director.movies.map(movie)(
        <li key={movie.name}>{movie.name}</li>
      )}
    </ul>
    </div>
  ));
  return (<div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {fetchDirectors}
  </div>
  );
}

export default Directors;
