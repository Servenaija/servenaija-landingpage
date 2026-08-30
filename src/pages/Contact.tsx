import { useState } from 'react'
import type { FormEvent } from 'react'
import { useDownloadApp } from '../context/useDownloadApp'
import { api } from '../lib/api'
import { SEO } from '../components'

const contactChannels = [
  { icon: '📧', title: 'Email us', lines: ['support@servenaija.com'], href: 'mailto:support@servenaija.com', linkText: 'support@servenaija.com' },
  { icon: '📞', title: 'Call us', lines: ['+234 800 000 0000'], href: 'tel:+2348000000000', linkText: '+234 800 000 0000' },
  { icon: '📍', title: 'Head office', lines: ['12 Marina Road, Lagos Island,', 'Lagos, Nigeria'] },
  { icon: '🕘', title: 'Support hours', lines: ['Monday – Saturday', '8:00am – 8:00pm (WAT)'] },
]

const topics = [
  'General enquiry',
  'Marketplace order',
  'Booking a service',
  'Business listing',
  'Agent programme',
  'Partnership',
]

type ContactForm = {
  name: string
  email: string
  topic: string
  message: string
}

const emptyForm: ContactForm = { name: '', email: '', topic: topics[0], message: '' }

export default function ContactPage() {
  const { openDownloadApp } = useDownloadApp()
  const [form, setForm] = useState<ContactForm>(emptyForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const updateField = (field: keyof ContactForm, value: string) =>
    setForm((current) => ({ ...current, [field]: value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    api
      .submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        topic: form.topic,
        message: form.message.trim(),
      })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  return (
    <main className="page">
      <SEO
        title="Contact Us"
        description="Get in touch with ServeNaija. Questions about an order, booking, or joining? Our team replies within 24 hours. Email, call, or visit our Lagos office."
        keywords="contact ServeNaija, customer support, help center, Nigeria, Lagos office, email support"
        canonicalUrl="/contact"
      />
      <section className="page-hero page-hero--center">
        <div className="page-hero__inner">
          <div className="page-hero__copy">
            <p className="page-eyebrow">💬 Contact us</p>
            <h1 className="page-hero__title">We’d love to <span>hear from you</span></h1>
            <p className="page-hero__text">
              Questions about an order, a booking, or joining ServeNaija? Our team replies
              within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner ct-grid">
          <div className="ct-cards">
            {contactChannels.map((channel) => (
              <article key={channel.title} className="ct-info-card">
                <span className="ct-info-card__icon" aria-hidden="true">{channel.icon}</span>
                <div>
                  <h3>{channel.title}</h3>
                  {channel.href ? (
                    <p>
                      <a href={channel.href}>{channel.linkText}</a>
                    </p>
                  ) : (
                    channel.lines.map((line) => <p key={line}>{line}</p>)
                  )}
                </div>
              </article>
            ))}
          </div>

          {status === 'success' ? (
            <div className="ct-form ct-success">
              <span className="ct-success__icon" aria-hidden="true">✓</span>
              <h3>Message sent!</h3>
              <p>
                Thanks {form.name || 'friend'} — our team will reply to <strong>{form.email || 'your email'}</strong> within 24 hours.
              </p>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => { setForm(emptyForm); setStatus('idle') }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form__row">
                <label>
                  Full name
                  <input
                    type="text"
                    required
                    placeholder="Adaeze Okonkwo"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                  />
                </label>
                <label>
                  Email address
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                  />
                </label>
              </div>
              <label>
                What’s it about?
                <select
                  value={form.topic}
                  onChange={(event) => updateField('topic', event.target.value)}
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </label>
              <label>
                Your message
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us how we can help…"
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                />
              </label>
              <button type="submit" className="btn btn--primary btn--block" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'error' && (
                <p className="ct-form__error">
                  Something went wrong sending your message — please check your connection and try again.
                </p>
              )}
              <p className="ct-form__note">We typically reply within 24 hours (Mon–Sat).</p>
            </form>
          )}
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="page-section__inner">
          <div className="page-cta">
            <div className="page-cta__copy">
              <h2>Prefer to sort it out yourself?</h2>
              <p>Bookings, orders and support live inside the ServeNaija app — download it free.</p>
            </div>
            <div className="page-cta__actions">
              <button
                type="button"
                className="btn btn--light"
                onClick={() => openDownloadApp('getting support in the ServeNaija app')}
              >
                Get the app
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}