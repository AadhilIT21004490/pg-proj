import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Hf from './preds/hf';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Hf/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
