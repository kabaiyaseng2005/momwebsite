// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./assets/pages/Home";
import Donate from "./assets/pages/Donate";

function App() {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Donate">Donate</Link>
          <Link to="/">Home</Link>
          <Link to="/Donate">Donate</Link>
          <Link to="/">Home</Link>
          <Link to="/Donate">Donate</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;
