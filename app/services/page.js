import { AGENCY, SERVICES } from '@/lib/data';

export const metadata = {
  title: `Security Services in Atlanta | ${AGENCY.name}`,
  description:
    'Security services in Atlanta: armed and unarmed guards, event security, corporate and office security, residential patrol, and mobile patrol across Metro Atlanta.',
};

export default function ServicesIndex() {
  return (
    <div className="wrap">
      <section className="section" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Services</p>
        <h1 className="display">Security services in Atlanta.</h1>
        <p className="lede">
          Six services, each with its own page: what is included, who it is for, and
          when to choose it. Every quote is written, with scope and pricing confirmed
          before anything starts.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="grid-2">
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
        <p style={{ marginTop: 32 }}>
          <a className="btn btn-primary" href="/quote">Get a Free Quote</a>{' '}
          <a className="btn btn-ghost" href="/areas">See service areas</a>
        </p>
      </section>
    </div>
  );
}
