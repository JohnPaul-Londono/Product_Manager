import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList';

function App() {



  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <AddProduct />
        <ProductList />
        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
