import { styled } from "@mui/material";
export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: `${theme.spacing(3)} ${theme.spacing(1)} 0`,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
}));
export const ButtonWrapper = styled("div")(() => ({
    display: "flex",
    justifyContent: "flex-end",
  }));
