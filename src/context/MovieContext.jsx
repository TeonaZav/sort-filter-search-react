import React, { createContext, useState, useEffect, useContext } from "react";
import useManualFilter from "../hooks/useManualFilter";
import useMoviesFuseFilter from "../hooks/useMoviesFuseFilter";
import { useSortContext } from "./SortContext";
import { useFilterContext } from "./FIlterContex";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);


  const { sortCriterion, sortOrder, sortType } = useSortContext();
  const { filterTerm, filterGenres, filterYears, filterType } =
    useFilterContext();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("./movies.json");
        const data = await res.json();

        setMovies(data);
      
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);



  const manualFiltered = useManualFilter(
    movies,
    filterTerm,
    filterGenres,
    filterYears,
    sortCriterion,
    sortOrder,
    sortType
  );

  const fuseFiltered = useMoviesFuseFilter(
    movies,
    filterTerm,
    filterGenres,
    filterYears,
    sortCriterion,
    sortOrder,
    sortType
  );

  const filtered = filterType === "manual" ? manualFiltered : fuseFiltered;

  return (
    <MoviesContext.Provider
      value={{
        movies,

        filtered,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMoviesContext = () => useContext(MoviesContext);

export { useMoviesContext, MoviesProvider };
