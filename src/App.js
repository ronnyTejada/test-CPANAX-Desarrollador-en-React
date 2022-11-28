import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router";
import Products from "./pages/products";
import Nav from "./components/navbar/navbar";
import Users from "./pages/users";
import SideBar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import { useEffect, useState } from "react";
import Flow from "./pages/flow";
import { redirect } from "react-router-dom";

function App() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();



  return (
    <div>
      <nav>
        <Nav setVisible={setVisible} visible={visible} />
      </nav>

      <article>
        <SideBar visible={visible} setVisible={setVisible} />
      </article>
      <Routes>
        <Route path="/home" element={<Home />} />
        
        <Route path="/"  element={ <Navigate to="/home" replace/>} />

        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/flow" element={<Flow />} />
      </Routes>
    </div>
  );
}

export default App;
