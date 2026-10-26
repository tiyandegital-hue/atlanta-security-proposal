import './globals.css';
import { AGENCY, SERVICES, AREAS } from '@/lib/data';

export const metadata = {
  title: `${AGENCY.name} | Security Guards & Patrol in Metro Atlanta`,
  description:
    'Security guards, event security, corporate and residential patrol across Metro Atlanta. Trained guards, 24/7 dispatch, one clear quote.',
};

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: AGENCY.name,
    description:
      'Security guards, event security, corporate and residential patrol across Metro Atlanta.',
    areaServed: ['Metro Atlanta', ...AREAS.map((a) => a.name)],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <header className="site-header">
          <div className="wrap header-row">
            <a className="brand" href="/">
              SENTINEL <span>SECURITY</span> ATLANTA
            </a>
            <nav className="main-nav" aria-label="Main">
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/areas">Areas</a>
              <a href="/contact">Contact</a>
            </nav>
            <a className="btn btn-primary header-cta" href="/quote">
              Get a Free Quote
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap footer-grid">
            <div>
              <p className="brand" style={{ marginBottom: 12 }}>
                SENTINEL <span>SECURITY</span> ATLANTA
              </p>
              <p className="small">
                Security for Atlanta businesses, homes, and events. Trained guards, 24/7
                dispatch, one clear quote.
              </p>
              <p className="small">
                Email:{' '}
                <a href={`mailto:${AGENCY.email}`}>{AGENCY.email}</a>
              </p>
              <p className="small">
                Service area: Metro Atlanta — Downtown, Midtown, Buckhead, Decatur, Sandy
                Springs, Marietta.
              </p>
            </div>
            <div>
              <h3>Services</h3>
              <ul className="footer-links">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <a href={`/services/${s.slug}`}>{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul className="footer-links">
                <li><a href="/quote">Get a Free Quote</a></li>
                <li><a href="/areas">Service Areas</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="wrap" style={{ marginTop: 32 }}>
            <p className="small">
              Photos: licensed Wikimedia Commons images, credited in the photo credits file.
              Website by Tiyan Digital
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
