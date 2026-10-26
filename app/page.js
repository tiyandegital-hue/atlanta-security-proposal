import { AGENCY, SERVICES, AREAS, FAQS } from '@/lib/data';

export const metadata = {
  title: `${AGENCY.name} | Security Guards & Patrol in Metro Atlanta`,
  description:
    'Security for Atlanta businesses, homes, and events — trained guards, 24/7 dispatch, one clear quote. Armed and unarmed guards, event security, and patrol across Metro Atlanta.',
};

export default function Home() {
  return (
    <div className="wrap">
      <section className="hero-photo">
        <img
          src="/images/atlanta-night.jpg"
          alt="Downtown Atlanta skyline lit up at night."
        />
        <div className="hero-photo-content">
          <p className="eyebrow">Metro Atlanta · Security guards &amp; patrol</p>
          <h1 className="display">Security for Atlanta.</h1>
          <p className="lede" style={{ marginTop: 16 }}>
            For businesses, homes, and events — trained guards, 24/7 dispatch, one clear
            quote.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="/quote">Get a Free Quote</a>
            <a className="btn btn-ghost" href="/services">Explore services</a>
          </div>
          <p className="small" style={{ marginTop: 16 }}>
            Tell us the service, the location, and the schedule — you receive a written
            quote covering scope and pricing.
          </p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service promises" style={{ marginBottom: 88 }}>
        <div className="trust-tile">
          <div className="k">Dispatch</div>
          <div className="v">24/7 dispatch</div>
        </div>
        <div className="trust-tile">
          <div className="k">Guards</div>
          <div className="v">Trained guards on post</div>
        </div>
        <div className="trust-tile">
          <div className="k">Coverage</div>
          <div className="v">Metro Atlanta — 6 areas</div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2 className="display">What we cover.</h2>
          <p>Every service has its own page with what is included and who it is for.</p>
        </div>
        <div className="grid-3">
          {SERVICES.map((s) => (
            <article className="card" key={s.slug}>
              <img src={s.image} alt={s.imageAlt} loading="lazy" />
              <h3><a href={`/services/${s.slug}`}>{s.name}</a></h3>
              <p>{s.short}</p>
              <a href={`/services/${s.slug}`} style={{ fontWeight: 700, marginTop: 'auto' }}>
                See what is included →
              </a>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <a className="btn btn-primary" href="/quote">Get a Free Quote</a>
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="display">Assess. Deploy. Report.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">01</div>
            <h3>Assess</h3>
            <p style={{ color: 'var(--muted)' }}>
              You tell us the site, the service, and the schedule. We confirm scope and
              pricing in a written quote.
            </p>
          </div>
          <div className="step">
            <div className="num">02</div>
            <h3>Deploy</h3>
            <p style={{ color: 'var(--muted)' }}>
              Guards are posted on the agreed schedule, with access control, patrols, or
              event coverage as quoted.
            </p>
          </div>
          <div className="step">
            <div className="num">03</div>
            <h3>Report</h3>
            <p style={{ color: 'var(--muted)' }}>
              You receive written incident reports after every shift, visit, or callout.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Service areas</p>
          <h2 className="display">Across Metro Atlanta.</h2>
          <p>
            Coverage in Downtown, Midtown, Buckhead, Decatur, Sandy Springs, and Marietta.
            See the <a href="/areas">service areas page</a> for the full picture.
          </p>
        </div>
        <div className="grid-3">
          {AREAS.map((a) => (
            <div className="card" key={a.name}>
              <h3>{a.name}</h3>
              <p>{a.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Questions, answered</p>
          <h2 className="display">Before you ask.</h2>
        </div>
        <div className="faq">
          {FAQS.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <a className="btn btn-primary" href="/quote">Get a Free Quote</a>{' '}
          <a className="btn btn-ghost" href="/services">Explore services</a>
        </p>
      </section>

      <section className="ending">
        <p className="eyebrow">One clear quote</p>
        <p className="display">Tell us what you need protected.</p>
        <p className="lede" style={{ marginTop: 16 }}>
          Service, location, schedule — that is all it takes to start.
        </p>
        <p style={{ marginTop: 24 }}>
          <a className="btn btn-primary" href="/quote">Get a Free Quote</a>
        </p>
      </section>
    </div>
  );
}
