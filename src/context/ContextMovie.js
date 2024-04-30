import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify"; // Assuming you're using toast notifications

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

    // const API_KEY = process.env.REACT_APP_KEY;
  const API_KEY = "1a03f114fafb6cba6699cd42b9f8d71b";
  let urlMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=en&adult=false`;

  const GetDataMovie = async () => {
    try {
      const res = await axios.get(urlMovie);
      setMovies(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      toast.error("Error fetching data:", error);
    }
  };

  const GetDataSearch = async () => {
    try {
      if (search !== "") {
        const res = await axios.get(urlSearch);
        setSearch(res.data.results);
        console.log(res.data.results);
      } else {
        // If no search is in progress, fetch popular movies
        GetDataMovie();
      }
    } catch (error) {
      toast.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    GetDataMovie();
    // GetDataSearch();
  }, [ search ]);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, search, setSearch, GetDataMovie, GetDataSearch }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};

