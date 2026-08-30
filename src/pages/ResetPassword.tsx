import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { SEO } from '../components'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const token = searchParams.get('token') || ''
  const email = searchParams.get('email') || ''
  const type = searchParams.get('type') || 'customer'

  useEffect(() => {
    if (!token || !email) {
      setStatus('error')
      setMessage('Invalid or missing reset link. Please request a new magic link.')
    }
  }, [token, email])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!token || !email) {
      setStatus('error')
      setMessage('Invalid reset link. Please request a new magic link.')
      return
    }

    if (password.length < 8) {
      setStatus('error')
      setMessage('Password must be at least 8 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setStatus('error')
      setMessage('Passwords do not match.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const res = await api.resetPassword(email, token, password, type)
      if (res.status) {
        setStatus('success')
        setMessage(res.message || 'Password reset successfully! You can now sign in.')
        // Redirect to home after 3 seconds
        setTimeout(() => {
          navigate('/')
        }, 3000)
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
        title="Reset Password"
        description="Set a new password for your ServeNaija account. Create a secure password to protect your account."
        canonicalUrl="/reset-password"
      />
      <section className="page-hero page-hero--center">
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <p className="page-eyebrow">🔑 Reset Password</p>
            <h1 className="page-hero__title">
              Set your <span>new password</span>
            </h1>
            <p className="page-hero__text">
              Create a new password for your account. Make sure it's secure and easy to remember.
            </p>

            <form onSubmit={handleSubmit} className="rp-form" noValidate>
              <div className="rp-form__field">
                <label htmlFor="rp-password" className="rp-form__label">
                  New Password
                </label>
                <input
                  id="rp-password"
                  type="password"
                  className="rp-form__input"
                  placeholder="Enter new password (min. 8 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  required
                  minLength={8}
                />
              </div>

              <div className="rp-form__field">
                <label htmlFor="rp-confirm" className="rp-form__label">
                  Confirm Password
                </label>
                <input
                  id="rp-confirm"
                  type="password"
                  className="rp-form__input"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  required
                  minLength={8}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--block"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' ? 'Updating password…' : status === 'success' ? 'Password updated!' : 'Reset password'}
              </button>
            </form>

            {status === 'success' && (
              <div className="rp-alert rp-alert--success" role="status">
                <strong>✓ Password updated</strong>
                <p>{message}</p>
                <p className="rp-alert__hint">Redirecting you to the homepage…</p>
              </div>
            )}

            {status === 'error' && (
              <div className="rp-alert rp-alert--error" role="alert">
                <strong>Something went wrong</strong>
                <p>{message}</p>
                {!token || !email ? (
                  <button
                    type="button"
                    className="btn btn--ghost btn--sm"
                    onClick={() => navigate('/forgot-password')}
                  >
                    Request new magic link
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}