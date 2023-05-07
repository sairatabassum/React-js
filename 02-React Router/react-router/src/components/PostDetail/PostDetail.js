import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postID } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postID]);
  return (
    <div>
      <h1>Post detail: {postID} </h1>
      <h2>Post Title: {post.title}</h2>
      <p>Post Body: {post.body}</p>
    </div>
  );
};

export default PostDetail;
