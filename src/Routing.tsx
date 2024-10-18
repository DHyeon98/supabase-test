import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SignUpPage from "./pages/signUp";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
