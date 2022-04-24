import React from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper, Content } from "../styles";
import NavBar from "./NavBar";
import Loader from "../../utils/Loader";
import { storageKey } from "../../../const";
import { Navigate } from "react-router-dom";
export default function DashBoardLayout() {
  const token = localStorage.getItem(storageKey.token);
  return token ? (
    <ContentWrapper>
      <Loader />
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </ContentWrapper>
  ) : (
    <Navigate to="/user/login" />
  );
}
