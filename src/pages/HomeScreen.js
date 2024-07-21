import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from './Footer';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NotFoundPage from './NotFoundPage';
import LandedPage from './LandedPage';
import Men from './Men';
import Women from './Women';
import Kurti from './Kurti';
import Printed from './Printed';
import FloorLength from './FloorLength';
import Oversized from './Oversized';
import AddCart from './AddCart';
import Cart from './Cart';
import ProductDetailsPage from './ProductDetailsPage'; // Import the ProductDetailsPage component
import HomePage from './HomePage';

function HomeScreen() {
  return (
    <Router>
     <div style={{ height: '100vh', overflowY: 'scroll' }}>
        <Header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} />
        <div style={{ paddingTop: '60px' }}>
          {/* Adjust paddingTop to match the height of your header */}
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kurti" element={<Kurti />} />
            <Route path="/kurti/Printed" element={<Printed />} />
            <Route path="/kurti/oversized" element={<Oversized />} />
            <Route path="/kurti/floor-length" element={<FloorLength />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} /> 
            {/* Add route for product details */}
            {/* Ensure there is a Route for ShoppingCart */}
            <Route path="/AddCart" element={<AddCart />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/LandedPage" element={<LandedPage />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default HomeScreen;
