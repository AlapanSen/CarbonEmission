
import './App.css'
import { useState } from 'react'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Research from './Pages/Research'
import Tracker from './Pages/Tracker'
import Contact from './Components/Contact'
import CardsInfo from './Pages/CardsInfo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './Components/Nav'


function App() {
  
const[toggleContact,setToggleContact] = useState(false)
  return (
    <>

      <Router>
        <Nav setToggleContact={setToggleContact} toggleContact={toggleContact} />
        <Routes>
         <Route path = "/" element = {<Home/>}/>
         <Route path = "/research" element = {< Research toggleContact = {toggleContact} setToggleContact = {setToggleContact} />}/>
         <Route path = "/tracker" element = {<Tracker/>}/>
         <Route path = "/cardsInfo/:title" element = {<CardsInfo/>}/>

        </Routes>
          <Contact toggleContact = {toggleContact} setToggleContact={setToggleContact}/>
        <Footer toggleContact={toggleContact} setToggleContact={setToggleContact}/>
      </Router>

    </>
  )


}

export default App
