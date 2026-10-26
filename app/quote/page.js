import { Suspense } from 'react';
import { AGENCY } from '@/lib/data';
import QuoteForm from './QuoteForm';

export const metadata = {
  title: `Get a Free Quote in Atlanta | ${AGENCY.name}`,
  description:
    'Get a free security quote in Atlanta: armed and unarmed guards, event security, corporate and residential patrol across Metro Atlanta. One short form, written quote.',
};

export default function QuotePage() {
  return (
    <div className="wrap">
      <section className="section" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Free quote</p>
        <h1 className="display">Get a free quote.</h1>
        <p className="lede">
          Service, location, schedule — that is all it takes to start. You receive a
          written quote covering scope and pricing.
        </p>
      </section>
      <section className="section" style={{ paddingTop: 32 }}>
        <Suspense fallback={<p>Loading the quote form…</p>}>
          <QuoteForm />
        </Suspense>
      </section>
    </div>
  );
}
