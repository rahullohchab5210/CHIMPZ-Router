import React from 'react'
import Section from './components/Section'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <section className="bg-[url('/assets/images/jungle-background.png')] bg-cover bg-no-repeat min-h-screen flex flex-col">
      <Navbar
      img={"./assets/images/monkey-logo.png"}
      btn={"Buy Now"}
      />
      <Outlet/>
    </section>
  )
}

export default App