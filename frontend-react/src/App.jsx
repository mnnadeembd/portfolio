import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Dashboard/Admin";
import ProjectList from "./Pages/Project/ProjectList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/project" element={<ProjectList />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;