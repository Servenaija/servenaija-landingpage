import { useState } from 'react'
import { api } from '../lib/api'
import { SEO } from '../components'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const res = await api.sendMagicLink(email)
      if (res.status) {
        setStatus('success')
        setMessage(res.message || 'A magic link has been sent to your email. Check your inbox.')
      } else {
        setStatus('error')
        setMessage(res.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Could not reach the server. Please check your connection and try again.')
    }
  }

  return (
    <main className="page">
      <SEO
        title="Forgot Password"
        description="Reset your ServeNaija password. Enter your email address and we'll send you a magic link to sign in instantly."
        canonicalUrl="/forgot-password"
      />
      <section className="page-hero page-hero--center">
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <p className="page-eyebrow">🔐 Forgot Password</p>
            <h1 className="page-hero__title">
              Reset your <span>password</span>
            </h1>
            <p className="page-hero__text">
              Enter your email address and we'll send you a magic link to sign in instantly.
            </p>

            <form onSubmit={handleSubmit} className="fp-form" noValidate>
              <label htmlFor="fp-email" className="sr-only">
                Email address
              </label>
              <input
                id="fp-email"
                type="email"
                className="fp-form__input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                required
              />
              <button
                type="submit"
                className="btn btn--primary btn--block"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send magic link'}
              </button>
            </form>

            {status === 'success' && (
              <div className="fp-alert fp-alert--success" role="status">
                <strong>✓ Check your inbox</strong>
                <p>{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="fp-alert fp-alert--error" role="alert">
                <strong>Something went wrong</strong>
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}