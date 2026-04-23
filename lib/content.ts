/**
 * Central content data for Mariposa 250.
 * Edit this file to update schedule, stages, FAQ without touching page code.
 */

// =================================================================
// STAGES & SCHEDULE
// =================================================================

export interface StageAct {
  time: string;
  name: string;
  description?: string;
  confirmed: boolean;
}

export interface Stage {
  id: string;
  name: string;
  location: string;
  sponsor?: string;
  description: string;
  acts: StageAct[];
}

export const stages: Stage[] = [
  {
    id: 'stage-1',
    name: 'Stage 1 — Arts Park',
    location: 'Arts Park',
    sponsor: undefined,
    description:
      'Our main stage in the heart of downtown. Full-band capable, premier sound system, the headlining acts of the day.',
    acts: [
      { time: '10:00 AM', name: 'Opening Ceremony', description: 'Pledge of Allegiance, National Anthem, welcome from Mariposa County Board of Supervisors', confirmed: true },
      { time: '11:00 AM', name: 'TBD', confirmed: false },
      { time: '1:00 PM', name: 'TBD', confirmed: false },
      { time: '3:00 PM', name: 'TBD', confirmed: false },
      { time: '5:00 PM', name: 'TBD — Headliner Slot', confirmed: false },
      { time: '7:30 PM', name: 'Parade Warm-Up Set', confirmed: false },
    ],
  },
  {
    id: 'stage-2',
    name: 'Stage 2 — Twisted Cedar',
    location: 'Twisted Cedar',
    sponsor: 'Twisted Cedar',
    description:
      'Singer-songwriter, acoustic, and Americana — stage sponsor and venue rolled into one.',
    acts: [
      { time: '11:00 AM', name: 'TBD', confirmed: false },
      { time: '1:00 PM', name: 'TBD', confirmed: false },
      { time: '3:00 PM', name: 'TBD', confirmed: false },
      { time: '5:00 PM', name: 'TBD', confirmed: false },
    ],
  },
  {
    id: 'stage-3',
    name: 'Stage 3 — Frost Shop Marketplace',
    location: 'Frost Shop Marketplace',
    sponsor: 'Frost Shop Marketplace',
    description:
      'Part marketplace, part music venue. Eclectic acts throughout the day alongside vendor booths.',
    acts: [
      { time: '11:00 AM', name: 'TBD', confirmed: false },
      { time: '1:00 PM', name: 'TBD', confirmed: false },
      { time: '3:00 PM', name: 'TBD', confirmed: false },
      { time: '5:00 PM', name: 'TBD', confirmed: false },
    ],
  },
  {
    id: 'stage-4',
    name: 'Busker Stage 1 — Farmers Market',
    location: 'Farmers Market',
    description:
      'Intimate acoustic performances. Short sets throughout the day.',
    acts: [
      { time: '10:00 AM', name: 'TBD', confirmed: false },
      { time: '12:00 PM', name: 'TBD', confirmed: false },
      { time: '2:00 PM', name: 'TBD', confirmed: false },
      { time: '4:00 PM', name: 'TBD', confirmed: false },
    ],
  },
  {
    id: 'stage-5',
    name: 'Busker Stage 2 — History Center',
    location: 'Mariposa Museum and History Center',
    description:
      'Historical-themed performances, storytellers, and the setting for our History-Themed Costume Contest.',
    acts: [
      { time: '11:00 AM', name: 'History-Themed Performances', confirmed: false },
      { time: '2:00 PM', name: 'Costume Contest Entries Open', confirmed: true },
      { time: '4:00 PM', name: 'History-Themed Costume Contest', description: 'Coordinated by Rosemarie Thurston. Period costumes welcomed. Prizes for children and adults.', confirmed: true },
    ],
  },
];

// =================================================================
// KEY MOMENTS (cross-stage schedule anchors)
// =================================================================

export interface KeyMoment {
  time: string;
  title: string;
  location: string;
  description: string;
}

