import { Typography, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: "600",
  color: theme.palette.text.primary,
}));
export const ErrorText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
export const SubmitButton = styled(Button)(({ theme }) => ({
  fontWeight: "600",
  marginTop: theme.spacing(3),
}));
export const HelperText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: "500",
  display: "flex",
}));
export const LinkText = styled(Link)(({ theme }) => ({
  fontWeight: "600",
  color: theme.palette.primary.main,
  cursor: "pointer",
  marginLeft: theme.spacing(1),
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));
