// src/pages/Privacy.tsx

export default function PrivacyPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>SERVENAIJA MARKETPLACE LIMITED</h1>
        <h2 style={styles.subheading}>Privacy Policy</h2>
        <p style={styles.effectiveDate}>Effective Date: July 11, 2026</p>

        <Section number="1" title="Introduction">
          <p>ServeNaija Marketplace Limited ("ServeNaija", "Company", "we", "our", or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect information obtained through our website, mobile application, and related services.</p>
          <p>This Privacy Policy is intended to comply with the Nigeria Data Protection Act (NDPA) 2023 and other applicable privacy laws.</p>
        </Section>

        <Section number="2" title="Information We Collect">
          <p>Depending on how you use our services, we may collect:</p>
          <p><strong>Personal Information</strong></p>
          <ul style={styles.list}>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Residential or business address</li>
            <li>Date of birth</li>
            <li>Government-issued identification (where verification is required)</li>
            <li>Selfie or profile photograph</li>
            <li>Business registration documents (for service providers)</li>
          </ul>
          <p><strong>Financial Information</strong></p>
          <ul style={styles.list}>
            <li>Payment records</li>
            <li>Transaction history</li>
            <li>Bank account information where required for payouts</li>
            <li>Billing information</li>
          </ul>
          <p><strong>Technical Information</strong></p>
          <ul style={styles.list}>
            <li>IP address</li>
            <li>Device model</li>
            <li>Operating system</li>
            <li>Browser type</li>
            <li>Mobile network</li>
            <li>Device identifiers</li>
            <li>Crash reports</li>
            <li>Log files</li>
          </ul>
          <p><strong>Location Information</strong></p>
          <ul style={styles.list}>
            <li>GPS location (only with your permission)</li>
            <li>Approximate location based on device settings</li>
          </ul>
        </Section>

        <Section number="3" title="How We Use Your Information">
          <p>We use your information to:</p>
          <ul style={styles.list}>
            <li>Create and manage your account</li>
            <li>Verify identities</li>
            <li>Match users with providers</li>
            <li>Process payments and withdrawals</li>
            <li>Provide support</li>
            <li>Improve performance</li>
            <li>Detect fraud</li>
            <li>Maintain security</li>
            <li>Send service updates</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section number="4" title="Legal Basis for Processing">
          <p>We process your information to:</p>
          <ul style={styles.list}>
            <li>Perform our contract</li>
            <li>Comply with legal obligations</li>
            <li>Protect legitimate interests</li>
            <li>Prevent fraud</li>
            <li>Act on consent where required</li>
          </ul>
        </Section>

        <Section number="5" title="Sharing Your Information">
          <p>ServeNaija does not sell or rent personal information. Information may be shared only with verified service providers, customers involved in a requested service, licensed payment processors, identity verification providers, cloud hosting providers, government agencies where required by law, and courts or law-enforcement authorities. Third parties are expected to maintain confidentiality.</p>
        </Section>

        <Section number="6" title="Data Security">
          <p>We implement appropriate technical and organizational safeguards. No electronic system is completely secure.</p>
        </Section>

        <Section number="7" title="Data Retention">
          <p>We retain information only as long as necessary to provide services, resolve disputes, prevent fraud, comply with legal obligations, and enforce agreements.</p>
        </Section>

        <Section number="8" title="Your Rights">
          <p>You have the right to:</p>
          <ul style={styles.list}>
            <li>Access your data</li>
            <li>Correct your data</li>
            <li>Delete your data</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
            <li>Request a copy of your data</li>
            <li>Complaint to the NDPC</li>
          </ul>
        </Section>

        <Section number="9" title="Cookies and Similar Technologies">
          <p>We use cookies to improve functionality, security, and analytics.</p>
        </Section>

        <Section number="10" title="Children's Privacy">
          <p>ServeNaija is intended for users aged 18 years or older.</p>
        </Section>

        <Section number="11" title="International Data Transfers">
          <p>Information may be processed outside Nigeria with appropriate safeguards.</p>
        </Section>

        <Section number="12" title="Marketing Communications">
          <p>You may opt out of marketing communications at any time.</p>
        </Section>

        <Section number="13" title="Account Security">
          <p>Users are responsible for safeguarding passwords, PINs, and verification codes.</p>
        </Section>

        <Section number="14" title="Third-Party Services">
          <p>We are not responsible for the privacy practices of external websites.</p>
        </Section>

        <Section number="15" title="Changes to this Privacy Policy">
          <p>Updated versions will be published on our website and mobile application.</p>
        </Section>

        <Section number="16" title="Contact Information">
          <p><strong>ServeNaija Marketplace Limited</strong></p>
          <p>Customer Support</p>
          <p>WhatsApp: +234 705 535 5730</p>
          <p>Lagos State, Federal Republic of Nigeria</p>
        </Section>

        <div style={styles.acknowledgement}>
          <h3 style={styles.acknowledgementTitle}>Acknowledgement</h3>
          <p>By creating an account, accessing, or using any ServeNaija Marketplace Limited service, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
        </div>
      </div>
    </div>
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
  acknowledgement: {
    marginTop: 32,
    padding: 20,
    background: '#f8fbfa',
    borderRadius: 10,
    border: '1px solid #dce7e2',
    textAlign: 'center',
  },
  acknowledgementTitle: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#165B43',
    marginBottom: 8,
  },
}