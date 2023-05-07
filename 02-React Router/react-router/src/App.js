import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/friends" element={<Friends />} />
        <Route
          path="/friend/:friendID"
          element={<FriendDetail></FriendDetail>}
        ></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postID" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
