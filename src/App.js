import "./App.css";
import { Routes, Route } from "react-router";
import Products from "./pages/products";
import Nav from "./components/navbar/navbar";
import Users from "./pages/users";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
