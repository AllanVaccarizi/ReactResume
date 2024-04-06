import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactPage from "./Pages/ContactPage.jsx"
import Homepage from "./Pages/HomePage.jsx"
import PortfolioPage from "./Pages/PortfolioPage.jsx"
import NoPage from "./Pages/NoPage.jsx"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}