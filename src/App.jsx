import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Reservations from './components/Reservations/Reservations';
import About from './components/About';
import Testimonial from './components/Testimonial/Testimonial';
import OurLocation from './components/OurLocation/OurLocation';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ReservationForm from './components/Reservations/ReservationForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if(theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <Router>
      <div>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          {/* Home route with all sections */}
          <Route
            path="/"
            element={
              <>
                <Hero theme={theme} />
                <About theme={theme} />
                <Services theme={theme} />
                <Reservations theme={theme} />
                <Testimonial theme={theme} />
                <OurLocation theme={theme} />
                <Contact theme={theme} />
                <Footer theme={theme} />
              </>
            }
          />
          {/* ReservationForm route */}
          <Route path="/reserve/:serviceCode" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
