import React from 'react'
import Container from './components/container'
import Header from './components/header'

function App() {
  return (
    <section className="bg-[url('./assets/images/jungle-background.png')] bg-cover bg-no-repeat min-h-screen flex flex-col">
      <Header
      img={"./assets/images/monkey-logo.png"}
      btn={"Buy Now"}
      />
    <Container/>
    </section>
  )
}

export default App