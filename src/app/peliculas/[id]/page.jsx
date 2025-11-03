//3. Creo el [id] para poder dirigirme a una pelicula en especifico
'use client'

import { useState, useEffect } from 'react';
import MovieDetails from "../MovieDetails";
import { useParams } from "next/navigation";

export default function MovieDetailsPage () {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const response = await fetch('https://mflixbackend.azurewebsites.net/api/movies');
        const data = await response.json();
        const foundMovie = data.find((movie) => movie._id === movieId);

        if(foundMovie){
          setMovie(foundMovie);
        }else{
          console.log('Movie no encontrada');
        }
      }catch (error){
        console.log('Error al cargar movie', error);
        setLoading(false);
      }
    };
      fetchMovies();
  }, [params.id]);

  return (
    <div>
      <MovieDetails movie= {movie} />
    </div>
  );
}
