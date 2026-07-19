// src/pages/RefundPolicy.tsx

export default function RefundPolicyPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>SERVENAIJA MARKETPLACE LIMITED</h1>
        <h2 style={styles.subheading}>Refund Policy</h2>
        <p style={styles.effectiveDate}>Effective Date: July 11, 2026</p>

        <Section number="1" title="Purpose">
          This Refund Policy explains how payments, refunds, cancellations, and dispute resolutions are handled on ServeNaija Marketplace Limited ("ServeNaija", "we", "our", or "the Platform"). By using our Platform, you agree to this Policy.
        </Section>

        <Section number="2" title="Secure Payment Processing">
          ServeNaija operates a secure payment processing and escrow system. When a customer pays for a service:
          <ul style={styles.list}>
            <li>The payment is securely processed through our approved payment partners.</li>
            <li>Funds are held by ServeNaija and are not released directly to the Service Provider until the service has been completed and approved by the Customer.</li>
            <li>Direct payments between Customers and Service Providers outside the Platform are strictly prohibited and are not protected by ServeNaija.</li>
          </ul>
        </Section>

        <Section number="3" title="Release of Payment">
          Payment will be released to the Service Provider only after:
          <ul style={styles.list}>
            <li>The service has been completed.</li>
            <li>The Customer confirms satisfactory completion through the Platform; or</li>
            <li>The inspection/confirmation period expires without a dispute.</li>
          </ul>
        </Section>

        <Section number="4" title="Eligibility for Refund">
          Customers may qualify for a full or partial refund if:
          <ul style={styles.list}>
            <li>The Service Provider fails to arrive or perform the agreed service.</li>
            <li>The service delivered is substantially different from what was agreed.</li>
            <li>The Service Provider cancels the booking without a valid reason.</li>
            <li>The transaction cannot be completed due to verified technical or operational issues caused by ServeNaija.</li>
            <li>Duplicate or incorrect payments are successfully verified.</li>
          </ul>
        </Section>

        <Section number="5" title="Situations Not Eligible for Refund">
          Refunds will not be granted where:
          <ul style={styles.list}>
            <li>The Customer approves completion of the service.</li>
            <li>The Customer changes their mind after the Service Provider has commenced or completed the work.</li>
            <li>The dispute is based solely on personal preference rather than a failure to meet the agreed service.</li>
            <li>Payment was made directly to the Service Provider outside ServeNaija.</li>
            <li>False, misleading, or fraudulent refund claims are submitted.</li>
          </ul>
        </Section>

        <Section number="6" title="Cancellation Policy">
          <strong>Customer Cancellation</strong>
          <ul style={styles.list}>
            <li>Before the Service Provider accepts the request: Full refund.</li>
            <li>After acceptance but before work begins: Refund may be subject to applicable cancellation charges.</li>
            <li>After work has commenced: Refunds will be determined after review of the circumstances.</li>
          </ul>
          <strong>Service Provider Cancellation</strong>
          <p>If a Service Provider cancels an accepted booking without a valid reason, the Customer will receive a full refund.</p>
        </Section>

        <Section number="7" title="Dispute Resolution">
          If a Customer is dissatisfied:
          <ul style={styles.list}>
            <li>A dispute must be opened through the ServeNaija Platform before payment is released.</li>
            <li>Both parties may be required to provide evidence, including photographs, videos, chat records, invoices, or other supporting documents.</li>
            <li>ServeNaija will investigate the matter fairly and make a final determination.</li>
            <li>Our decision regarding payment release or refund shall be binding, except where otherwise required by applicable law.</li>
          </ul>
        </Section>

        <Section number="8" title="Refund Processing Time">
          Once approved:
          <ul style={styles.list}>
            <li>Card refunds are generally processed within 5-10 business days.</li>
            <li>Bank transfer refunds are generally processed within 3-7 business days.</li>
            <li>Processing times may vary depending on the customer's financial institution or payment provider.</li>
          </ul>
        </Section>

        <Section number="9" title="Payment Processing Errors">
          If you experience:
          <ul style={styles.list}>
            <li>Duplicate charges,</li>
            <li>Failed transactions where funds were debited,</li>
            <li>Incorrect payment amounts, or</li>
            <li>Unauthorized payment processing,</li>
          </ul>
          please notify ServeNaija immediately with your transaction reference. Verified payment errors will be corrected as quickly as reasonably possible.
        </Section>

        <Section number="10" title="Fraud Prevention">
          ServeNaija reserves the right to:
          <ul style={styles.list}>
            <li>Delay refunds while investigating suspected fraud.</li>
            <li>Reject fraudulent or abusive refund requests.</li>
            <li>Suspend or terminate accounts involved in fraudulent activities.</li>
            <li>Report suspected criminal activities to the appropriate authorities.</li>
          </ul>
        </Section>

        <Section number="11" title="Platform Service Fees">
          Where applicable:
          <ul style={styles.list}>
            <li>Platform service fees may be non-refundable after successful processing unless otherwise required by law.</li>
            <li>Payment gateway processing charges may be deducted where permitted by applicable regulations.</li>
          </ul>
        </Section>

        <Section number="12" title="Customer Responsibilities">
          Customers must:
          <ul style={styles.list}>
            <li>Carefully review service descriptions before making payment.</li>
            <li>Report issues promptly through the Platform.</li>
            <li>Cooperate during investigations.</li>
            <li>Never make payments outside the ServeNaija Platform.</li>
          </ul>
        </Section>

        <Section number="13" title="Service Provider Responsibilities">
          Service Providers must:
          <ul style={styles.list}>
            <li>Deliver services as agreed.</li>
            <li>Respond promptly to disputes.</li>
            <li>Provide evidence when requested.</li>
            <li>Comply with all ServeNaija policies and quality standards.</li>
          </ul>
        </Section>

        <Section number="14" title="Non-Refundable Subscription and Registration Fees">
          <ul style={styles.list}>
            <li>All subscription, registration, membership, onboarding, verification, and renewal fees paid by Service Providers, Business Owners, and Agents to ServeNaija Marketplace Limited are strictly non-refundable.</li>
            <li>This includes, but is not limited to:
              <ul style={styles.list}>
                <li>Service Provider subscription fees.</li>
                <li>Business Owner subscription or registration fees.</li>
                <li>Agent registration and subscription fees.</li>
                <li>Account verification fees.</li>
                <li>Renewal or membership fees.</li>
                <li>Premium listing or promotional subscription fees.</li>
              </ul>
            </li>
            <li>These fees are charged to provide access to the ServeNaija Platform, account verification, onboarding, administrative processing, platform maintenance, monitoring, and other operational services. Once payment has been successfully processed, no refund, credit, transfer, or exchange will be granted, regardless of whether the subscriber actively uses the Platform or terminates their account voluntarily.</li>
            <li>Exceptions may only be made where:
              <ul style={styles.list}>
                <li>ServeNaija collects a duplicate payment due to a verified system error;</li>
                <li>ServeNaija incorrectly charges an amount different from the approved subscription fee; or</li>
                <li>A refund is required by applicable law.</li>
              </ul>
            </li>
            <li>By registering or subscribing to the ServeNaija Platform, all Service Providers, Business Owners, and Agents acknowledge and agree that all applicable subscription and registration fees are final and non-refundable.</li>
          </ul>
        </Section>

        <Section number="15" title="Policy Updates">
          ServeNaija may amend this Refund Policy from time to time. The latest version will be published on our Platform and becomes effective immediately upon publication.
        </Section>

        <Section number="16" title="Contact Us">
          For payment issues, refund requests, or disputes, please contact ServeNaija Customer Support through the official support channels provided on the Platform.
        </Section>
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
}