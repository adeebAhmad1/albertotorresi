import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route component={Home} path="/"/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
