import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Header'
import LandingPage from './pages/landingpage'
import './App.css'
import './pages.css'
import RefundPolicyPage from './pages/RefundPolicy'
import TermsPage from './pages/Terms'
import PrivacyPage from './pages/Privacy'
import DeleteAccountPage from './pages/DeleteAccount'
import MarketplacePage from './pages/Marketplace'
import ServicesPage from './pages/Services'
import BusinessesPage from './pages/Businesses'
import AgentsPage from './pages/Agents'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ForgotPasswordPage from './pages/ForgotPassword'
import ResetPasswordPage from './pages/ResetPassword'
import NotFoundPage from './pages/NotFound'
import { DownloadAppProvider } from './context/DownloadAppContext'
import DownloadAppModal from './components/DownloadAppModal'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <DownloadAppProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<LandingPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <DownloadAppModal />
      </DownloadAppProvider>
    </BrowserRouter>
  )
}

export default App