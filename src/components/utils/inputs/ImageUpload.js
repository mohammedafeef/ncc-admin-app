import React from "react";

// Image icon
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// material components
import { Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import docImage from "./doc.png";

const AddImage = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
}));

const ImageWrapper = styled("img")(({ theme }) => ({
  display: "flex",
  width: theme.spacing(20),
  height: theme.spacing(20),
}));

export default function ImageUpload(props) {
  // props destructuring
  const { image, setImage, uploadTxt, isDoc, name } = props;
  const handleImageChange = (e) => setImage(e.target.files[0]);
  return (
    <>
      <input type="file" id={`${name}`} hidden onChange={handleImageChange} />
      <AddImage>
        <label for={`${name}`}>
          <Stack direction="column" spacing={1}>
            {image ? (
              <>
                <ImageWrapper
                  src={isDoc ? docImage : URL.createObjectURL(image)}
                />
                {isDoc && (
                  <Typography variant={"body1"}>{image.name}</Typography>
                )}
              </>
            ) : (
              <>
                <item>
                  <AddAPhotoIcon />
                </item>
                <item>
                  <Typography variant={"body1"}>
                    {uploadTxt || "Upload photo"}
                  </Typography>
                </item>
              </>
            )}
          </Stack>
        </label>
      </AddImage>
    </>
  );
}
