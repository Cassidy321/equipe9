import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header/header';
import Contact from './Components/Contact/Contact';
import Accueil from './components/Accueil/Accueil';
import image from './assets/fond-nature-aquarelle-peinte-main_23-2148941599.avif'
import TreeMap from './components/Map';
import Propos from './components/APropos/Propos';
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Accueil/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/map" element={<TreeMap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/Propos' element={<Propos />} />
          <Route path='/FAQ' element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
