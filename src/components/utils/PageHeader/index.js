import React from "react";
import { AddButton, Wrapper,NavLink } from "./styles";

const PageHeader = ({ route }) => {
  return (
    <Wrapper>
      <NavLink to={route}>
        <AddButton>Add</AddButton>
      </NavLink>
    </Wrapper>
  );
};
export default PageHeader;
