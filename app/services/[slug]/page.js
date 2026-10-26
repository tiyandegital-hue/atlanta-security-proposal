import { notFound } from 'next/navigation';
import { AGENCY, SERVICES, serviceBySlug, relatedServices } from '@/lib/data';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = serviceBySlug(params.slug);
  if (!s) return {};
  return { title: s.seoTitle, description: s.seoDescription };
}

export default function ServicePage({ params }) {
  const s = serviceBySlug(params.slug);
  if (!s) notFound();
  const related = relatedServices(s.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${s.name} in Atlanta`,
    provider: { '@type': 'LocalBusiness', name: AGENCY.name },
    areaServed: 'Metro Atlanta',
    description: s.seoDescription,
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">
          <a href="/services">Services</a> · Atlanta
        </p>
        <h1 className="display">{s.name} in Atlanta.</h1>
        <p className="lede">{s.short}</p>
        <p>
          <a className="btn btn-primary" href={`/quote?service=${s.slug}`}>Get a Free Quote</a>{' '}
          <a className="btn btn-ghost" href="/services">All services</a>
        </p>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <img
          src={s.image}
          alt={s.imageAlt}
          style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 20, marginBottom: 32 }}
        />
        <div className="grid-2">
          <div>
            <h2 style={{ color: 'var(--text)' }}>What is included</h2>
            <ul className="check-list">
              {s.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ color: 'var(--text)' }}>Who it is for</h2>
            <p style={{ color: 'var(--muted)' }}>{s.forWhom}</p>
            <h2 style={{ color: 'var(--text)', marginTop: 28 }}>Benefits</h2>
            <ul className="check-list">
              {s.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 style={{ color: 'var(--text)' }}>When to choose it</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 820 }}>{s.whenToChoose}</p>
        <p style={{ marginTop: 24 }}>
          <a className="btn btn-primary" href={`/quote?service=${s.slug}`}>Get a Free Quote</a>
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="eyebrow">Related services</p>
          <h2 className="display">Also in Atlanta.</h2>
        </div>
        <div className="grid-3">
          {related.map((r) => (
            <article className="card" key={r.slug}>
              <h3><a href={`/services/${r.slug}`}>{r.name}</a></h3>
              <p>{r.short}</p>
              <a href={`/services/${r.slug}`} style={{ fontWeight: 700, marginTop: 'auto' }}>
                See what is included →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
