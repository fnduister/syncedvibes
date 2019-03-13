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
import Drake from "../../images/jan-strecha-722905-unsplash.jpg";

function Article({ title, views, mediaUrl, type }) {
  return (
    <ArticleContainer backgroundImage={mediaUrl}>
      <Header>
        <Type>{type}</Type>
        <Looks>
          <HeaderText variant="h6" color="secondary">
            {views} looks
          </HeaderText>
        </Looks>
      </Header>
      <Content variant="p"> {title} </Content>
    </ArticleContainer>
  );
}

export default Article;
