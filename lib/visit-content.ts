/**
 * VISIT CONTENT - Plan Your Celebration listings
 *
 * ⚠️ IMPORTANT FOR EVENT STAFF:
 * - All listings pulled from public sources: Tourism Bureau, Chamber of Commerce,
 *   hotel company websites, and verified review platforms.
 * - Listings were NOT independently reviewed by the event team.
 * - Before public launch, a local Butterfly Festival board member
 *   should verify each listing for accuracy and completeness.
 * - If a listing is wrong, missing, or outdated, edit this file
 *   and redeploy - no database changes needed.
 * - To add a new business: append to the appropriate array below.
 *
 * SOURCES:
 * - https://www.mariposachamber.org/ (Chamber of Commerce)
 * - https://www.yosemite.com/ (Tourism Bureau)
 * - https://www.oakhurstchamber.com/ (Oakhurst Chamber)
 * - https://www.nps.gov/yose/ (NPS Yosemite)
 */

export type Listing = {
  name: string;
  type: 'hotel' | 'bnb' | 'cabin' | 'camping';
  address?: string;
  phone?: string;
  website?: string;
  description?: string;
};

export const stayListings: Listing[] = [
  // ============ HOTELS / MOTELS ============
  {
    name: 'Mariposa Lodge',
    type: 'hotel',
    address: '5052 CA-140, Mariposa, CA 95338',
    phone: '(209) 966-3607',
    website: 'https://www.mariposalodge.com/',
    description:
      'Motel with seasonal outdoor pool, free parking, and garden. Central location in Mariposa.',
  },
  {
    name: 'Best Western Plus Yosemite Way Station Motel',
    type: 'hotel',
    address: '4999 CA-140, Mariposa, CA 95338',
    phone: '(209) 966-7545',
    website: 'https://www.bestwestern.com/',
    description:
      'Full-service hotel adjacent to Mariposa Arts Park, walking distance to downtown.',
  },
  {
    name: 'The Monarch Inn',
    type: 'hotel',
    address: '5027 CA-140, Mariposa, CA 95338',
    phone: '(209) 966-2500',
    description:
      'Family-owned motor inn, 2 blocks from historic downtown and Mariposa History Center.',
  },
  {
    name: 'Miners Inn',
    type: 'hotel',
    address: '5181 CA-49, Mariposa, CA 95338',
    phone: '(209) 742-7777',
    description:
      'Motel with outdoor pool and free guest parking, 2 minutes walk from downtown Mariposa.',
  },
  {
    name: 'The Yosemite Inn',
    type: 'hotel',
    address: '5180 CA-140, Mariposa, CA 95338',
    phone: '(209) 966-7777',
    website: 'https://www.theyosemiteinn.com/',
    description:
      'Located across from the Visitor Center, walking distance to Mariposa downtown restaurants and shops.',
  },
  {
    name: 'Quality Inn Yosemite Valley Gateway',
    type: 'hotel',
    address: 'Mariposa, CA',
    website: 'https://www.choicehotels.com/',
    description:
      'Near the junction of Highway 49 and State Route 140; 32 miles from Yosemite west entrance.',
  },
  {
    name: 'River Rock Inn',
    type: 'hotel',
    address: 'Mariposa, CA',
    description:
      "Mariposa's oldest motel, approximately 40 minutes' drive from Yosemite National Park.",
  },
  // ============ BED & BREAKFASTS ============
  {
    name: 'Highland House B&B',
    type: 'bnb',
    address: 'Mariposa, CA',
    description:
      '10 acres near Sierra National Forest and Yosemite. Country cottage-style bed and breakfast.',
  },
  {
    name: 'Poppy Hill Bed & Breakfast',
    type: 'bnb',
    address: 'Mariposa, CA',
    description: 'Full-service B&B with picnic area, pool, spa, and fishing pond.',
  },
  // ============ CABINS / VACATION RENTALS ============
  {
    name: 'Little Valley Inn',
    type: 'cabin',
    address: 'Mariposa, CA',
    description: 'Cabin-style rooms with rustic charm and modern comforts.',
  },
  {
    name: 'Yosemite Bug Mountain Resort',
    type: 'cabin',
    address: 'Midpines, CA',
    website: 'https://yosemitebug.com/',
    description:
      'Rustic cabins and hostel-style rooms in Midpines, between Mariposa and El Portal. Popular with Yosemite visitors.',
  },
  // ============ CAMPING ============
  {
    name: 'Indian Flat RV Park',
    type: 'camping',
    address: 'El Portal, CA',
    description:
      'Campground in El Portal with tent sites and RV hookups, near the Merced River.',
  },
  {
    name: 'Summerdale Campground (Sierra National Forest)',
    type: 'camping',
    address: 'Fish Camp, CA',
    description:
      'USFS campground near the South Entrance of Yosemite. Reservations at recreation.gov.',
  },
];

export const oakhurstListings = [
  {
    name: 'Best Western Plus Yosemite Gateway Inn',
    address: '40530 CA-41, Oakhurst, CA 93644',
    description:
      'Full-service hotel 16 miles south of Yosemite South Entrance; pool, hot tub, restaurant.',
  },
  {
    name: 'Tenaya at Yosemite (formerly Tenaya Lodge)',
    address: '1122 CA-41, Fish Camp, CA 93623',
    description:
      'Upscale resort just 2 miles from Yosemite South Entrance; spa, multiple restaurants, pools. Book very early.',
  },
  {
    name: 'Hounds Tooth Inn',
    address: '42071 CA-41, Oakhurst, CA 93644',
    description:
      'Victorian-style B&B with full breakfast, wine hour, and garden patio. Adult-oriented.',
  },
  {
    name: 'Comfort Inn Yosemite Area',
    address: '40489 CA-41, Oakhurst, CA 93644',
    description:
      'Reliable mid-range option with pool, breakfast included, and easy access to Highway 41.',
  },
  {
    name: 'Sierra Sky Ranch',
    address: '50552 Road 632, Oakhurst, CA 93644',
    description:
      'Historic ranch-style inn on 14 acres. Restaurant and saloon on-site.',
  },
];
