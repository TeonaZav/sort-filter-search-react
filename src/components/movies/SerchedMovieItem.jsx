import styled from "styled-components";

const SearchedMovieItem = ({ item }) => {
  return (
    <SMovieArticle>
      <SFigure>
        <img src={item.thumbnail} alt={item.title} />
      </SFigure>

      <STextBox>
        <h3>{item.title}</h3>
        <p>Year: {item.year}</p>
        <p>Genre: {item.genres.join(", ")}</p>
      </STextBox>
    </SMovieArticle>
  );
};

const SMovieArticle = styled.article`
  width: 100%;
  height: 15rem;
  border-block: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

const SFigure = styled.figure`
  width: 20%;

  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const STextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default SearchedMovieItem;
