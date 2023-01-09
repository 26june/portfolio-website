import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
