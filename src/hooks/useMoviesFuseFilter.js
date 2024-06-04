import { useMemo } from "react";
import Fuse from "fuse.js";
import _ from "lodash";
import { sortManually } from "../utils/sortManually";

const useMoviesFuseFilter = (
  items,
  filterTerm,
  filterGenres,
  filterYears,
  sortCriterion,
  sortOrder,
  sortType
) => {
  const fuse = useMemo(() => {
    return new Fuse(items, {
      keys: ["title", "genres", "year"],
      threshold: 0.3,
      includeScore: true,
    });
  }, [items]);

  const filteredMovies = useMemo(() => {
    let filtered = filterTerm
      ? fuse.search(filterTerm).map((result) => result.item)
      : items;

  

    filtered = filtered.filter((movie) => {
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

      return genresMatches && yearsMatches;
    });

    return sortType === "manual"
      ? sortManually(filtered, sortCriterion, sortOrder)
      : _.orderBy(filtered, [sortCriterion], [sortOrder]);
  }, [
    items,
    filterTerm,
    filterGenres,
    filterYears,
    sortCriterion,
    sortOrder,
    sortType,
    fuse,
  ]);

  return filteredMovies;
};

export default useMoviesFuseFilter;
