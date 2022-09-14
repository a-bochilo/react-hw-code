const initialFormDataState = {
  formData: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
};

export const reducer = (state = initialFormDataState, action) => {
  switch (action.type) {
    case "FORM_DATA":
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};
