import React from 'react';
import './App.css';
import { Blog, Features, Footer, Header} from './containers';
import { Navbar, Article, Feature } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />  
        <Header />
      </div>
      <Features />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
