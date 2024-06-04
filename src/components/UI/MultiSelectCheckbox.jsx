import styled from "styled-components";
import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <components.Option {...props}>
      <SCustomCheckbox
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
      />
      <label>{props.label}</label>
    </components.Option>
  );
};

export const MultiSelectWithCheckbox = ({ options, value, onChange, placeholder }) => {
  const handleChange = (selected) => {
    onChange(selected);
  };

  return (
    <SSelectWrapper>
      <Select
        options={options}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option }}
        onChange={handleChange}
        allowSelectAll={true}
        value={value}
        placeholder={placeholder}
      />
    </SSelectWrapper>
  );
};

const SSelectWrapper = styled.div`
  flex: 1;
  height: 4rem;
`;

const SCustomCheckbox = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1rem;
`;


