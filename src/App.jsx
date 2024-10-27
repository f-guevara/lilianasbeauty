import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Reservations from './components/Reservations/Reservations';
import AOS from 'aos';
import About from './components/About';
import Testimonial from './components/Testimonial/Testimonial';
import 'aos/dist/aos.css';

const App = () => {
  const [theme, setTheme] = React.useState
  (localStorage.getItem("theme")?
  localStorage.getItem("theme") : "light"
);

const element = document.documentElement;
useEffect(() => {
  if(theme == "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [theme]);

//AOS initialization
React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration:800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();
}, []);
  
  return (
    <div>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Hero theme={theme}/>
    <About theme={theme}/>
    <Services theme={theme} />
    <Reservations theme={theme} />
    <Testimonial theme={theme} />
    </div>
  )
}

export default App;