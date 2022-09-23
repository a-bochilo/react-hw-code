import { combineReducers } from "redux";

const initialFormDataState = {
  formData: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
};

const formDataReducer = (state = initialFormDataState, action) => {
  switch (action.type) {
    case "FORM_DATA":
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

const initialBlogsState = {
  blogs: [],
};

const fetchBlogsReducer = (state = initialBlogsState, action) => {
  switch (action.type) {
    case "FETCH_BLOGS_SUCCESS":
      return { ...state, blogs: action.payload };
    case "FETCH_BLOGS_FAILURE":
      return { ...state, blogs: [] };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  formDataReducer,
  fetchBlogsReducer,
});
