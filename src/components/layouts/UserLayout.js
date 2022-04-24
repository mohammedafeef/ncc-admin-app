import React from "react";
import { Container, ContentWrapper } from "./styles";
import { Outlet } from "react-router-dom";
import Loader from "../utils/Loader";
export default function UserLayout() {
  return (
    <ContentWrapper>
      <Loader />
      <Container>
        <Outlet />
      </Container>
    </ContentWrapper>
  );
}
