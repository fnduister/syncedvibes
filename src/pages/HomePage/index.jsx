import React, { Fragment } from "react";
import Article from "../../containers/Article/Article";



const HomePage = () => {
  return (
    <Fragment>
      {[
        { title: "Hello bro that's good", url: "qQmJbeo6_9U", time: 1, id: 1 },
        {
          title: "I don't know you, do I?",
          url: "j8Xm7zoTUns",
          time: 3,
          id: 2
        },
        { title: "Maybe cats eat pussy", url: "PExjV1W5LaM", time: 5, id: 3 }
      ].map(article => (
        <Article
          url={article.url}
          title={article.title}
          time={article.time}
          key={article.id}
        />
      ))}
    </Fragment>
  );
};

export default HomePage;
