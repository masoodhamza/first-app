import React, { useState, useEffect } from "react";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        setPost(json);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setPost({});
        setError("Somthing went wrong!");
      });
  }, []);

  return (
    <>
      {loading ? "loading..." : post.title}
      {error ? error : null}
    </>
  );
};

export default DataFetchingOne;
