import React from 'react';
import './App.css';
import { Blog, Features, Footer, Header, About } from './containers';
import { Navbar, Article, Feature, Skills } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />  
        <Header />
      </div>
      <Skills />
      <About />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
