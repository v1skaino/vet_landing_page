import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
