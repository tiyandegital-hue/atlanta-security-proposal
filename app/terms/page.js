import { AGENCY } from '@/lib/data';

export const metadata = {
  title: `Terms | ${AGENCY.name}`,
  description: 'Terms for this proposal sample website and its quote form.',
};

export default function TermsPage() {
  return (
    <div className="wrap">
      <section className="section" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Terms</p>
        <h1 className="display">Terms.</h1>
      </section>
      <section className="section" style={{ paddingTop: 32, maxWidth: 820 }}>
        <h2 style={{ color: 'var(--text)' }}>About this website</h2>
        <p style={{ color: 'var(--muted)' }}>
          This website is a proposal sample prepared by Tiyan Digital. Service
          descriptions describe the agency&apos;s intended offering; final scope, pricing,
          and terms are confirmed only in a written quote.
        </p>
        <h2 style={{ color: 'var(--text)' }}>Quotes</h2>
        <p style={{ color: 'var(--muted)' }}>
          Quote requests made through this site open as an email to {AGENCY.email}.
          Submitting the form does not create a booking or a contract. A quote, once
          issued in writing and accepted, forms the basis of any arrangement.
        </p>
        <h2 style={{ color: 'var(--text)' }}>Content</h2>
        <p style={{ color: 'var(--muted)' }}>
          Service descriptions, areas, and process steps on this site are general
          descriptions of the services offered. Photographs are licensed stock-style
          images from Wikimedia Commons and do not depict the agency&apos;s own staff
          or premises.
        </p>
        <h2 style={{ color: 'var(--text)' }}>Contact</h2>
        <p style={{ color: 'var(--muted)' }}>
          Questions about these terms: write to{' '}
          <a href={`mailto:${AGENCY.email}`}>{AGENCY.email}</a>.
        </p>
      </section>
    </div>
  );
}
