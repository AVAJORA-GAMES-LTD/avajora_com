/**
 * Klaro Cookie Consent configuration for avajora.com
 * Docs: https://github.com/KIProtect/klaro
 */

const klaroConfig = {
    // Version — bump when you add/remove services to re-prompt users
    version: 1,

    // Element to append the consent modal to (defaults to document.body)
    elementID: "klaro",

    // Storage method for consent (cookie is the standard)
    storageMethod: "cookie" as const,
    storageName: "cookie_consent",

    // Cookie expires after 365 days
    cookieExpiresAfterDays: 365,

    // Privacy policy link
    privacyPolicy: "/privacy-policy",

    // Default state: opt-OUT (GDPR compliant — no pre-ticked boxes)
    default: false,

    // Must consent before using the site? No — no cookie wall
    mustConsent: false,

    // Accept all / decline all buttons
    acceptAll: true,
    hideDeclineAll: false,

    // Don't group services (we only have 1 category for now)
    groupByPurpose: true,

    // Translations
    translations: {
        en: {
            consentModal: {
                title: "Cookie Settings",
                description:
                    "We use cookies to analyse website traffic and optimise your experience. " +
                    "Analytics cookies are only set with your explicit consent. You can change your " +
                    "preferences at any time.",
            },
            consentNotice: {
                title: "Cookie Consent",
                description:
                    "We use cookies to understand how you use our website. Analytics cookies are " +
                    "only set with your consent. {privacyPolicy}.",
                learnMore: "Learn more",
                changeDescription:
                    "We have updated our cookie settings. Please review and confirm your preferences.",
            },
            privacyPolicy: {
                text: "Read our {privacyPolicy}",
                name: "Privacy Policy",
            },
            purposes: {
                analytics: {
                    title: "Analytics",
                    description:
                        "These cookies help us understand how visitors interact with our website " +
                        "by collecting and reporting information anonymously.",
                },
            },
            ok: "Accept",
            decline: "Decline",
            acceptAll: "Accept All",
            declineAll: "Decline All",
            save: "Save",
            close: "Close",
        },
    },

    // Services (each service = one cookie vendor)
    services: [
        {
            name: "google-analytics",
            title: "Google Analytics",
            description:
                "Google Analytics collects anonymous usage data to help us improve our website. " +
                "It sets cookies (_ga, _ga_*) that expire after 2 years.",
            purposes: ["analytics"],
            default: false,
            required: false,
            optOut: false,
            onlyOnce: false,

            // Cookies that this service sets (Klaro can auto-delete them on decline)
            cookies: [
                [/^_ga/, "/", "avajora.com"],
                [/^_ga_.*/, "/", "avajora.com"],
                ["_gid", "/", "avajora.com"],
                ["_gat", "/", "avajora.com"],
            ],
        },
    ],
};

export default klaroConfig;
