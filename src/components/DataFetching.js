import axios from "axios";
import { useEffect, useState } from "react";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <h1>Posts</h1>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />

      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default DataFetching;
