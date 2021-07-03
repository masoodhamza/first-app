import axios from "axios";
import { useEffect, useState } from "react";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
};

export default DataFetching;
