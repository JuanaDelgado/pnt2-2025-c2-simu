//3. Creo un componente Details
'use client';

import "./peliculas.css";

export default function MovieDetails ({movie}) {
    if(!movie){
        return <div>Cargando...</div>
    }
    return (
        <div>
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster-detail"
            />
            <div className="movie-title">{movie.title}</div>
            <div>{movie.fullplot}</div>
        </div>
    )
}