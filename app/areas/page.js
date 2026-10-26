import { AGENCY, AREAS, SERVICES } from '@/lib/data';

export const metadata = {
  title: `Service Areas in Metro Atlanta | ${AGENCY.name}`,
  description:
    'Security guard and patrol coverage across Metro Atlanta: Downtown, Midtown, Buckhead, Decatur, Sandy Springs, and Marietta. Get a free quote.',
};

export default function AreasPage() {
  return (
    <div className="wrap">
      <section className="section" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Service areas</p>
        <h1 className="display">Serving Metro Atlanta.</h1>
        <p className="lede">
          Guard and patrol coverage across the metro area. If your site is elsewhere in
          Metro Atlanta, say so in your quote request and it will be confirmed in the
          quote.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <img
          src="/images/atlanta-skyline.jpg"
          alt="Traffic light trails leading into the Atlanta skyline at night."
          style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 20, marginBottom: 32 }}
        />
        <div className="grid-3">
          {AREAS.map((a) => (
            <div className="card" key={a.name}>
              <h3>{a.name}, Atlanta</h3>
              <p>{a.note}</p>
              <a href="/quote" style={{ fontWeight: 700, marginTop: 'auto' }}>
                Get a quote for {a.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="eyebrow">Services in every area</p>
          <h2 className="display">Every service, every area.</h2>
          <p>All six services are available across the areas above.</p>
        </div>
        <div className="grid-2">
          {SERVICES.map((s) => (
            <article className="card" key={s.slug}>
              <h3><a href={`/services/${s.slug}`}>{s.name}</a></h3>
              <p>{s.short}</p>
              <a href={`/services/${s.slug}`} style={{ fontWeight: 700, marginTop: 'auto' }}>
                See what is included →
              </a>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 32 }}>
          <a className="btn btn-primary" href="/quote">Get a Free Quote</a>
        </p>
      </section>
    </div>
  );
}
