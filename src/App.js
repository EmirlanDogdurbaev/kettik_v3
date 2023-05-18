import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Book from "./pages/Book/Book";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
