import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Title,
  SubmitButton,
  ErrorText,
} from "../../utils/styles/userGlobalStyle";
import TextInput from "../../utils/inputs/TextInput";
import * as service from "../../../service";
import { storageKey } from "../../../const";
import loadingContext from "../../../context/loadingContext";
export default function Login() {
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const loginHandler = async () => {
    loaderToggler(true);
    try {
      const data = {
        username,
        password,
      };
      const user = await service.login(data);
      localStorage.setItem(storageKey.token, user.token);
      navigate("/app/event/home");
    } catch (err) {
      console.error(err.message);
      setIsError("Invalid email or password");
    }
    loaderToggler(false);
  };
  return (
    <>
      <Title variant="h4">Login</Title>
      <TextInput
        label="Username *"
        name="username"
        type="username"
        value={username}
        error={isError}
        valueSetter={setUsername}
      />
      <TextInput
        label="Password *"
        name="password"
        type="password"
        error={isError}
        value={password}
        valueSetter={setPassword}
      />
      {isError && <ErrorText color="error">{isError}</ErrorText>}
      <SubmitButton
        fullWidth
        variant="contained"
        disabled={!username || !password}
        onClick={loginHandler}
      >
        Login
      </SubmitButton>
    </>
  );
}
