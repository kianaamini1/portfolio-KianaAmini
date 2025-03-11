import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WorkPage from './Pages/WorkPage';
import Photography from './Pages/Photography';
import AetherPage from './Pages/AetherPage';
import EliasPage from './Pages/EliasPage';
import HughesPage from './Pages/HughesPage';
import DaydreamingPage from './Pages/DaydreamingPage';
import BilliePage from './Pages/BilliePage';
import FashionPage from './Pages/FashionPage';
// Import other project pages as needed

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/projects/aether" element={<AetherPage />} />
        <Route path="/projects/pettersson" element={<EliasPage />} />
        <Route path="/projects/hughes" element={<HughesPage />} />
        <Route path="/projects/daydreaming-cover" element={<DaydreamingPage />} />
        <Route path="/projects/fashion-photography" element={<FashionPage />} />
        <Route path="/projects/billie-eilish" element={<BilliePage />} />
        <Route path="/Photography" element={<Photography/>}/>
        

        {/* Add more routes for other projects */}
      </Routes>
    </Router>
  );
}
