// Agency identity — ONE constant, so the name can be swapped in one place.
// The lead post never named the agency; this placeholder name must be confirmed
// before anyone presents the site as the agency's live site. No street address,
// phone number, licence number, years in business, client names, or statistics
// are stated anywhere on this site, because none were provided.
export const AGENCY = {
  name: 'Sentinel Security Atlanta',
  shortName: 'Sentinel Security',
  email: 'contact@tiyandegital.com',
  area: 'Metro Atlanta',
  tagline: 'Security for Atlanta businesses, homes, and events.',
};

export const AREAS = [
  { name: 'Downtown', note: 'Offices, venues, and mixed-use blocks.' },
  { name: 'Midtown', note: 'Offices, residences, and nightlife corridors.' },
  { name: 'Buckhead', note: 'Offices, retail, and residential communities.' },
  { name: 'Decatur', note: 'Neighbourhoods, schools-adjacent sites, and local businesses.' },
  { name: 'Sandy Springs', note: 'Corporate parks and residential communities.' },
  { name: 'Marietta', note: 'Businesses, warehouses, and residential areas.' },
];

export const SERVICES = [
  {
    slug: 'armed-security-guards',
    name: 'Armed Security Guards',
    short: 'A stronger on-site presence for sites that need it.',
    includes: [
      'Uniformed armed guards posted at your site',
      'Access control at entrances and gates',
      'Patrols of the premises on an agreed schedule',
      'Written incident reports after every shift',
      'Coordination with your site management',
    ],
    forWhom:
      'Offices, retail sites, residential communities, and venues where a visible, higher-level deterrent is appropriate.',
    benefits: [
      'A visible deterrent at the point of entry',
      'A trained guard already on site if an incident occurs',
      'Consistent coverage on the schedule agreed in your quote',
    ],
    whenToChoose:
      'Choose armed coverage when the site holds high-value assets, handles cash or sensitive goods, or faces an elevated risk profile. If you are unsure, the quote conversation will help you decide — unarmed coverage suits many sites.',
    image: '/images/guard-school.jpg',
    imageAlt: 'A uniformed security guard standing post at a building entrance.',
    seoTitle: 'Armed Security Guards in Atlanta | Sentinel Security Atlanta',
    seoDescription:
      'Armed security guards in Atlanta for offices, retail, communities, and venues. Get a free, written quote for Metro Atlanta coverage.',
  },
  {
    slug: 'unarmed-security-guards',
    name: 'Unarmed Security Guards',
    short: 'Professional presence, access control, and patrols.',
    includes: [
      'Uniformed unarmed guards at entrances and lobbies',
      'Visitor and contractor check-in',
      'Patrols of the premises on an agreed schedule',
      'Written incident reports after every shift',
      'Coordination with your site management',
    ],
    forWhom:
      'Offices, residential buildings, retail parks, schools-adjacent sites, and any site that needs a professional, approachable presence.',
    benefits: [
      'A welcoming first point of contact for visitors',
      'Access control without an armed footprint',
      'Regular patrols and clear reporting',
    ],
    whenToChoose:
      'Choose unarmed coverage when you need presence, access control, and deterrence without firearms on site. It is the right fit for most offices, lobbies, and residential sites.',
    image: '/images/guard-school.jpg',
    imageAlt: 'A uniformed security guard standing post at a building entrance.',
    seoTitle: 'Unarmed Security Guards in Atlanta | Sentinel Security Atlanta',
    seoDescription:
      'Unarmed security guards in Atlanta for offices, lobbies, retail, and residential sites. Access control and patrols — get a free quote.',
  },
  {
    slug: 'event-security',
    name: 'Event Security',
    short: 'Entry, crowd flow, and perimeter coverage for your event.',
    includes: [
      'Entry screening and ticket-holder checks',
      'Crowd-flow and queue management',
      'Perimeter and backstage-area posts',
      'Coordination with event organisers',
      'Post-event incident reporting',
    ],
    forWhom:
      'Concerts, festivals, conferences, private functions, and sporting events across Metro Atlanta.',
    benefits: [
      'Guests move in and out smoothly',
      'Restricted areas stay restricted',
      'One team accountable for the whole event footprint',
    ],
    whenToChoose:
      'Choose event coverage when your event has controlled entry, large crowds, or areas the public must not enter. Staffing is sized to your event in the quote.',
    image: '/images/atlanta-night.jpg',
    imageAlt: 'Downtown Atlanta skyline lit up at night.',
    seoTitle: 'Event Security in Atlanta | Sentinel Security Atlanta',
    seoDescription:
      'Event security in Atlanta: entry screening, crowd flow, and perimeter coverage for concerts, conferences, and private events. Free quote.',
  },
  {
    slug: 'corporate-office-security',
    name: 'Corporate & Office Security',
    short: 'Lobby coverage and after-hours patrols for workplaces.',
    includes: [
      'Lobby and front-desk coverage during business hours',
      'Employee and visitor access management',
      'After-hours patrols of offices and parking areas',
      'Written incident reports after every shift',
    ],
    forWhom:
      'Corporate offices, business parks, coworking buildings, and headquarters across Metro Atlanta.',
    benefits: [
      'A professional front-of-house presence',
      'Controlled access for staff and visitors',
      'Coverage that continues after hours',
    ],
    whenToChoose:
      'Choose office coverage when your building needs a staffed lobby, controlled access, or after-hours patrols — or all three on one contract.',
    image: '/images/atlanta-midtown-night.jpg',
    imageAlt: 'A lit Midtown Atlanta office tower at night.',
    seoTitle: 'Corporate & Office Security in Atlanta | Sentinel Security Atlanta',
    seoDescription:
      'Corporate and office security in Atlanta: lobby coverage, access management, and after-hours patrols. Get a free written quote.',
  },
  {
    slug: 'residential-community-patrol',
    name: 'Residential & Community Patrol',
    short: 'Gatehouse support and nightly patrols for communities.',
    includes: [
      'Gatehouse and entrance coverage',
      'Scheduled community patrols',
      'Resident and visitor access checks',
      'Written incident reports after every shift',
    ],
    forWhom:
      'Gated communities, apartment complexes, homeowners associations, and residential blocks in Metro Atlanta.',
    benefits: [
      'A familiar presence residents recognise',
      'Controlled community access',
      'Regular patrols and clear reporting',
    ],
    whenToChoose:
      'Choose community patrol when your neighbourhood needs controlled access and a regular, visible patrol presence rather than a single static post.',
    image: '/images/guard-school.jpg',
    imageAlt: 'A uniformed security guard standing post at a building entrance.',
    seoTitle: 'Residential & Community Patrol in Atlanta | Sentinel Security Atlanta',
    seoDescription:
      'Residential and community patrol in Atlanta: gatehouse coverage and scheduled patrols for neighbourhoods and apartment communities.',
  },
  {
    slug: 'mobile-patrol-rapid-response',
    name: 'Mobile Patrol & Rapid Response',
    short: 'Marked-vehicle patrols and callouts across Metro Atlanta.',
    includes: [
      'Scheduled and varied patrol visits in marked vehicles',
      'Property and perimeter checks on each visit',
      'Lock-up checks at close of business',
      'Rapid-response callouts as agreed in your quote',
      'Written reports after every visit and callout',
    ],
    forWhom:
      'Businesses, warehouses, construction sites, and properties that need coverage across multiple locations or outside business hours.',
    benefits: [
      'Coverage across several sites on one arrangement',
      'A visible patrol presence without a full-time post',
      'Callouts handled under the terms agreed in your quote',
    ],
    whenToChoose:
      'Choose mobile patrol when a full-time guard is more than you need, or when you have several sites to cover. Patrol frequency and callout terms are set in your quote.',
    image: '/images/atlanta-skyline.jpg',
    imageAlt: 'Traffic light trails leading into the Atlanta skyline at night.',
    seoTitle: 'Mobile Patrol & Rapid Response in Atlanta | Sentinel Security Atlanta',
    seoDescription:
      'Mobile patrol and rapid response in Atlanta: marked-vehicle patrols, property checks, and callouts across Metro Atlanta. Free quote.',
  },
];

