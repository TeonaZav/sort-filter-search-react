import styled from "styled-components";

export const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};

const SSection = styled.section`
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;


