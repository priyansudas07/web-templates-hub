import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';

// Lazy-load secondary routes to reduce initial landing bundle size
const Collection = lazy(() => import('./pages/Collection').then((m) => ({ default: m.Collection })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then((m) => ({ default: m.ProductDetail })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

// Ultra-fast discreet route transition loader
const RouteFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#070706]">
    <div className="flex items-center gap-3 font-mono text-xs text-[#8E8C85] tracking-[0.2em] uppercase">
      <span className="w-2 h-2 rounded-full bg-[#E3261E] animate-pulse" />
      <span>LOADING VAULT...</span>
    </div>
  </div>
);

// Helper component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:id" element={<ProductDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
