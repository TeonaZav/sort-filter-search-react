import styled from "styled-components";

const MovieListItem = ({ movie }) => {
  return (
    <SMovieListItem>
      <SFigure>
        <SThumbnail src={movie.thumbnail} alt={movie.title} loading="lazy" />
      </SFigure>

      <STitle>{movie.title}</STitle>
      <SYear>Release year: {movie.year}</SYear>
      <SGenres>{movie.genres.join(", ")}</SGenres>
    </SMovieListItem>
  );
};

const SMovieListItem = styled.li`
  width: calc((100% - 2.4rem) / 2);
  aspect-ratio: 25/40;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  overflow: hidden;
  @media (min-width: 768px) {
    width: calc((100% - 4.8rem) / 3);
  }

  @media (min-width: 1440px) {
    width: calc((100% - 7.2rem) / 4);
  }
`;

const SFigure = styled.figure`
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

const SThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const STitle = styled.h3`
  font-size: 1.6rem;
  margin: 10px 0;
  text-align: center;
`;

const SYear = styled.p`
  font-size: 1em;
  color: #666;
  margin: 5px 0;
`;

const SGenres = styled.p`
  font-size: 0.9em;
  color: #999;
  margin: 5px 0;
  text-align: center;
`;
export default MovieListItem;
