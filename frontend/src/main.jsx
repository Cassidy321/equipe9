import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Footer from './Footer/Footer.jsx';
import FAQ from './FAQ/FAQ.jsx';
import Propos from './Propos/Propos.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FAQ />
    <Propos />
    
    <Footer /> 
  </StrictMode>
);
