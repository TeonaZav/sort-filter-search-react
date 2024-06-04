import styled from "styled-components";
import { useMoviesContext } from "../../context";
import MovieListItem from "./MovieListItem";

const MoviesList = () => {
  const { filtered } = useMoviesContext();

  return (
    <SList>
      {filtered.map((movie, index) => (
        <MovieListItem key={`${movie.href}_${index}`} movie={movie} />
      ))}
    </SList>
  );
};

const SList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  padding: 0;
  list-style-type: none;
  margin: 0 auto;
  padding: 2.4rem;
`;
export default MoviesList;
