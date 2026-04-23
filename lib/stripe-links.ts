/**
 * Stripe Payment Link URLs, loaded from environment variables.
 * Set these in Vercel Project Settings > Environment Variables.
 *
 * Butterfly Festival Stripe — sponsors, Stroming vendors
 * Frost Shop Stripe — Frost Shop vendors only
 */

export const sponsorLinks = {
  redWhiteBlue: process.env.STRIPE_LINK_SPONSOR_RWB || '',
  libertyBell: process.env.STRIPE_LINK_SPONSOR_LIBERTY || '',
  starsStripes: process.env.STRIPE_LINK_SPONSOR_STARS || '',
  wethePeople: process.env.STRIPE_LINK_SPONSOR_PEOPLE || '',
  stageSponsor: process.env.STRIPE_LINK_SPONSOR_STAGE || '',
  americanHeritage: process.env.STRIPE_LINK_SPONSOR_HERITAGE || '',
  spiritOf76: process.env.STRIPE_LINK_SPONSOR_SPIRIT || '',
} as const;

export const vendorLinks = {
  stroming10x10: process.env.STRIPE_LINK_VENDOR_STROMING_10x10 || '',
  stroming10x20: process.env.STRIPE_LINK_VENDOR_STROMING_10x20 || '',
  stromingFoodTruck: process.env.STRIPE_LINK_VENDOR_STROMING_FOODTRUCK || '',
  frost10x10: process.env.STRIPE_LINK_VENDOR_FROST_10x10 || '',
  frost10x20: process.env.STRIPE_LINK_VENDOR_FROST_10x20 || '',
  frostFoodTruck: process.env.STRIPE_LINK_VENDOR_FROST_FOODTRUCK || '',
} as const;
