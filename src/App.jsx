import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <CTA />
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} FlowNote Labs. All rights reserved.
      </footer>
    </div>
  )
}

export default App
