import React from "react";
import { useEffect, useState } from "react";
import PageHeader from "../../utils/PageHeader";
import { Wrapper } from "./styles";
import Card from "../../utils/Card";
import * as service from "../../../service";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const getGallery = async () => {
      try {
        const galleryData = await service.getGallery();
        setGallery(galleryData);
      } catch (err) {
        console.error(err.message);
      }
    };
    getGallery();
  }, []);
  return (
    <>
      <PageHeader route="/app/gallery/add/" />
      <Wrapper>
        {gallery &&
          gallery.map((galleryElement) => <Card data={galleryElement} />)}
      </Wrapper>
    </>
  );
};

export default Gallery;
