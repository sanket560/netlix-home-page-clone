import React from 'react';
import "./App.css"
import Footer from './Components/Footer';
import Header from './Components/Header';
import Subscribe from './Components/Subscribe';
import Home from './Components/Home';
import Main from './Components/Main';
function App() {
  return (
    <div className='main__section'>
      <Header />
      <Home />
      <Main />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
