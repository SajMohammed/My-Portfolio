import React from 'react';
import './App.css';
import { Blog, Features, Footer, Header, About, Connect } from './containers';
import { Navbar, Article, Feature, Skills, Resume } from './components';

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
      <Connect />
      <Resume />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
