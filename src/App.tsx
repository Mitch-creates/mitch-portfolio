import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import { useState } from "react";

function App() {
  const [showIntroAnimation, setShowIntroAnimation] = useState(true);
  return (
    <>
      {showIntroAnimation && (
        <IntroAnimation onComplete={() => setShowIntroAnimation(false)} />
      )}
      <BrowserRouter>
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
