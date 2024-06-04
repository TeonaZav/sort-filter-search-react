import styled from "styled-components";

import { useFilterContext } from "../../context";
import { MultiSelectWithCheckbox } from "../UI/MultiSelectCheckbox";
import { RangeSlider } from "../feature";
import { citiesOptions, genderOptions, ageOptions } from "../../options";

const UsersFilterContent = () => {
  const { updateAge, updateCities, updateGender } = useFilterContext();

  const handleCitiesChange = (selected) => {
    updateCities(selected.map((option) => option.value));
  };

  const handleGenderChange = (selected) => {
    const selectedGender = selected.map((option) => option.value);
    updateGender(selectedGender);
  };

  const handleAgeChange = (event) => {
    updateAge(event.target.value);
  };

  return (
    <>
      <MultiSelectWithCheckbox
        options={citiesOptions}
        onChange={handleCitiesChange}
        placeholder="Filter by cities"
      />
      <MultiSelectWithCheckbox
        options={genderOptions}
        onChange={handleGenderChange}
        placeholder="Filter by gender"
      />
      <SSelect onChange={handleAgeChange} defaultValue="">
        <option value="" disabled>
          Filter by age
        </option>
        {ageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SSelect>

      <RangeSlider />
    </>
  );
};

const SSelect = styled.select`
  flex: 1;
  padding-block: 1.2rem;
  border-radius: 0.5rem;
  border: 1px solid #00000035;
  margin-bottom: 4rem;
`;
export default UsersFilterContent;
