import { AGENCY, AREAS } from '@/lib/data';

export const metadata = {
  title: `Contact | ${AGENCY.name}`,
  description:
    'Contact Sentinel Security Atlanta for a free security quote across Metro Atlanta. Use the quote form or email directly.',
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <section className="section" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Contact</p>
        <h1 className="display">Talk to us.</h1>
        <p className="lede">
          The fastest way to start is the quote form — service, location, schedule —
          and you receive a written quote covering scope and pricing.
        </p>
      </section>
      <section className="section" style={{ paddingTop: 32 }}>
        <div className="grid-2">
          <div className="card">
            <h3>Email</h3>
            <p>
              <a href={`mailto:${AGENCY.email}`} style={{ fontWeight: 700 }}>
                {AGENCY.email}
              </a>
            </p>
            <p>For quotes, questions, and existing arrangements.</p>
            <p style={{ marginTop: 'auto' }}>
              <a className="btn btn-primary" href="/quote">Get a Free Quote</a>
            </p>
          </div>
          <div className="card">
            <h3>Areas served</h3>
            <p>{AREAS.map((a) => a.name).join(' · ')} — and the wider Metro Atlanta area.</p>
            <p style={{ marginTop: 'auto' }}>
              <a href="/areas">See all service areas →</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
