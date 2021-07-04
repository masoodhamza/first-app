import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };

    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(`Error is: ${error}`);
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);

  return (
    <>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </>
  );
};

export default DataFetchingTwo;
