import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Collab from './Pages/Collab'
import Delve from './Pages/Delve'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'


const App = () =>
{
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/aboutus" element={<Aboutus/>}/>
      <Route path = "/collab" element={<Collab/>}/>
      <Route path = "/delve" element={<Delve/>}/>
      <Route path = "/contact" element={<Contact/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
