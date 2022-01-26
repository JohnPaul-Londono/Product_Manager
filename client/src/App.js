import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct'

function App() {



  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
      <AddProduct />
        <Switch>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
