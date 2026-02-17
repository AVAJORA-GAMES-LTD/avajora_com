/**
 * Centralised version/date constants for all legal pages.
 * Single source of truth — update here and every legal page picks up the change.
 *
 * For material changes, set `effective` to a date at least 30 days after `updated`
 * to give users a grace period. For non-material changes (typos, formatting),
 * `effective` and `updated` can match.
 */
export const LEGAL_VERSIONS = {
    privacyPolicy: {
        version: "2.3",
        updated: "17 February 2026",
        effective: "17 February 2026",
    },
    termsOfService: {
        version: "1.4",
        updated: "17 February 2026",
        effective: "17 February 2026",
    },
    cookiePolicy: {
        version: "1.3",
        updated: "17 February 2026",
        effective: "17 February 2026",
    },
    privacySummary: {
        version: "1.2",
        updated: "17 February 2026",
    },
    doNotSell: {
        version: "1.2",
        updated: "17 February 2026",
    },
    advertisingPartners: {
        version: "1.3",
        updated: "17 February 2026",
    },
    privacyRequest: {
        version: "1.1",
        updated: "17 February 2026",
    },
    privacyForParents: {
        version: "1.0",
        updated: "17 February 2026",
    },
    transparencyReport: {
        version: "1.0",
        updated: "17 February 2026",
    },
} as const;

export type LegalVersions = typeof LEGAL_VERSIONS;
