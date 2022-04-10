import React from 'react'
//importing files from components folder
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;