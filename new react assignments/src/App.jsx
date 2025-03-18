import React from 'react';
import Navbar from "../src/components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      
      <main className="main-content">
        <section className="hero-section slide-in-left">
          <Hero 
            heading="Audi SUV Sedan" 
            image="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwSWC7XPNk9YO-lHtbAx79ye33EdrxhYgboYtYAEcyGQ4HsDJDiVGMAkyLwCEJEA4jM5MTMwsFYAGZEMICCoYUAkEGZ3cQ1x9PQJBgASieoX2QAAAA.webp?wid=180"
            description="Introducing the all-new Audi Q6 e-tron, a premium mid-size all-electric SUV that boasts an EPA-estimated range of 321 miles (RWD equipped with Ultra package)—allowing you to get where you want to go in state-of-the-art style."
          />
        </section>

        <section className="hero-section slide-in-right">
          <Hero
            isDirectionLeft={true}
            heading="Audi MPG" 
            image="https://www.motortrend.com/uploads/sites/10/2020/12/2021-audi-a4-premium-sedan-angular-front.png"
            description="Introducing the all-new Audi Q6 e-tron, a premium mid-size all-electric SUV that boasts an EPA-estimated range of 321 miles (RWD equipped with Ultra package)—allowing you to get where you want to go in state-of-the-art style."
          />
        </section>
      
        <Products/>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
