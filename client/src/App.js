import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList';
import ShowOne from './views/ShowOne';

function App() {



  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Route exact path ="/">
          <AddProduct />
          <ProductList />
        </Route>
        <Switch>
          <Route exact path="/api/products/one/:_id">
            <ShowOne />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
