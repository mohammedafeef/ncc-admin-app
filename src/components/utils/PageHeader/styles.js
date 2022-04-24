import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
export const Wrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "Right",
}));
export const NavLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "white",
}));
export const AddButton = styled(Box)({
  fontSize: "14px",
  fontWeight: "500",
  color: "rgba(250,250,250)",
  background: "rgba(56, 142, 60, 1)",
  textDecoration: "none",
  borderRadius: "8px",
  padding: "5px 15px",
  margin: "0px 15px",
  "&:hover": {
    backgroundColor: "rgba(56, 142, 60, .8)",
  },
});
