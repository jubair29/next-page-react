import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './componants/Footer';

const App = () => {
  return (
    <div>
      <div>This is main part of web site</div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;