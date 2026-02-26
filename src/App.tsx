import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import { useState } from "react";

function App() {
  const [showIntroAnimation, setShowIntroAnimation] = useState(true);
  async function handleIntroComplete() {
    setShowIntroAnimation(false);
  }
  return (
    <>
      {showIntroAnimation && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
      <BrowserRouter>
        <div className="reveal-page max-w-2xl lg:max-w-xl mx-auto opacity-0">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