export const FAQS = [
  {
    q: 'Which areas of Atlanta do you cover?',
    a: 'Metro Atlanta, including Downtown, Midtown, Buckhead, Decatur, Sandy Springs, and Marietta. If your site is elsewhere in the metro area, say so in your quote request and it will be confirmed in the quote.',
  },
  {
    q: 'How does quoting work?',
    a: 'Fill in the short quote form with the service you need, your location, and your schedule. Your request opens as an email with everything prefilled, and you receive a written quote covering scope and pricing. Nothing is stored on this site.',
  },
  {
    q: 'What is the difference between armed and unarmed guards?',
    a: 'Armed guards carry firearms and suit sites that need a stronger deterrent presence. Unarmed guards focus on access control, patrols, and professional presence without firearms on site. If you are unsure which fits, the quote conversation will help you decide.',
  },
  {
    q: 'Do you cover events?',
    a: 'Yes — concerts, festivals, conferences, private functions, and sporting events. Event staffing is sized to your event, including entry screening, crowd flow, and perimeter posts. See the event security page for what is included.',
  },
  {
    q: 'How fast can guards start?',
    a: 'Start timing depends on the site, the service, and the schedule you need. It is confirmed in your written quote — never guessed here.',
  },
  {
    q: 'Do you patrol neighbourhoods and communities?',
    a: 'Yes — gated communities, apartment complexes, and residential blocks, with gatehouse coverage and scheduled patrols. See the residential and community patrol page for what is included.',
  },
];

export function serviceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}

export function relatedServices(slug) {
  return SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
}
