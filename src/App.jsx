import React from 'react'
import Section from './components/Section'
import Navbar from './components/Navbar'

function App() {
  return (
    <section className="bg-[url('/assets/images/jungle-background.png')] bg-cover bg-no-repeat min-h-screen flex flex-col">
      <Navbar
      img={"./assets/images/monkey-logo.png"}
      btn={"Buy Now"}
      />
    <Section/>
    </section>
  )
}

export default App