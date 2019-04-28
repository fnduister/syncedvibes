import { createSelector } from "reselect";

export const getArticles = state => state.firebase.data.articles;
export const getFilters = state => state.global.homepage;
console.log({ getFilters });

const filterArticles = (articles, values) => {
  let newArticles = {};

  Object.keys(articles).map(key => {
    for (const value of values) {
      if (articles[key].type !== value) {
        console.log({ articles: articles[key], value });
        newArticles[key] = articles[key];
      }
    }
  });
  console.log({ newArticles });
  return newArticles;
};

export const getSelectedArticles = createSelector(
  [getArticles, getFilters],
  (articles, { videoFilter, audioFilter, newsFilter }) => {
    const filterValue =
      ((videoFilter ? 1 : 0) << 2) |
      ((newsFilter ? 1 : 0) << 1) |
      ((audioFilter ? 1 : 0) << 0);

    console.log({ filterValue });

    switch (filterValue) {
      case 0:
        return articles;
      case 1:
        return filterArticles(articles, ["audio"]);
      case 5:
        return filterArticles(articles, ["video", "audio"]);
      case 3:
        return filterArticles(articles, ["news", "audio"]);
      case 2:
        return filterArticles(articles, ["news"]);
      case 4:
        return filterArticles(articles, ["video"]);
      case 6:
        return filterArticles(articles, ["video", "news"]);
      case 7:
        return null;
      default:
        return articles;
    }
  }
);