import { styled, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: `${theme.spacing(3)} ${theme.spacing(1)} 0`,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
}));
// Card style
export const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  width: `calc(20% - ${theme.spacing(2)})`,
  margin: `${theme.spacing(1)} ${theme.spacing(1)}`,
  height: "200px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const CardWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "15px",
  margin: "10px",
  width: `calc(20% - 40px)`,
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const Image = styled("img")(({ theme }) => ({}));
export const Title = styled(Typography)(() => ({}));
export const Date = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));
export const Content = styled(Typography)(() => ({}));
