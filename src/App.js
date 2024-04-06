import {Article, CTA, Feature, Navbar, Brand} from "./components/index"
import './App.css';
import {Blog, Features, Footer, Header, Possibilty, WhatGPT3} from "./containers/index"


function App() {
  return (
    
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibilty />
        <CTA />
        <Blog />
        <Footer />
      </div>
    
  );
}

export default App;
