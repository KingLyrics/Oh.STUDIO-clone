import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
