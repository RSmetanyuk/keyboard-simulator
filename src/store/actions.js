export const saveWebText = data => ({
  type: "WEB_TEXT_SAVE",
  data
});

export const webTextError = () => ({
  type: "WEB_TEXT_ERROR"
});

export const nextSavedText = () => ({
  type: "NEXT_SAVED_TEXT"
});

export const loadLastNews = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { currentArticle } = state;

    if (currentArticle === undefined || currentArticle === 19) {
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=0752ddbc8894451d97e02f1a4b8d9c18";
      const req = new Request(url);
      fetch(req)
        .then(res => res.json())
        .then(data => {
          dispatch(saveWebText(data));
          dispatch(nextSavedText());
        })
        .catch(function(error) {
          dispatch(webTextError());
        });
    } else {
      dispatch(nextSavedText());
    }
  };
};
