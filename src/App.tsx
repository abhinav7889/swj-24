import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team.jsx";
import Navbar from "./sections/navbar";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "./sections/footer";
import ProgressBar from "react-scroll-progress-bar";
import Register from "./pages/register";
import Credit from "./pages/credit"

export default function App() {
  return (
    <>
      <ProgressBar height="2" bgcolor="#FFB86C" duration="0" />
      <div className="text-foreground bg-background inter selection:bg-brand selection:text-white overflow-x-hidden">
        <ReactLenis root>
          <div className="fixed w-full top-0 z-50">
            <Navbar />
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/register" element={<Register />} />
              <Route path="/credits" element={<Credit/>} />
            </Routes>
          </BrowserRouter>
          <div className="relative bottom-0 z-50">
            <Footer />
          </div>
        </ReactLenis>
      </div>
    </>
  );
}