export const keyMoments: KeyMoment[] = [
  {
    time: '9:00 AM',
    title: 'Gates Open',
    location: 'All vendor areas, Info Booth',
    description: 'Vendor booths open, Info Booth staffed, first aid available.',
  },
  {
    time: '10:00 AM',
    title: 'Opening Ceremony',
    location: 'Stage 1 — Arts Park',
    description: 'Pledge of Allegiance, National Anthem, welcome from Mariposa County leadership.',
  },
  {
    time: '11:00 AM',
    title: 'Kids Zone Opens',
    location: 'Kids Zone (TBD)',
    description: 'Games, crafts, face painting, activities for families.',
  },
  {
    time: '2:00 PM',
    title: 'Historical Firearms Auction',
    location: 'Mariposa Museum and History Center',
    description: 'Preview begins 1:00 PM. Licensed FFL required for participation. Proceeds benefit the Museum.',
  },
  {
    time: '4:00 PM',
    title: 'History-Themed Costume Contest',
    location: 'History Center',
    description: 'Prizes for best period costume — children and adult categories.',
  },
  {
    time: '5:00 PM',
    title: 'Kids Zone Closes',
    location: 'Kids Zone',
    description: '',
  },
  {
    time: '6:00 PM',
    title: 'Golf Cart Decoration Competition Judging',
    location: 'Info Booth',
    description: 'Decorated carts line up for judging before the parade.',
  },
  {
    time: '8:00 PM',
    title: 'Community Parade',
    location: 'Downtown Parade Route',
    description: 'Produced by Mariposa Chamber and Lions Club. Floats, classic cars, service clubs, community groups.',
  },
  {
    time: '9:00 PM',
    title: '200-Drone Light Show',
    location: '8th Street',
    description: 'The culmination of the day. Choreographed drone display over downtown — approximately 20 minutes.',
  },
  {
    time: '9:30 PM',
    title: 'Event Ends',
    location: 'All areas',
    description: 'Vendors pack out, crew begins breakdown.',
  },
];

// =================================================================
// FAQ
// =================================================================

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'logistics' | 'accessibility' | 'safety' | 'family';
}

export const faq: FAQItem[] = [
  {
    category: 'general',
    question: 'When and where is the event?',
    answer:
      'Saturday, July 4, 2026, in downtown Mariposa, California. Gates open at 9:00 AM. The event runs through the 200-drone light show at approximately 9:00 PM.',
  },
  {
    category: 'general',
    question: 'How much does it cost to attend?',
    answer:
      'The event is free and open to all. Food, drinks, and items from vendor booths are sold individually. The event is funded by sponsors and community supporters — tax-deductible contributions welcome through the Mariposa Butterfly Festival 501(c)(3).',
  },
  {
    category: 'general',
    question: 'Is this the same as the America 250 national celebration?',
    answer:
      'Mariposa 250 is our community\'s local celebration aligned with America\'s 250th birthday. It\'s a Mariposa County event produced by the Mariposa Butterfly Festival in partnership with Mariposa County government, and is independent of but aligned with the national America 250 commemoration.',
  },
  {
    category: 'logistics',
    question: 'Where do I park?',
    answer:
      'Designated parking areas will be announced closer to the event. Expect limited downtown parking due to road closures — plan to arrive early or use designated lots.',
  },
  {
    category: 'logistics',
    question: 'Will there be road closures?',
    answer:
      'Yes. Several downtown streets will be closed throughout the day. A detailed road closure advisory will be published approximately one week before the event at the Day-Of Info page and in the Mariposa Gazette.',
  },
  {
    category: 'logistics',
    question: 'Can I bring my dog?',
    answer:
      'Leashed, well-behaved dogs are welcome in outdoor areas. For the comfort of your pet, please consider that temperatures may reach 95–105°F, crowds will be dense (especially during the drone show), and the drone show itself may startle animals. Service animals are always welcome throughout.',
  },
  {
    category: 'logistics',
    question: 'Will there be food and drinks available?',
    answer:
      'Yes — multiple food vendors and food trucks across both vendor areas. Beer and wine will be available at permitted locations; bringing outside alcohol is not permitted.',
  },
  {
    category: 'accessibility',
    question: 'Is the event accessible for people with mobility needs?',
    answer:
      'Yes. ADA parking is designated near the main event area, and downtown Mariposa is largely flat. Golf cart shuttle service is available throughout the event for those who need assistance getting between zones — just flag down a driver or ask at the Info Booth.',
  },
  {
    category: 'accessibility',
    question: 'Are there accessible restrooms?',
    answer: 'Yes. Accessible portable restrooms will be placed at multiple locations, marked on the event map.',
  },
  {
    category: 'safety',
    question: 'What should I do in an emergency?',
    answer:
      'For life-threatening emergencies, call 911 immediately, then notify event staff. For non-emergency medical needs, locate any of three first aid booths — marked on the event map and at the Info Booth. Staff and volunteers throughout the event are equipped with radios to summon help.',
  },
  {
    category: 'safety',
    question: 'What about the heat?',
    answer:
      'July temperatures in Mariposa routinely reach 95–105°F. Water stations will be available throughout the event. Bring a refillable water bottle, wear sunscreen, and take breaks in shaded areas. Watch for heat exhaustion symptoms — dizziness, nausea, headache — and visit a First Aid booth if you feel unwell.',
  },
  {
    category: 'safety',
    question: 'Why a drone show instead of fireworks?',
    answer:
      'Mariposa is in the Sierra foothills, where July wildfire risk is extreme. A choreographed 200-drone light show provides a spectacular visual celebration without the fire risk of traditional pyrotechnics. It\'s also quieter, reducing stress on pets, children, veterans sensitive to loud noises, and wildlife.',
  },
  {
    category: 'family',
    question: 'Is there a Kids Zone?',
    answer:
      'Yes — the Kids Zone features crafts, face painting, games, and activities throughout the day. All Kids Zone staff are background-checked.',
  },
  {
    category: 'family',
    question: 'Where do I go if I get separated from my child?',
    answer:
      'The Info Booth is the official Lost Child meeting point. Volunteers throughout the event are trained to walk a lost child directly to the Info Booth — never send a child alone. Make a plan with your family before you arrive: if separated, meet at the Info Booth.',
  },
  {
    category: 'general',
    question: 'How can I help?',
    answer:
      'We\'re actively recruiting volunteers for every aspect of the event — setup, parking, info booth, stage crew, first aid, and more. Visit the Volunteer page to sign up. Businesses can also sponsor at tiers starting at $250.',
  },
];

