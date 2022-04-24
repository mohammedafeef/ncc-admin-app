import React from "react";
import { CardWrapper, Title, Date, Content, Image } from "./styles";

export default function CustomCard({ data }) {
  const { date, title, name, description,image } = data;
  return (
      <CardWrapper variant="outlined">
        {image && <Image src={image}/>}
        {name && <Title variant="h6">{name}</Title>}
        {title && <Title variant="h6">{title}</Title>}
        {date && <Date variant="subtitle2">{date}</Date>}
        {description && <Content variant="subtitle1">{description}</Content>}
      </CardWrapper>
  );
}
