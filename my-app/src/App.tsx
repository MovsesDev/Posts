import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import "./App.scss";
import MyPostPage from "./pages/MyPostPage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { useAppSelector } from "./hooks";
import Logout from "./components/Logout/Logout";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="Pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myPosts" element={<MyPostPage />} />
            <Route path="/editPost" element={<EditPage />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
