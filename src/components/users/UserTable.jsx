import styled from "styled-components";
import { useUsersContext } from "../../context";

const UsersTable = () => {
  const { filtered } = useUsersContext();

  const fields = [
    "ID",
    "Height",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Age",
    "Gender",
    "Username",
    "Role",
    "Company",
    " City",
  ];

  return (
    <STableContainer>
      <STable>
        <thead>
          <STr>
            {fields.map((field, index) => (
              <STh key={index}>{field}</STh>
            ))}
          </STr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <STr key={user.id}>
              <STd>{user.id}</STd>
              <STd>{user.height}</STd>
              <STd>{user.firstName}</STd>
              <STd>{user.lastName}</STd>
              <STd>{user.email}</STd>
              <STd>{user.phone}</STd>
              <STd>{user.age}</STd>
              <STd>{user.gender}</STd>
              <STd>{user.username}</STd>
              <STd>{user.role}</STd>
              <STd>{user.company.name}</STd>
              <STd>{user.address.city}</STd>
            </STr>
          ))}
        </tbody>
      </STable>
    </STableContainer>
  );
};

const STableContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
`;

const STable = styled.table`
  width: 100%;
  border-collapse: collapse;

  font-size: 1em;
  font-family: "SF Pro Text", sans-serif;
`;

const STr = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const STh = styled.th`
  padding: 1.2rem 1.5rem;
  background-color: #407268;
  color: #ffffff;
  text-align: left;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const STd = styled.td`
  padding: 1.2rem 1.5rem;
`;

export default UsersTable;
