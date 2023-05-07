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
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendID" element={<FriendDetail />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postID" element={<PostDetail />}></Route>
        </Route>
        <Route path="/countries" element={<Countries />}></Route>
        <Route
          path="/country/:countryName"
          element={<Country></Country>}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
