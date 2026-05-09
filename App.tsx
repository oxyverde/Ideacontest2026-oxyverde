import { useState } from 'react';
import Background from './components/Background';
import Popup from './components/Popup';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import IdeaRequirements from './components/IdeaRequirements';
import Categories from './components/Categories';
import HowToSubmit from './components/HowToSubmit';
import Prizes from './components/Prizes';
import RulesAndFAQ from './components/RulesAndFAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <Background />
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <IdeaRequirements />
        <Categories />
        <HowToSubmit />
        <Prizes />
        <RulesAndFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
