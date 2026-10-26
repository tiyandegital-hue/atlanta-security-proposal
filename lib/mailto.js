// Builds the real quote action: a mailto link addressed to Tiyan Digital with
// the request prefilled. Nothing is stored anywhere and nothing is sent by the
// site itself — the visitor's own email app sends it. Kept in a shared module
// so the same logic can be verified outside the browser.
export const QUOTE_EMAIL = 'contact@tiyandegital.com';

export function buildQuoteMailto({ name, email, phone, serviceName, message }) {
  const lines = [
    `Name: ${name}`,
    `Email: ${email || '—'}`,
    `Phone: ${phone || '—'}`,
    `Service needed: ${serviceName}`,
    '',
    'Message:',
    message || '—',
  ];
  const subject = `Security quote request — ${serviceName}`;
  return (
    `mailto:${QUOTE_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(lines.join('\n'))}`
  );
}

export function validateQuote({ name, email, phone, service, message, consent }) {
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = 'Please enter your name.';
  const emailOk = !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneOk = !!phone && phone.replace(/\D/g, '').length >= 7;
  if (!emailOk && !phoneOk)
    errors.contact = 'Please give an email address or a phone number so we can reply.';
  if (email && !emailOk) errors.email = 'Please enter a valid email address.';
  if (phone && !phoneOk) errors.phone = 'Please enter a valid phone number.';
  if (!service) errors.service = 'Please choose a service.';
  if (message && message.length > 1000) errors.message = 'Please keep your message under 1000 characters.';
  if (!consent) errors.consent = 'Please tick the consent box so we can contact you about this quote.';
  return errors;
}
