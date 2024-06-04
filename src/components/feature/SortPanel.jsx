import styled from "styled-components";
import SortIcon from "@mui/icons-material/Sort";
import MenuIcon from "@mui/icons-material/Menu";

import { useSortContext, useUiContext } from "../../context";

import { Navbar } from "../UI";

const SortPanel = ({ criteriaOptions }) => {
  const {
    updateSortCriterion,
    updateSortOrder,
    updateSortType,
    sortCriterion,
    sortOrder,
    sortType,
  } = useSortContext();

  const { toggleSidebar } = useUiContext();

  const orderOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  const typeOptions = [
    { value: "manual", label: "Manual" },
    { value: "lodash", label: "Lodash" },
  ];

  const handleSortCriterion = (e) => {
    const value = e.target.value;
    updateSortCriterion(value);
  };

  const handleSortOrder = (e) => {
    const value = e.target.value;
    updateSortOrder(value);
  };

  const handleSortType = (e) => {
    const value = e.target.value;
    updateSortType(value);
  };

  return (
    <SContentHeader>
      <SSidebarBtn onClick={toggleSidebar}>
        <SMenuIcon />
      </SSidebarBtn>
      <Navbar />
      <SSortContainer>
        <SSelectWrapper>
          <SLabel htmlFor="sortCriterion">
            <SSortIcon />
            Sort by :
          </SLabel>
          <SSelect
            id="sortCriterion"
            onChange={handleSortCriterion}
            value={sortCriterion}
          >
            {criteriaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SSelect>
        </SSelectWrapper>
        <SSelectWrapper>
          <SLabel htmlFor="sortOrder">
            <SSortIcon /> Sort order:
          </SLabel>
          <SSelect id="sortOrder" onChange={handleSortOrder} value={sortOrder}>
            {orderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SSelect>
        </SSelectWrapper>
        <SSelectWrapper>
          <SLabel htmlFor="sortType">
            <SSortIcon /> Sort Type:{" "}
          </SLabel>
          <SSelect id="sortType" onChange={handleSortType} value={sortType}>
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SSelect>
        </SSelectWrapper>
      </SSortContainer>
    </SContentHeader>
  );
};

const SContentHeader = styled.header`
  height: 10%;
  width: 100%;
  top: 0;
  padding: 1.6rem 2.4rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const SSortContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const SSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SSelect = styled.select`
  border: none;
  font-size: 1.2rem;
`;

const SLabel = styled.label`
  font-size: 1.2rem;
  color: #566274;
  display: flex;
`;

const SSidebarBtn = styled.button`
  cursor: pointer;
  z-index: 999;
  @media (min-width: 1024px) {
    position: static;
    visibility: hidden;
  }
`;

const SSortIcon = styled(SortIcon)`
  font-size: 2rem !important;
  color: #566274;
  align-self: flex-start;
`;

const SMenuIcon = styled(MenuIcon)`
  font-size: 3.2rem !important;
`;

export default SortPanel;
