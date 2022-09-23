export const formDataAC = (formData) => {
  return {
    type: "FORM_DATA",
    payload: formData,
  };
};

export const fetchBlogsSuccessAC = (blogs) => {
  return {
    type: "FETCH_BLOGS_SUCCESS",
    payload: blogs,
  };
};

export const fetchBlogsFailureAC = (error) => {
  return {
    type: "FETCH_BLOGS_FAILURE",
    payload: error,
  };
};
