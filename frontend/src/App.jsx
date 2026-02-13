import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Translations from "./pages/Translations";
import Books from "./pages/Books";
import Chapters from "./pages/Chapters";
import Verses from "./pages/Verses";
import Random from "./pages/Random";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/translations" element={<Translations />} />
          <Route path="/books/:translation" element={<Books />} />
          <Route path="/chapters/:translation/:book" element={<Chapters />} />
          <Route path="/verses/:translation/:book/:chapter" element={<Verses />} />
          <Route path="/random" element={<Random />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
