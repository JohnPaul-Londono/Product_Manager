import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList';
import ShowOne from './views/ShowOne';
import EditOne from './views/EditOne';

function App() {


  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Route exact path="/">
          <AddProduct />
          <ProductList />
        </Route>
        {/* <Route exact path="/api/products/new">
        <ProductList />
        </Route> */}
        <Route exact path="/api/products/one/:_id">
          <ShowOne />
        </Route>
        <Route exact path="/api/products/edit/:_id">
          <EditOne />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
