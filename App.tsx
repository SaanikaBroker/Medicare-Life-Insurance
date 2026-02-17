
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MedicarePage from './pages/MedicarePage';
import LifeInsurancePage from './pages/LifeInsurancePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';
import { DataProvider } from './hooks/useAdminData';
import { CalendarCheck, MessageSquare } from 'lucide-react';
import BookAppointmentPage from './pages/BookAppointmentPage';
import { useAdminData } from './hooks/useAdminData';
import ReviewsPage from './pages/ReviewsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { siteData } = useAdminData();
  return (
    <div className="flex flex-col min-h-screen font-sans bg-tn-secondary text-tn-text">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-tn-primary p-2 flex justify-around items-center md:hidden z-40 border-t border-blue-200">
        <a href="#/book-appointment" className="flex flex-col items-center text-white text-sm font-semibold">
          <CalendarCheck size={24} className="mb-1" />
          Book Now
        </a>
        <a href="#/contact" className="flex flex-col items-center text-white text-sm font-semibold">
          <MessageSquare size={24} className="mb-1" />
          Get a Quote
        </a>
      </div>
    </div>
  );
}


function App() {
  return (
    <DataProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/*" element={
            <AppLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/medicare" element={<MedicarePage />} />
                <Route path="/life-insurance" element={<LifeInsurancePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/book-appointment" element={<BookAppointmentPage />} />
              </Routes>
            </AppLayout>
          } />
        </Routes>
      </HashRouter>
    </DataProvider>
  );
}

export default App;
