import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Book from "./pages/Book/Book";
import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tour />} />
      </Routes>
    </div>
  );
}

export default App;
