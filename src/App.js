import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Cart from './components/Cart';

import ThankYou from './components/ThankYou'; // Import the Thank You component
import Admin from './components/admin/Admin';


const App = () => {
  return (
    // <div>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/products" element={<Products />} />
    //     <Route path="/products/:id" element={<ProductDetail />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/cart" element={<Cart />} />
    //     {/* <Route path="/admin" element={<Admin />} /> */}
    //     <Route path="/thankyou" element={<ThankYou />} /> 
    //     <Route path="/admin/Admin" element={<Admin />}/>
    //   </Routes>
    // </div>
    // <>
     <Admin /> 
    // </>
  );
};

export default App;
