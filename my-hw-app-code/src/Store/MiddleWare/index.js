import { fetchBlogsSuccessAC, fetchBlogsFailureAC } from "../ActionCreators";

export const fetchBlogsMiddleWare = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const blogs = await response.json();
      dispatch(fetchBlogsSuccessAC(blogs));
    } catch (e) {
      console.error(e.message);
      dispatch(fetchBlogsFailureAC(e));
    }
  };
};
