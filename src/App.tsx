import React from 'react';

import './App.css';
import ProductPage from './pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="about" element={<About />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