// =================================================================
// PRESS RELEASES (mirror of Notion Press Releases DB)
// =================================================================

export interface PressReleaseSummary {
  id: string;
  headline: string;
  targetDate: string; // ISO
  status: 'planned' | 'sent';
  type: string;
  leadParagraph: string;
  fullTextUrl?: string;
}

export const pressReleases: PressReleaseSummary[] = [
  {
    id: 'pr-1',
    headline:
      'Mariposa Butterfly Festival and Mariposa County to Host America 250 Celebration on July 4, 2026',
    targetDate: '2026-05-01',
    status: 'planned',
    type: 'Event Announcement',
    leadParagraph:
      'The Mariposa Butterfly Festival, in partnership with Mariposa County, announced today plans for a community celebration marking America\'s 250th anniversary on July 4, 2026.',
  },
  {
    id: 'pr-2',
    headline: 'Mariposa 250 Announces Founding Sponsors for July 4 Celebration',
    targetDate: '2026-05-22',
    status: 'planned',
    type: 'Sponsor Announcement',
    leadParagraph: 'Organizers today announced founding sponsors supporting the July 4, 2026 community event.',
  },
  {
    id: 'pr-3',
    headline: 'Volunteers Needed for July 4 America 250 Mariposa Celebration',
    targetDate: '2026-05-29',
    status: 'planned',
    type: 'Volunteer Call',
    leadParagraph: 'The Mariposa Butterfly Festival is recruiting volunteers for every aspect of the July 4 celebration.',
  },
  {
    id: 'pr-4',
    headline: 'Headline Performers Announced for Mariposa 250 Main Stage',
    targetDate: '2026-06-05',
    status: 'planned',
    type: 'Talent Announcement',
    leadParagraph: 'Organizers announced the headline performers for the five music stages.',
  },
  {
    id: 'pr-5',
    headline: 'Mariposa to Light Up Sky with 200-Drone Show Replacing Fireworks',
    targetDate: '2026-06-12',
    status: 'planned',
    type: 'Drone Show Feature',
    leadParagraph:
      'A 200-drone light show will replace traditional fireworks at the America 250 Mariposa Celebration — safer for the fire-prone Sierra foothills and spectacular in its own right.',
  },
];

// =================================================================
// VOLUNTEER TASKS (snapshot from Notion — update when tasks change)
// =================================================================

export interface VolunteerTaskSummary {
  id: string;
  name: string;
  category: string;
  shift: string;
  volunteersNeeded: number;
  priority: 'critical' | 'important' | 'standard' | 'nice';
  credentialsRequired: string[];
  description: string;
}

