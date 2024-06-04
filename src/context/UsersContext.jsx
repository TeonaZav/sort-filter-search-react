import React, { createContext, useState, useEffect, useContext } from "react";
import useUsersFuseFilter from "../hooks/useUsersFuseFilter";
import { useSortContext } from "./SortContext";
import { useFilterContext } from "./FIlterContex";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const { filterTerm, filterAge, filterCities, filterGender, heightRange } =
    useFilterContext();
  const { sortCriterion, sortOrder, sortType } = useSortContext();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("./users.json");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const fuseFiltered = useUsersFuseFilter(
    users,
    filterTerm,
    filterAge,
    filterCities,
    filterGender,
    heightRange,
    sortCriterion,
    sortOrder,
    sortType
  );

  const filtered = fuseFiltered;

  return (
    <UsersContext.Provider value={{ users, filtered }}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsersContext = () => useContext(UsersContext);

export { useUsersContext, UsersProvider };
