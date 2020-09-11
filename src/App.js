import React from "react"
import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer" 

function App() {
  return (
    <div className="App">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients Team Orange</h1>
        <p className="tagline">Vous aimez les couleurs ? Ca tombe bien on a que ça.</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients Team Orange</h1>
        <Gradients />
      </main>
      <Footer /> 
    </div>
  )
}

export default App
