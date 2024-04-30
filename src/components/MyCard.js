import "./styleCompo.css";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/ContextMovie";

const MyCard = () => {
  const { movies } = useMovieContext();

  return (
    <div className="bg-zinc-600 h-full w-full">
      <div className="pt-6 px-3 flex flex-wrap justify-center">
        {movies.map((movie, index) => (
          <Link to={`/movie/${movie.id}`} key={index} className="w-full sm:w-1/2 md:w-1/4 p-4 ">
            <div className="bg-gray-800 shadow-2xl rounded-xl hover:opacity-70  ">
              <div className="h-96 overflow-hidden rounded-tl-xl rounded-tr-xl">
                <img
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full h-full object-cover hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h5 className="text-xl font-semibold text-blue-gray-100 mb-2">{movie.original_title}</h5>
                <p className="text-base font-normal text-decoration-none mb-0 text-gray-100">{movie.overview}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyCard;

