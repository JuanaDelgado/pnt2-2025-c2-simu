export default function MovieDetaills({ movie }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
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
          {/*Punto 2*/}
          <FaTasks className="navIcon"></FaTasks>
          {/*<span className="movie-fallback-text">{movie.title}</span>*/}
        </div>
      )}
      <p className="movie-title">{movie.title}</p>
      {/*Punto 2*/}
      <p className="movie-fullplot">{movie.fullplot}</p>
    </div>
  );
}