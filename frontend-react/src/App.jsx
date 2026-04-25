import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Admin from "./Pages/Dashboard/Admin";
import ProjectList from "./Pages/Project/ProjectList";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/project" element={<ProjectList />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;