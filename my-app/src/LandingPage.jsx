// src/components/LandingPage.js
import React from 'react';
import Header from './component/Header';
import Tabs from './component/Tabs';
import Form from './component/Page1/Form';
import Footer from './component/Footer';
import './index.css';
import MainPage from './component/page2/MainPage'



const LandingPage = () => {
  return (
    <div>
      <Header/>
      <div>
        <Tabs/>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
