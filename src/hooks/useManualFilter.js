import { useMemo } from "react";
import _ from "lodash";
import { sortManually } from "../utils/sortManually";

const useManualFilter = (
  movies,
  filterTerm,
  filterGenres,
  filterYears,
  sortCriterion,
  sortOrder,
  sortType
) => {
  const filteredMovies = useMemo(() => {
    let filtered = movies.filter((movie) => {
      const nameMatches = filterTerm
        ? movie.title.toLowerCase().includes(filterTerm.toLowerCase())
        : true;

      const genresMatches =
        filterGenres.length > 0
          ? filterGenres.some((genre) =>
              movie.genres
                .map((g) => g.toLowerCase())
                .includes(genre.toLowerCase())
            )
          : true;

      const yearsMatches =
        filterYears.length > 0
          ? filterYears.includes(movie.year.toString())
          : true;

      return nameMatches && genresMatches && yearsMatches;
    });

    return sortType === "manual"
      ? sortManually(filtered, sortCriterion, sortOrder)
      : _.orderBy(filtered, [sortCriterion], [sortOrder]);
  }, [
    movies,
    filterTerm,
    filterGenres,
    filterYears,
    sortCriterion,
    sortOrder,
    sortType,
  ]);

  return filteredMovies;
};

export default useManualFilter;
