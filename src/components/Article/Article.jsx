import React from "react";
import { ArticleContainer, Header, Content, Media, HeaderText, Type, Looks } from "./Styled";
import Drake from "../../images/jan-strecha-722905-unsplash.jpg";

function Article(props) {
  return (
    <ArticleContainer>
      <Header>
        <Type>R</Type>
        <Looks>
        <HeaderText variant="h6" color="secondary">
          750 looks
        </HeaderText>
        </Looks>
      </Header>
      <Content variant="p" > {props.content} </Content>
    </ArticleContainer>
  );
}

export default Article;
