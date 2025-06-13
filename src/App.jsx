import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Solutions from './pages/Solutions/Solutions'
import AISolution from './pages/Solutions/AISolution'
import ManufacturingSolution from './pages/Solutions/ManufacturingSolution'
import ResearchSolution from './pages/Solutions/ResearchSolution'
import CloudSolution from './pages/Solutions/CloudSolution'
import About from './pages/About/About'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="solutions">
            <Route index element={<Solutions />} />
            <Route path="ai" element={<AISolution />} />
            <Route path="manufacturing" element={<ManufacturingSolution />} />
            <Route path="research" element={<ResearchSolution />} />
            <Route path="cloud" element={<CloudSolution />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App 