import React from "react";
import { ArticleContainer, Header, Content, Type, Video } from "./styled";

function Article({ title, views, mediaUrl, type, thumbnail, id }) {
  // const  ghify=()=>{
     
  // };
  const images = require.context("../../images/mp4s", true);
  return (
    // <ArticleContainer
    //   to={`/article/${id}`}
    //   backgroundimage={images(`./${thumbnail}`)}
    // >
    //   <Header>
    //     <Type>{type}</Type>
    //   </Header>
    //   <Content variant="h6"> {title} </Content>
    // </ArticleContainer>
    <ArticleContainer to={`/article/${id}`}>
      <Header>
        <Type>{type}</Type>
      </Header>
      <Video autoPlay loop muted playsInline>
        {/* <source src={images(`./${thumbnail}`)} type="video/mp4" />> */}
      </Video>
      <Content variant="h6"> {title} </Content>
    </ArticleContainer>
  );
}

export default Article;
