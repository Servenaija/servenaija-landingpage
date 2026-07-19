import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Header'
import LandingPage from './pages/landingpage'
import './App.css'
import RefundPolicyPage from './pages/RefundPolicy'
import TermsPage from './pages/Terms'
import PrivacyPage from './pages/Privacy'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App