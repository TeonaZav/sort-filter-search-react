import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { useFilterContext } from "../../context";

const FilterPanel = ({ children }) => {
  const location = useLocation();
  const isMoviesRoute =
    location.pathname.startsWith("/movies") || location.pathname === "/";

  const { updateFilterTerm, updateFilterType } = useFilterContext();

  const handleTextChange = (event) => {
    updateFilterTerm(event.target.value);
  };

  const handleFilterTypeChange = (event) => {
    updateFilterType(event.target.value);
  };

  return (
    <SPanelContainer>
      <SPanelHeader>
        <SFilterButton>
          <SFilterAltIcon />
        </SFilterButton>
        {isMoviesRoute && (
          <SSelect onChange={handleFilterTypeChange}>
            <option value="manual">Manual Filter</option>
            <option value="fuse">Fuse Filter</option>
          </SSelect>
        )}
      </SPanelHeader>

      <SPanel>
        <STextInput
          type="text"
          placeholder="Filter by text"
          onChange={handleTextChange}
        />
        {children}
      </SPanel>
    </SPanelContainer>
  );
};

const SPanelContainer = styled.div`
  padding: 2.4rem;
`;

const SPanel = styled.div`
  gap: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const STextInput = styled.input`
  flex: 1;
  padding-block: 1.2rem;
  border-radius: 0.5rem;
  border: 1px solid #00000035;
`;

const SPanelHeader = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 1rem;
`;

const SFilterButton = styled.button`
  background-color: transparent;

  cursor: pointer;
`;

const SFilterAltIcon = styled(FilterAltIcon)`
  font-size: 3.2rem !important;
  color: #2926267d;
`;

const SSelect = styled.select`
  width: 14rem;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 1rem;
  background: none;
`;
export default FilterPanel;
