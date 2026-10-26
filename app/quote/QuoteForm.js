'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AGENCY, SERVICES } from '@/lib/data';
import { QUOTE_EMAIL, buildQuoteMailto, validateQuote } from '@/lib/mailto';

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get('service') || '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES.some((s) => s.slug === preselected) ? preselected : '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [mailtoHref, setMailtoHref] = useState('');

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  function onSubmit(e) {
    e.preventDefault();
    const errs = validateQuote(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const serviceName =
      SERVICES.find((s) => s.slug === form.service)?.name || form.service;
    const href = buildQuoteMailto({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      serviceName,
      message: form.message.trim(),
    });
    setMailtoHref(href);
    setSent(true);
    window.location.href = href;
  }

  if (sent) {
    return (
      <div className="form-ok" role="status">
        <h3 style={{ marginBottom: 8 }}>Your email app should have opened.</h3>
        <p>
          Your quote request was prepared as an email to{' '}
          <a href={mailtoHref}>{QUOTE_EMAIL}</a> with everything you entered prefilled.
          Send it from your email app to complete the request.
        </p>
        <p style={{ marginTop: 12 }}>
          If your email app did not open,{' '}
          <a href={mailtoHref} style={{ fontWeight: 700 }}>
            click here to open the prepared email
          </a>
          , or write to {QUOTE_EMAIL} directly.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="q-name">Your name *</label>
        <input id="q-name" type="text" autoComplete="name" value={form.name} onChange={set('name')} />
        {errors.name && <div className="field-error">{errors.name}</div>}
      </div>
      <div className="field">
        <label htmlFor="q-email">Email address</label>
        <input id="q-email" type="email" autoComplete="email" value={form.email} onChange={set('email')} />
        {errors.email && <div className="field-error">{errors.email}</div>}
      </div>
      <div className="field">
        <label htmlFor="q-phone">Phone number</label>
        <input id="q-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} />
        {errors.phone && <div className="field-error">{errors.phone}</div>}
      </div>
      {errors.contact && <div className="form-error" role="alert">{errors.contact}</div>}
      <div className="field">
        <label htmlFor="q-service">Service needed *</label>
        <select id="q-service" value={form.service} onChange={set('service')}>
          <option value="">Choose a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
          <option value="not-sure">Not sure yet — advise me</option>
        </select>
        {errors.service && <div className="field-error">{errors.service}</div>}
      </div>
      <div className="field">
        <label htmlFor="q-message">Tell us about the site and schedule</label>
        <textarea
          id="q-message"
          value={form.message}
          onChange={set('message')}
          placeholder="Location in Metro Atlanta, dates or schedule, anything else that matters."
          maxLength={1000}
        />
        {errors.message && <div className="field-error">{errors.message}</div>}
      </div>
      <label className="consent">
        <input type="checkbox" checked={form.consent} onChange={set('consent')} />
        <span>I agree to be contacted about this quote. *</span>
      </label>
      {errors.consent && <div className="field-error">{errors.consent}</div>}
      <div className="notice">
        <p>
          <strong>What happens when you submit:</strong> this opens your email app
          addressed to {QUOTE_EMAIL} with your request prefilled — nothing is stored
          on this site. You send the email yourself from your own email app.
        </p>
      </div>
      <div>
        <button className="btn btn-primary" type="submit">Prepare My Quote Email</button>
      </div>
      <p className="small">
        Prefer email directly? Write to{' '}
        <a href={`mailto:${QUOTE_EMAIL}`}>{QUOTE_EMAIL}</a>.
      </p>
    </form>
  );
}
