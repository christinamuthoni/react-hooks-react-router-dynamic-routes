import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function MovieShow({movies}) {

    const params = useParams();
     console.log(params);

  return (
    <div>MovieShow
       <h3>{movies[params.movieid].title}</h3>
    </div>
  )
}

export default MovieShow