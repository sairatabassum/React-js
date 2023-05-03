import "./App.css";
import { Button } from "react-bootstrap";
import CardGroup2 from "./components/CardGroup2/CardGroup2";

function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant="danger">My Button</Button>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
