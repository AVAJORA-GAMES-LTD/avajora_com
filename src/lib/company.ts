/**
 * Shared brand constants for AVAJORA.
 * Single source of truth imported by site pages.
 */
export const COMPANY = {
    name: "AVAJORA",
    contact: "contact@avajora.com",
    legal: "legal@avajora.com",
    privacy: "privacy@avajora.com",
    support: "support@avajora.com",
    web: "avajora.com",
    url: "https://avajora.com",
} as const;

export type Company = typeof COMPANY;
