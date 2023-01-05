import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter ,Route ,Routes} from "react-router-dom"
import Product from './product';
import Price from './price';
import Weterdata from './wetherApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route  path='/' element={<App/>}/>
      <Route  path='product' element={<Product/>}>
        <Route  path=':price' element={<Product/>}/>
      </Route>
      <Route  path='/wether' element={<Weterdata/>}>
      <Route  path=':city' element={<Weterdata/>} />
        </Route>
      <Route  path='/price' element={<Price/>}/>
     </Routes>
  </BrowserRouter>
);
