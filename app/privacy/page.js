import { AGENCY } from '@/lib/data';

export const metadata = {
  title: `Privacy Policy | ${AGENCY.name}`,
  description: 'Privacy policy: this site sets no tracking cookies and stores no form data.',
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <section className="section" style={{ paddingBottom: 0 }}>
        <p className="eyebrow">Privacy</p>
        <h1 className="display">Privacy policy.</h1>
      </section>
      <section className="section" style={{ paddingTop: 32, maxWidth: 820 }}>
        <h2 style={{ color: 'var(--text)' }}>What this site collects</h2>
        <p style={{ color: 'var(--muted)' }}>
          Nothing. This site sets no tracking cookies, runs no analytics, and stores no
          form data. There are no accounts and no third-party embeds that follow you.
        </p>
        <h2 style={{ color: 'var(--text)' }}>How the quote form works</h2>
        <p style={{ color: 'var(--muted)' }}>
          When you submit the quote form, your request is prepared as an email in your
          own email app, addressed to {AGENCY.email}. The site itself does not receive,
          store, or forward your details — you send the email yourself, and only the
          recipient of that email sees it.
        </p>
        <h2 style={{ color: 'var(--text)' }}>Photos</h2>
        <p style={{ color: 'var(--muted)' }}>
          Photographs on this site are licensed Wikimedia Commons images, credited in
          the photo credits file. They are illustrative photographs of Atlanta and of
          security work in general.
        </p>
        <h2 style={{ color: 'var(--text)' }}>Questions</h2>
        <p style={{ color: 'var(--muted)' }}>
          Write to <a href={`mailto:${AGENCY.email}`}>{AGENCY.email}</a> with any
          privacy question about this site.
        </p>
      </section>
    </div>
  );
}
