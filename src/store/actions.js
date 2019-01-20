export const loadLastNewsAsync = data => ({
  type: "GET_WEB_TEXT",
  data
});

export const loadLastNews = currentArticleNumber => {
  return dispatch => {
    if (currentArticleNumber === undefined || currentArticleNumber === 19) {
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=0752ddbc8894451d97e02f1a4b8d9c18";
      const req = new Request(url);
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(loadLastNewsAsync(data));
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      dispatch(loadLastNewsAsync());
    }
  };
};
