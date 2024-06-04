import { MultiSelectWithCheckbox } from "../UI/MultiSelectCheckbox";
import { useFilterContext } from "../../context";
import { genresOptions, yearsOptions } from "../../options";

const MoviesFilterContent = () => {
  const { updateGenres, updateYears } = useFilterContext();

  const handleGenreChange = (selected) => {
    updateGenres(selected.map((option) => option.value));
  };

  const handleYearChange = (selected) => {
    const selectedYears = selected.map((option) => option.value);
    updateYears(selectedYears);
  };

  return (
    <>
      <MultiSelectWithCheckbox
        options={genresOptions}
        onChange={handleGenreChange}
        placeholder="Filter by genres"
      />
      <MultiSelectWithCheckbox
        options={yearsOptions}
        onChange={handleYearChange}
        placeholder="Filter by years"
      />
    </>
  );
};

export default MoviesFilterContent;
