import React from "react";
import {
  CustomToolbar,
  AppContainer,
  Title,
  NavLink,
  NavButton,
  ButtonWrapper,
} from "../styles";
import { Button } from "@mui/material";
import { useLocation, matchPath, useNavigate } from "react-router-dom";
import { storageKey } from "../../../const";
import NavConfig from "./NavConfig";
export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = (path) =>
    path ? matchPath({ path, end: false }, pathname) : false;
  const logoutHandler = () => {
    localStorage.removeItem(storageKey.token);
    navigate("/user/login");
  };
  return (
    <AppContainer position="fixed">
      <CustomToolbar>
        <NavLink to="/app/home">
          <Title variant="h6">Admin</Title>
        </NavLink>
        <ButtonWrapper>
          {NavConfig.map((nav, index) => (
            <NavLink to={nav.route}>
              <NavButton
                key={index}
                sx={{
                  background: isActive(nav.route)
                    ? "rgba(56, 142, 60, .8)"
                    : "rgba(56, 142, 60, 0)",
                }}
              >
                {nav.label}
              </NavButton>
            </NavLink>
          ))}
          <Button
            color="error"
            variant="contained"
            onClick={logoutHandler}
            size="small"
          >
            Logout
          </Button>
        </ButtonWrapper>
      </CustomToolbar>
    </AppContainer>
  );
}
