export const getArticlesAsync = data => {
  return {
    type: "GET_RANDOM_TEXT",
    data
  };
};

export const getArticles = currentArticleNumber => {
  return dispatch => {
    if (!currentArticleNumber || currentArticleNumber > 19) {
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=0752ddbc8894451d97e02f1a4b8d9c18";
      const req = new Request(url);
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(getArticlesAsync(data));
        });
    } else {
      dispatch(getArticlesAsync());
    }
  };
};
