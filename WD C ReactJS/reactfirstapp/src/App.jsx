import React from 'react'
import Footer from "./components/footer/Footer"
import Header from "./components/headers/Header"
import { Route, Routes } from 'react-router-dom'
import Body from "./components/body/Body"
import CounterP from "./components/CounterP"
import Contact from "./components/Contact"
import Courses from './components/Courses'
import About from "./components/About"
import Offline from './components/Offline'
import Online from './components/Online'
import Error404 from './components/Error404'
import Product from './components/Product'
const App = () => {
  return (
    <div className='container'>
        <Header/>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/courses" element={<Courses/>}>
          <Route index element={<Offline/>}/>
          <Route path="offline" element={<Offline/>}/>
          <Route path="online" element={<Online/>}/>
          </Route>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/counter" element={<CounterP/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About info="This is props by routes"/>}/>
          <Route path="*" element={<Error404/>}/>

        </Routes>
        <Footer/>
    </div>
  )
}

export default App