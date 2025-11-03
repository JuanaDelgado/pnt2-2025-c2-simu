import React, { useState } from 'react';
import './peliculas.css';
import { TbMovie } from "react-icons/tb";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaStar } from 'react-icons/fa';

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [favorite, setFavorite] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link href={`/peliculas/${movie._id}`}>
    <div className="movie-card">
      {movie.poster && !imageError ? (
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="movie-poster"
          onError={handleImageError}
        />
      ) : (
        
        <div className="movie-fallback">
          <span className="movie-fallback-text">
            <TbMovie />
          </span>
        </div>
      )}
      <p className="movie-title">{movie.title}</p>
      <button onClick={() => setFavorite(!favorite)}>{favorite ? (<FaStar className="favorite-button-favorite"></FaStar>): (<CiStar className="favorite-button"></CiStar>)}</button>
      <p className="movie-fullplot">{movie.fullplot}</p>
    </div>
    </Link>
  );
}