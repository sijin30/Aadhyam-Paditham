import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Pages/home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Courses from '../components/Pages/courses/Courses';
import AiAssistance from '../components/Pages/aiAssistance/AiAssistance';

function LayoutRoutes() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Home />
            <Courses />
            <AiAssistance />
            
            </>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/aiassistance" element={<AiAssistance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default LayoutRoutes;
