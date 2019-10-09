const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOADING_PAGE_ACTION":
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
}
