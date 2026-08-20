import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import States from "./pages/States";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import DestinationDetails from "./pages/DestinationDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/states" element={<States />} />

        <Route
          path="/explore/state/:stateName"
          element={<DestinationDetails />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/explore/category/:categoryName"
          element={<CategoryDetails />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;