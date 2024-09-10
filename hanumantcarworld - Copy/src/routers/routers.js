import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/page/home";
import About from "../components/page/about";
import Carlisting from "../components/page/carlisting";
import NotFound from "../components/page/notFound";
import Register from "../components/page/register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/car" element={<Carlisting />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
