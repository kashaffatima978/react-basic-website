import {Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import AddServices from "./AddServices";
import OneService from "./OneService";

const Layout = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/addservices' element={<AddServices/>}/>
        <Route exact path='/services/:id' element={<OneService/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;