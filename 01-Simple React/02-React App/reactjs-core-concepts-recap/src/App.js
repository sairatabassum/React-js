import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="NeoCalifornia" special="bivag"></District>
      <District name="Brahomnbaria" special="jodha akbar"></District>
      <District name="Sumilla" special="Moyna and moti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "skyblue",
  margin: "20px",
  borderRadius: "20px",
  padding: "20px",
};

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };
  return (
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty: </p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost the power</button>
      <p>Speciality: {props.special} </p>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts: {posts.length} </h1>
      {posts.map((post) => (
        <p>Post title: {post.title}</p>
      ))}
      <p>Post title: {posts[0].title}</p>
    </div>
  );
}

export default App;
