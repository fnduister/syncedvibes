import React from "react";
import {
  ArticleContainer,
  Header,
  Content,
  Media,
  HeaderText,
  Type,
  Looks
} from "./styled";

function Article({ title, views, mediaUrl, type, thumbnail, id }) {
  const images = require.context("../../images/gifs", true);
  return (
    <ArticleContainer
      to={`/article/${id}`}
      backgroundImage={images(`./${thumbnail}`)}
    >
      <Header>
        <Type>{type}</Type>
      </Header>
      <Content variant="h6"> {title} </Content>
    </ArticleContainer>
  );
}

export default Article;
