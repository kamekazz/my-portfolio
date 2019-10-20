const initialState = {
  loading: true,
  serviceInput: "",
  section: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOADING_PAGE_ACTION":
      return {
        ...state,
        loading: payload
      };
    case "ADD_SERVICE":
      return {
        ...state,
        serviceInput: payload
      };
    case "SET_SECTION":
      return {
        ...state,
        section: payload
      };
    default:
      return state;
  }
}
