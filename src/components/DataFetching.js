import axios from "axios";
import { useEffect, useState } from "react";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);

  return (
    <>
      <h1>Posts</h1>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={() => setIdFromButtonClick(id)}>
        Fetch data
      </button>
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default DataFetching;
