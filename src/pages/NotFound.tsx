import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="page">
      <section className="page-section nf">
        <p className="nf__code">404</p>
        <h1 className="section-title">Page not found</h1>
        <p className="section-sub">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>
        <Link to="/" className="btn btn--primary">Back to home</Link>
      </section>
    </main>
  )
}