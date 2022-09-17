import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import AdminPortal from './components/AdminPortal';
import AffiliatePortal from './components/AffiliatePortal';
import CustomerPortal from './components/CustomerPortal';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PlanOptions from './components/PlanOptions';
import StartQuote from './components/StartQuote';
import Terms from './components/Terms';
import PlanPurchase from './components/PlanPurchase';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="plan-options" element={<PlanOptions />} />
          <Route path="quote" element={<StartQuote />} />
          <Route path="plan-purchase" element={<PlanPurchase />} />
          <Route path="terms-conditions" element={<Terms />} />
          <Route path="customer-portal" element={<CustomerPortal />} />
          <Route path="affiliate-portal" element={<AffiliatePortal />} />
          <Route path="admin-portal" element={<AdminPortal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
