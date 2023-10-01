import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import Header from "./components/Header";
import ConfirmedBooking from "./pages/ConfirmedBooking";

import Footer from "./components/Footer";

const Main = () => {
  return( 
 
    <>
    <Header />
    <div style={{minHeight:'100vh'}}>
    <Routes>
      
       <Route exact path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/reservation" element={<Reservation />} />
       <Route path="/reservations" element={<Reservations />} />
       <Route path="/confirmed/:id" element={<ConfirmedBooking />} />
       <Route path="/order-online" element={<OrderOnline />} />
       <Route path="/login" element={<Login />} />
     
   </Routes>
   </div>
   <Footer/>
 </>
   
  );
};

export default Main;
