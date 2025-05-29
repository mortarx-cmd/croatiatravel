import { useState } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Itinerary from './components/Itinerary';
import Ferries from './components/Ferries';
import Accommodations from './components/Accommodations';
import Phrases from './components/Phrases';
import TravelTips from './components/TravelTips';
import Maps from './components/Maps';
import Surprise from './components/Surprise';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('itinerary');

  return (
    <div className="app-container">
      <Header />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="content">
        {activeSection === 'itinerary' && <Itinerary />}
        {activeSection === 'ferries' && <Ferries />}
        {activeSection === 'accommodations' && <Accommodations />}
        {activeSection === 'phrases' && <Phrases />}
        {activeSection === 'tips' && <TravelTips />}
        {activeSection === 'maps' && <Maps />}
        {activeSection === 'surprise' && <Surprise />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
