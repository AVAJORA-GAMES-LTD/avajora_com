/**
 * Shared company constants for AVAJORA GAMES LTD.
 * Single source of truth — imported by all legal pages, footer, etc.
 */
export const COMPANY = {
    name: "AVAJORA GAMES LTD",
    trade: "Avajora Games",
    type: "Private limited company (Ltd)",
    reg: "17030540",
    addr: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom",
    country: "England and Wales, United Kingdom",
    duns: "234577218",
    ceo: "ceo@avajora.com",
    legal: "legal@avajora.com",
    privacy: "privacy@avajora.com",
    support: "support@avajora.com",
    web: "avajora.com",
    url: "https://avajora.com",
} as const;

export type Company = typeof COMPANY;
