import "./App.css";
import Home from "./pages/Home/Home";
import Listings from "./pages/Listings/Listings";
import PropertyInfoPage from "./pages/PropertyInfoPage/propertyInfoPage";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import LoginAndReg from "./components/LoginAndReg/LoginAndReg";
import Register from "./components/LoginAndReg/Register";
import Login from "./components/LoginAndReg/Login";
import { AuthProvider } from './components/navbar/AuthContext'; // Import AuthProvider


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/propertyInfo/:id" element={<PropertyInfoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* 👈 Renders at /app/ */ }
