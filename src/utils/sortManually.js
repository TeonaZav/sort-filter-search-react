export const sortManually = (items, sortCriterion, sortOrder) => {
    return items.sort((a, b) => {
      if (!sortCriterion) return 0;
      let result;
  
      if (typeof a[sortCriterion] === "string") {
        result = a[sortCriterion].localeCompare(b[sortCriterion]);
      } else {
        result = a[sortCriterion] > b[sortCriterion] ? 1 : -1;
      }
  
      return sortOrder === "asc" ? result : -result;
    });
  };