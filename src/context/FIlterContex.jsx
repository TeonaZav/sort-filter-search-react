import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [filterGenres, setFilterGenres] = useState([]);
  const [filterYears, setFilterYears] = useState([]);
  const [filterAge, setFilterAge] = useState("");
  const [filterGender, setFilterGender] = useState([]);
  const [filterCities, setFilterCities] = useState([]);
  const [filterType, setFilterType] = useState("manual");
  const [heightRange, setHeightRange] = useState();

  const updateFilterTerm = (term) => setFilterTerm(term.toLowerCase());
  const updateGenres = (selectedGenres) => setFilterGenres(selectedGenres);
  const updateYears = (selectedYears) => setFilterYears(selectedYears);
  const updateAge = (selectedAge) => setFilterAge(selectedAge);
  const updateGender = (selectedGender) => setFilterGender(selectedGender);
  const updateCities = (selectedCities) => setFilterCities(selectedCities);
  const updateFilterType = (type) => setFilterType(type);
  const updateHeightRange = (range) => setHeightRange(range);

  return (
    <FilterContext.Provider
      value={{
        filterTerm,
        filterGenres,
        filterYears,
        filterAge,
        filterGender,
        filterType,
        filterCities,
        heightRange,
        updateFilterTerm,
        updateGenres,
        updateYears,
        updateAge,
        updateCities,
        updateGender,
        updateFilterType,
        updateHeightRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterProvider, useFilterContext };
