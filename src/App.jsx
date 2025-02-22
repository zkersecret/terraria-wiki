import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Inicio";
import Npcs from "./pages/Npcs";
import Bosses from "./pages/Bosses";
import Pylons from "./pages/Pylons";

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/npcs">NPCs</Link></li>
          <li><Link to="/bosses">Bosses</Link></li>
          <li><Link to="/pylons">Pylons</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/npcs" element={<Npcs />} />
        <Route path="/bosses" element={<Bosses />} />
        <Route path="/pylons" element={<Pylons />} />
      </Routes>
    </Router>
  );
}

export default App;