export const volunteerTasks: VolunteerTaskSummary[] = [
  { id: 'vt-1', name: 'Morning-of Event Setup Crew', category: 'Setup', shift: 'Setup (6am-9am)', volunteersNeeded: 20, priority: 'critical', credentialsRequired: ['18+'], description: 'Physical labor — tables, chairs, barricades, stages, tents.' },
  { id: 'vt-2', name: 'Parking Attendant — Morning', category: 'Parking', shift: 'Morning (9am-1pm)', volunteersNeeded: 6, priority: 'critical', credentialsRequired: ['18+', 'Drivers License'], description: 'Direct attendees to parking, manage ADA access.' },
  { id: 'vt-3', name: 'Parking Attendant — Afternoon', category: 'Parking', shift: 'Afternoon (1pm-5pm)', volunteersNeeded: 6, priority: 'critical', credentialsRequired: ['18+', 'Drivers License'], description: 'Afternoon parking rotation.' },
  { id: 'vt-4', name: 'Parking Attendant — Evening (Peak)', category: 'Parking', shift: 'Evening (5pm-8pm)', volunteersNeeded: 10, priority: 'critical', credentialsRequired: ['18+', 'Drivers License'], description: 'Peak parking shift — hardest of the day.' },
  { id: 'vt-5', name: 'Info Booth Staff', category: 'Guest Services', shift: 'All Day', volunteersNeeded: 6, priority: 'critical', credentialsRequired: [], description: 'Answer questions, hand out programs, handle lost children. Continuously staffed.' },
  { id: 'vt-6', name: 'Roaming Guest Services', category: 'Guest Services', shift: 'All Day', volunteersNeeded: 4, priority: 'standard', credentialsRequired: [], description: 'Help attendees find what they need — bilingual preferred.' },
  { id: 'vt-7', name: 'Vendor Liaison', category: 'Vendor Support', shift: 'All Day', volunteersNeeded: 4, priority: 'important', credentialsRequired: [], description: 'Help vendors with supplies, issues, questions.' },
  { id: 'vt-8', name: 'Stage Crew (5 stages)', category: 'Stage Ops', shift: 'All Day', volunteersNeeded: 10, priority: 'critical', credentialsRequired: ['18+'], description: 'Help artists load in/out, run cables, manage set changes.' },
  { id: 'vt-9', name: 'Golf Cart Drivers', category: 'Transportation', shift: 'All Day', volunteersNeeded: 12, priority: 'critical', credentialsRequired: ['18+', 'Drivers License', 'Golf Cart Safety Training'], description: 'Transport elderly, disabled, VIPs, emergency supplies.' },
  { id: 'vt-10', name: 'Kids Zone Staff — Morning', category: 'Kids Zone', shift: 'Morning (9am-1pm)', volunteersNeeded: 6, priority: 'critical', credentialsRequired: ['18+', 'Background Check'], description: 'Staff kids activities. Background check mandatory.' },
  { id: 'vt-11', name: 'Kids Zone Staff — Afternoon', category: 'Kids Zone', shift: 'Afternoon (1pm-5pm)', volunteersNeeded: 6, priority: 'critical', credentialsRequired: ['18+', 'Background Check'], description: 'Afternoon kids zone rotation.' },
  { id: 'vt-12', name: 'First Aid Station Volunteer', category: 'First Aid', shift: 'All Day', volunteersNeeded: 4, priority: 'critical', credentialsRequired: ['CPR Cert', 'First Aid Cert', '18+'], description: 'Provide first aid. Licensed medical professionals preferred.' },
  { id: 'vt-13', name: 'Parade Route Safety Crew', category: 'Parade', shift: 'Parade (8pm-9pm)', volunteersNeeded: 25, priority: 'critical', credentialsRequired: ['18+'], description: 'Line parade route to keep crowds behind barriers.' },
  { id: 'vt-14', name: 'Drone Show Crowd Control — 8th Street', category: 'Drone Show', shift: 'Drone Show (9pm-9:30pm)', volunteersNeeded: 20, priority: 'critical', credentialsRequired: ['18+'], description: 'HIGHEST-RISK WINDOW. Crowd management during drone show.' },
  { id: 'vt-15', name: 'Photography Volunteers', category: 'Media', shift: 'All Day', volunteersNeeded: 3, priority: 'important', credentialsRequired: [], description: 'Capture key event moments.' },
  { id: 'vt-16', name: 'Staff Hospitality', category: 'Hospitality', shift: 'All Day', volunteersNeeded: 3, priority: 'standard', credentialsRequired: [], description: 'Keep water and snacks stocked for staff and volunteers.' },
  { id: 'vt-17', name: 'Sponsor Host/Liaison', category: 'Sponsor Relations', shift: 'Afternoon (1pm-5pm)', volunteersNeeded: 3, priority: 'important', credentialsRequired: ['18+'], description: 'Greet sponsors, make them feel appreciated.' },
  { id: 'vt-18', name: 'End-of-Night Breakdown Crew', category: 'Breakdown', shift: 'Breakdown (9:30pm+)', volunteersNeeded: 20, priority: 'critical', credentialsRequired: ['18+'], description: 'Tear down stages, pack equipment, clean trash.' },
  { id: 'vt-19', name: 'Day-After Final Cleanup', category: 'Breakdown', shift: 'Day After (July 5)', volunteersNeeded: 6, priority: 'important', credentialsRequired: ['18+'], description: 'Morning cleanup — final sweep of event footprint.' },
  { id: 'vt-20', name: 'Pre-Event Site Walkthrough', category: 'Setup', shift: 'Week Before', volunteersNeeded: 4, priority: 'important', credentialsRequired: [], description: 'Walk event footprint to verify all placements.' },
];

// =================================================================
// PARADE ENTRY CATEGORIES
// =================================================================

export const paradeCategories = [
  'Classic / Antique Cars',
  'Community Organization / Service Club',
  'Business / Commercial',
  'School / Youth Group',
  'Civic / Government Agency',
  'Marching Band / Performance Group',
  'Equestrian',
  'Decorated Float',
  'Other',
] as const;
