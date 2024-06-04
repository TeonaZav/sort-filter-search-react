import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Fuse from "fuse.js";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const lastChange = useRef();

  useEffect(() => {
    if (searchValue) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchValue]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchValue(value);
    }, 500); // debouncing
  };

  const handleItemClick = (item) => {
    setSearchValue(item.title);
    setIsOpen(false);
  };

  let exactMatches = [];
  let suggestions = [];


    const fuse = new Fuse(items, {
      keys: ["title"],
      includeScore: true,
      threshold: 0.3,
      distance: 100,
      minMatchCharLength: 3,
      shouldSort: true,
    });
    const results = fuse.search(searchValue);
    exactMatches = results
      .filter((result) => result.score < 0.2)
      .map((el) => el.item);

    suggestions = results
      .filter((result) => result.score >= 0.2)
      .map((el) => el.item);


  return (
    <SSearchableDropdownContainer>
      <SSearchForm type="search" role="search">
        <input
          aria-label="Search movies"
          placeholder="Search"
          type="search"
          onChange={handleChange}
        />
        <SSpinner aria-hidden hidden={true} />
      </SSearchForm>

      {isOpen && (
        <>
          <SDropdownList $isOpen={isOpen}>
            {exactMatches.length === 0 && suggestions.length === 0 && (
              <SDropdownListItem>
                <SNotFound>No results found</SNotFound>
              </SDropdownListItem>
            )}

            {exactMatches.map((item, index) => (
              <SDropdownListItem
                key={itemKeyFn(item, index)}
                onClick={() => handleItemClick(item)}
              >
                {children(item)}
              </SDropdownListItem>
            ))}
            {suggestions.length > 0 && (
              <>
                <SSuggestionHeader>Maybe you mean:</SSuggestionHeader>

                {suggestions.map((item, index) => (
                  <SDropdownListItem
                    key={itemKeyFn(item, index)}
                    onClick={() => handleItemClick(item)}
                    $isSuggestion={true}
                  >
                    {children(item)}
                  </SDropdownListItem>
                ))}
              </>
            )}
          </SDropdownList>
        </>
      )}
    </SSearchableDropdownContainer>
  );
};

const SSearchableDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SDropdownList = styled.ul`
  list-style-type: none;
  width: 100%;
  position: absolute;
  width: 100%;
  min-height: 15rem;
  max-height: 50rem;
  padding: 1.6rem;
  overflow-y: auto;
  border-radius: 1rem;
  margin-top: 0.5rem;

  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const SSuggestionHeader = styled.div`
  padding: 8px;
  font-weight: bold;
  border-top: 1px solid #ccc;
  border-radius: 4px 4px 0 0;
`;

const SDropdownListItem = styled.li`
  background-color: ${(props) => (props.$isSuggestion ? "#f7f29c" : "#f9f9f9")};
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SNotFound = styled.span`
  font-size: 1.6rem;
  color: red;
`;

const SSearchForm = styled.form`
  padding-block: 1.6rem;
  position: relative;
  border-bottom: 1px solid #e3e3e3;

  & input[type="search"] {
    width: 100%;
    padding: 1.4rem;
    padding-left: 3.2rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 1rem 1.2rem;
    background-size: 2rem;
    position: relative;

    &&.loading {
      background-image: none;
    }
  }
`;

const SSpinner = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9' /%3E%3C/svg%3E");
  animation: spin 1s infinite linear;
  position: absolute;
  left: 1rem;
  top: 0.5rem;
`;

export default SearchableList;
