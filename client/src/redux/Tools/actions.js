export const acLoadingPage = value => dispatch => {
  dispatch({ type: "LOADING_PAGE_ACTION", payload: value });
};

export const acChangesService = value => dispatch => {
  dispatch({ type: "ADD_SERVICE", payload: value });
};
