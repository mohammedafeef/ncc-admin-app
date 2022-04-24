import React, { useState, useContext } from "react";
import { ButtonWrapper } from "./styles";
import { TextField, Button, Grid } from "@mui/material";
import loadingContext from "../../../context/loadingContext";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../utils/inputs/ImageUpload";
import * as service from "../../../service";

export default function AddGallery() {
  const navigate = useNavigate();
  const { loaderToggler } = useContext(loadingContext);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const submitHandler = async () => {
    loaderToggler(true);
    try {
      const data = {
        title,
      };
      const galleryId = await service.addGallery(data);
      await service.uploadGallery(galleryId, file);
      navigate("/app/gallery/home");
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
          md={4}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <ImageUpload image={file} setImage={setFile} name="achievement"/>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={8}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextField
            label="Title"
            name="title"
            value={title}
            fullwidth
            onChange={(e) => setTitle(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>

      <ButtonWrapper>
        <Button
          variant="contained"
          color="success"
          disabled={!file || !title}
          onClick={submitHandler}
          sx={{ mt: 2 }}
        >
          Add
        </Button>
      </ButtonWrapper>
    </>
  );
}
