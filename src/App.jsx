import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './componants/Footer';
import Header from './componants/Header';

const App = () => {
  return (
    <div>
      <Header/>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;