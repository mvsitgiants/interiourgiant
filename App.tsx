import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { getPageSEO } from './utils/seo';

// A component to automatically scroll to the top of the page on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  const location = useLocation();
  
  // Get current page for SEO
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/services') return 'services';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const currentPage = getCurrentPage();
  const seoData = getPageSEO(currentPage);

  return (
    <div className="bg-brand-dark font-sans">
      <SEO seoData={seoData} />
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;