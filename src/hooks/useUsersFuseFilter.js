import { useMemo } from "react";
import Fuse from "fuse.js";
import _ from "lodash";
import { sortManually } from "../utils/sortManually";

const useUsersFuseFilter = (
  users,
  filterTerm,
  filterAge,
  filterCities,
  filterGender,
  heightRange,
  sortCriterion,
  sortOrder,
  sortType
) => {
  const fuse = useMemo(() => {
    return new Fuse(users, {
      keys: [
        "firstName",
        "lastName",
        "age",
        "address.city",
        "gender",
        "email",
        "phone",
        "username",
        "company.name",
        "university",
      ],
      threshold: 0.3,
    });
  }, [users]);

  const filteredUsers = useMemo(() => {
    let filtered = filterTerm
      ? fuse.search(filterTerm).map((result) => result.item)
      : users;

    filtered = filtered.filter((user) => {
      const ageMatches =
        filterAge === "adult"
          ? user.age >= 18
          : filterAge === "underage"
          ? user.age < 18
          : true;

      const genderMatches =
        filterGender.length > 0
          ? filterGender.includes(user.gender.toLowerCase())
          : true;

      const citiesMatches =
        filterCities.length > 0
          ? filterCities.includes(user.address.city.toLowerCase())
          : true;

      const heightMatches =  heightRange ? 
        user.height >= heightRange[0] && user.height <= heightRange[1] : true;

      return ageMatches && genderMatches && citiesMatches && heightMatches;
    });

    const sortedUsers =
      sortType === "manual"
        ? sortManually(filtered, sortCriterion, sortOrder)
        : _.orderBy(filtered, [sortCriterion], [sortOrder]);

    return sortedUsers;
  }, [
    users,
    filterTerm,
    filterAge,
    filterCities,
    filterGender,
    heightRange,
    sortCriterion,
    sortOrder,
    sortType,
    fuse,
  ]);

  return filteredUsers;
};

export default useUsersFuseFilter;
