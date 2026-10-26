# Atlanta Security Proposal — DESIGN.md

## Psychology brief (5 lines)
- Visitor: an Atlanta business owner, event organiser, or community manager who
  needs guards and is comparing firms — the lead asked for website + SEO.
- Their pain: trust is hard to judge from a website; slow or vague sites lose
  the enquiry to a competitor.
- The one action: submit a short quote request.
- The trust gap: an unnamed agency cannot show reviews, licences, or clients —
  so trust must come from transparent services, a clear process, real areas,
  honest FAQ, and a quote path that actually works.
- The emotion: "These people are serious, local, and easy to hire."

## Tokens
- Base near-black navy #0B0F14; glass panels rgba(255,255,255,0.05); hairlines
  rgba(255,255,255,0.14); amber/gold #D9A441 is the ONLY chromatic CTA color
  (one-voltage rule); light text #F2F0EB; muted #B9B7B0; radius 16px cards.
- Anton display + Inter body, self-hosted local woff2, no runtime font CDN.
- No Three.js, no GSAP: light JS only (quote form + mobile nav). Speed is part
  of the SEO pitch.

## Section map
Home: photo hero (value prop + Get a Free Quote above the fold) → trust strip
(promises only) → services grid → Assess/Deploy/Report → areas → FAQ → final CTA.
Services index + dynamic /services/[slug] (6 services, unique SEO meta each).
Areas (local-SEO page) → Quote (mailto form, real action) → Contact → Privacy →
Terms. Footer credit reads exactly "Website by Tiyan Digital".

## Honesty rules applied
- No street address, phone number, licence number, years in business, client
  names, statistics, reviews, ratings, testimonials, certifications, staff
  bios, client logos, or response-time numbers anywhere.
- Agency name is ONE placeholder constant in lib/data.js (lead never named the
  agency) — it must be confirmed before anyone presents the site as live.
- Photos are licensed Wikimedia Commons images, eyeballed individually, credited
  in public/credits.json. Two downloaded candidates were REJECTED after
  eyeballing: one showed another real company's uniform patch and a held
  firearm; one showed another company's marked vehicle and phone number.
- Quote form stores nothing: it opens the visitor's own email app addressed to
  contact@tiyandegital.com with the request prefilled. The page says so before
  submit, and shows a fallback if the email app does not open.
- Per Tanjir's direct order 2026-10-25, this build contains no banner or copy
  describing it as a sample with a disclaimer. Honesty is carried by the
  absence of invented claims plus the "Website by Tiyan Digital" footer credit.
