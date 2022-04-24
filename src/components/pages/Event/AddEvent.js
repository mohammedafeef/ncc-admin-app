import React, { useState, useContext } from "react";
import { ButtonWrapper } from "./styles";
import { TextField, Button, Grid } from "@mui/material";
import loadingContext from "../../../context/loadingContext";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../utils/inputs/ImageUpload";
import * as service from "../../../service";

export default function AddEvent() {
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [doc, setDoc] = useState(null);
  const submitHandler = async () => {
    loaderToggler(true);
    try {
      const data = {
        name,
        date,
        description,
      };
      const eventId = await service.addEvent(data);
      await service.uploadEvent(eventId, file);
      await service.uploadEventDoc(eventId, doc);
      navigate("/app/event/home");
    } catch (err) {
      console.log(err.message);
    }
    loaderToggler(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={12}
          md={6}
          sx={{ justifyContent: "center", alignItems: "center", mb: 5 }}
        >
          <ImageUpload image={file} setImage={setFile} name="event" />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          sx={{ justifyContent: "center", alignItems: "center", mb: 5 }}
        >
          <ImageUpload
            image={doc}
            setImage={setDoc}
            uploadTxt="Upload doc"
            isDoc={true}
            name="eventDoc"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={12}
          md={8}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            label="Enter Name"
            name="name"
            value={name}
            fullwidth
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            label="Enter Date"
            name="date"
            value={date}
            fullwidth
            onChange={(e) => setDate(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            label="Enter Description"
            name="description"
            value={description}
            fullwidth
            rows={5}
            multiline
            onChange={(e) => setDescription(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>

      <ButtonWrapper>
        <Button
          variant="contained"
          color="success"
          disabled={!file || !name}
          onClick={submitHandler}
          sx={{ mt: 2 }}
        >
          Add
        </Button>
      </ButtonWrapper>
    </>
  );
}
