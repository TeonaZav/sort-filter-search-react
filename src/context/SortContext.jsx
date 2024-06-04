import { createContext, useContext, useState } from "react";

const SortContext = createContext();

const SortProvider = ({ children }) => {
  const [sortCriterion, setSortCriterion] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortType, setSortType] = useState("lodash");

  const updateSortCriterion = (value) => setSortCriterion(value);
  const updateSortOrder = (value) => setSortOrder(value);
  const updateSortType = (value) => setSortType(value);

  return (
    <SortContext.Provider
      value={{
        sortCriterion,
        sortOrder,
        sortType,
        updateSortCriterion,
        updateSortOrder,
        updateSortType,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};
const useSortContext = () => useContext(SortContext);

export { useSortContext, SortProvider };
