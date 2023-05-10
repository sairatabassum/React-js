import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Volunteers from "./components/Volunteers/Volunteers";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/volunteers" element={<Volunteers></Volunteers>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
