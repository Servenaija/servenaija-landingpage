// src/pages/DeleteAccount.tsx
import { SEO } from '../components'

export default function DeleteAccountPage() {
  return (
    <>
      <SEO
        title="Delete Account"
        description="Learn how account deletion works on ServeNaija. Deleting your account is a soft delete — your account is deactivated immediately, can be recovered during the grace period, and is permanently deleted afterwards."
        keywords="delete ServeNaija account, soft delete account, deactivate account, remove account data, account deletion policy"
        canonicalUrl="/delete-account"
      />
      <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>SERVENAIJA MARKETPLACE LIMITED</h1>
        <h2 style={styles.subheading}>Account Deletion Policy</h2>
        <p style={styles.effectiveDate}>Effective Date: September 28, 2026</p>

        <Section number="1" title="Purpose">
          This page explains what happens when you ask ServeNaija to delete your account. Please read it carefully before submitting a deletion request, because deleting your account is a <strong>soft delete</strong> — not an immediate, irreversible erase of all your information.
        </Section>

        <Section number="2" title="Deleting Your Account is a Soft Delete">
          <p>When you request account deletion, we do not wipe your data from our systems on the spot. Instead, the account is <strong>soft deleted</strong>:</p>
          <ul style={styles.list}>
            <li>Your account is <strong>deactivated immediately</strong> — you can no longer sign in, and your profile becomes invisible to other users.</li>
            <li>Your listings, bookings and other account content are hidden from the marketplace while the account is deactivated.</li>
            <li>The account record is kept in a deactivated state for a short recovery period (see Section 3).</li>
            <li>Once the recovery period ends, the account is <strong>permanently deleted</strong> and your personal information is erased or irreversibly anonymised, except where we are legally required to keep it (see Section 6).</li>
          </ul>
        </Section>

        <Section number="3" title="Recovery Period">
          <p>Because deletion starts as a soft delete, you have <strong>30 calendar days</strong> to change your mind:</p>
          <ul style={styles.list}>
            <li>Within 30 days of your request, you can reactivate your account simply by signing in again, or by contacting <a href="mailto:support@servenaija.com" style={styles.link}>support@servenaija.com</a> from the email address registered on the account.</li>
            <li>Reactivating restores your profile, listings and history exactly as they were before the deletion request.</li>
            <li>If you do not reactivate within 30 days, the soft delete becomes permanent and the recovery option expires — the account and its personal data cannot be restored after that point.</li>
          </ul>
        </Section>

        <Section number="4" title="What Happens Immediately After a Deletion Request">
          <ul style={styles.list}>
            <li>You are signed out of ServeNaija on all devices and your password is invalidated.</li>
            <li>Your profile, store, listings and contact details are hidden from buyers, sellers and other users.</li>
            <li>You stop receiving marketing messages and notifications.</li>
            <li>Your account can no longer be used to place orders, bookings or list products until it is reactivated.</li>
          </ul>
        </Section>

        <Section number="5" title="Outstanding Orders, Bookings and Balances">
          <p>To keep everyone protected, a deletion request can only be completed if your account is in good standing:</p>
          <ul style={styles.list}>
            <li>Any open orders, bookings or disputes must be completed, cancelled or resolved first.</li>
            <li>Wallet balances must be withdrawn, and any amounts owed to ServeNaija or to other users must be settled.</li>
            <li>If your account has unresolved obligations, we may pause the deletion request until they are settled, and we will tell you when that happens.</li>
          </ul>
        </Section>

        <Section number="6" title="What We Delete and What We Keep">
          <p>After the recovery period, we delete or permanently anonymise:</p>
          <ul style={styles.list}>
            <li>Your name, phone number, email address, addresses, photographs and other profile details.</li>
            <li>Your listings, favourites and account preferences.</li>
            <li>Access to your account history from the app and the website.</li>
          </ul>
          <p>We may retain limited records where the law requires it — for example transaction, payment and payout records we must keep for tax, anti-money-laundering, fraud-prevention, accounting and dispute-resolution purposes. Once the legal retention period passes, those records are deleted or anonymised too.</p>
        </Section>

        <Section number="7" title="Content You Shared With Others">
          <p>Reviews, messages and other content you shared with other users may remain visible after deletion, but they will no longer be linked to your name or profile — they appear as coming from a deleted account.</p>
        </Section>

        <Section number="8" title="How to Request Deletion">
          <ul style={styles.list}>
            <li>Open the ServeNaija app, go to <strong>Settings → Delete Account</strong> and confirm the request; or</li>
            <li>Email <a href="mailto:support@servenaija.com" style={styles.link}>support@servenaija.com</a> from the email address registered on your account with the subject “Delete my account”.</li>
            <li>We may verify that the request really comes from you before processing it, to protect your account from unauthorised deletion.</li>
          </ul>
        </Section>

        <Section number="9" title="Creating a New Account">
          <p>You are free to register again after your account has been permanently deleted. The new account starts fresh — previous listings, reviews, orders and balances are not carried over, and any outstanding obligations from the old account still apply.</p>
        </Section>

        <Section number="10" title="Policy Updates">
          ServeNaija may update this Account Deletion Policy from time to time. The latest version will be published on this page and takes effect immediately upon publication.
        </Section>

        <Section number="11" title="Contact Us">
          Questions about deleting your account, the soft delete or the recovery period? Contact our support team at <a href="mailto:support@servenaija.com" style={styles.link}>support@servenaija.com</a> or through the official support channels provided on the Platform.
        </Section>
      </div>
      </div>
    </>
  )
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>{number}. {title}</h3>
      <div style={styles.sectionContent}>{children}</div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #f8fbfa 0%, #f4f8f7 55%, #f7f9fa 100%)',
    padding: '40px 20px 60px',
  },
  container: {
    maxWidth: 860,
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: 16,
    padding: '40px 36px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    border: '1px solid #e4eaef',
  },
  heading: {
    fontSize: '1.1rem',
    fontWeight: 800,
    color: '#165B43',
    textAlign: 'center',
    margin: 0,
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
  },
  subheading: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#0d2637',
    textAlign: 'center',
    margin: '6px 0 4px',
  },
  effectiveDate: {
    fontSize: '0.82rem',
    color: '#6a7784',
    textAlign: 'center',
    marginBottom: 32,
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#165B43',
    margin: '0 0 8px',
  },
  sectionContent: {
    fontSize: '0.92rem',
    color: '#425363',
    lineHeight: 1.7,
  },
  list: {
    margin: '6px 0 0',
    paddingLeft: 20,
  },
  link: {
    color: '#0e7a4a',
    fontWeight: 600,
  },
}

