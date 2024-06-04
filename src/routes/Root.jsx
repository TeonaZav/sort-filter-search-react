import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { useMoviesContext, useUiContext } from "../context";
import { SearchedMovieItem, MoviesFilterContent } from "../components/movies";
import { UsersFilterContent } from "../components/users";
import { FilterPanel, SortPanel, SearchableList } from "../components/feature";
import { movieCriteriaOptions, userCriteriaOptions } from "../options";

export async function loader() {
  return {};
}

export default function Root() {
  const { movies } = useMoviesContext();
  const { sidebarIsOpen, toggleSidebar } = useUiContext();
  const location = useLocation();

  const isMoviesRoute =
    location.pathname.startsWith("/movies") || location.pathname === "/";

  return (
    <SWrapper className="container ">
      <SSidebar $isOpen={sidebarIsOpen}>
        <SSidebarBtn onClick={toggleSidebar}>
          <SMenuOpenIcon />
        </SSidebarBtn>
        {isMoviesRoute && (
          <SearchableList items={movies} itemKeyFn={(item, index) => index}>
            {(item) => <SearchedMovieItem item={item} />}
          </SearchableList>
        )}

        <FilterPanel>
          {isMoviesRoute ? <MoviesFilterContent /> : <UsersFilterContent />}
        </FilterPanel>
      </SSidebar>
      <SContent>
        {isMoviesRoute ? (
          <SortPanel criteriaOptions={movieCriteriaOptions} />
        ) : (
          <SortPanel criteriaOptions={userCriteriaOptions} />
        )}
        <SMain>
          <Outlet />
        </SMain>
      </SContent>
    </SWrapper>
  );
}

const SWrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const SContent = styled.div`
  position: relative;
  max-height: 100vh;
  width: 100%;

  &&.loading {
    opacity: 0.25;
    transition: opacity 200ms;
    transition-delay: 200ms;
  }
`;

const SMain = styled.main`
  width: 100%;
  height: 95vh;
  overflow-y: auto;
  padding: 2rem 4rem;
`;

const SSidebar = styled.aside`
  width: 35rem;
  height: 100vh;
  background-color: #f7f7f7;
  border-right: solid 1px #e3e3e3;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  flex-direction: column;
  gap: 3.2rem;
  & > * {
    padding: 0 3.2rem;
  }
  position: fixed;
  z-index: 400;
  transition: all 0.5s ease-in-out;
  @media (min-width: 1024px) {
    position: static;
    display: flex;
    transform: none;
  }
`;

const SSidebarBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  margin-top: 2.4rem;
  width: 5rem;
  background-color: transparent;

  @media (min-width: 1024px) {
    position: static;
    display: none;
  }
`;

const SMenuOpenIcon = styled(MenuOpenIcon)`
  font-size: 3.2rem !important;
`;
