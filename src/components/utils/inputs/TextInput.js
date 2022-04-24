import React from "react";
import { TextField } from "@mui/material";
export default function TextInput({ valueSetter, ...props }) {
  const onChangeHandler = (event) => valueSetter(event.target.value);
  return (
    <TextField
      variant="outlined"
      fullWidth
      sx={{ mt: 4 }}
      onChange={onChangeHandler}
      {...props}
    />
  );
}
