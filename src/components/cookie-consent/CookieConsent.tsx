"use client";

import { useEffect } from "react";
import "klaro/dist/klaro.css";

/**
 * CookieConsent — loads Klaro and Google Analytics.
 *
 * How it works:
 *  1. Klaro initialises and shows the consent banner on first visit.
 *  2. The Google Analytics <script> tags below are *not* loaded by the browser
 *     because they have `type="text/plain"` instead of `type="text/javascript"`.
 *  3. When the user accepts the "google-analytics" service in Klaro,
 *     Klaro changes the type to `text/javascript` and the browser executes them.
 *  4. If the user declines, the scripts remain inert and Klaro deletes any
 *     existing _ga / _ga_* cookies.
 */

const GA_ID = "G-SYCBC4VV98";

export default function CookieConsent() {
    useEffect(() => {
        // Dynamically import klaro (it references `window` so must be client-only)
        async function initKlaro() {
            const klaroConfig = (await import("@/lib/klaro-config")).default;

            // Klaro reads config from window.klaroConfig
            (window as unknown as Record<string, unknown>).klaroConfig = klaroConfig;

            // Load Klaro — klaro bundles everything under its default export
            const klaroModule = await import("klaro");
            const klaro = klaroModule.default;
            klaro.setup(klaroConfig);

            // Expose klaro globally so the footer "Cookie Settings" button can call klaro.show()
            (window as unknown as Record<string, unknown>).klaro = klaro;
        }

        initKlaro();
    }, []);

    return (
        <>
            {/* Klaro container */}
            <div id="klaro" />

            {/*
             * Google Analytics scripts — managed by Klaro.
             * `type="text/plain"` prevents execution until Klaro enables them.
             * `data-type="text/javascript"` tells Klaro what to change it to.
             * `data-name="google-analytics"` links them to the Klaro service config.
             */}
            <script
                type="text/plain"
                data-type="text/javascript"
                data-name="google-analytics"
                data-src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                async
            />
            <script
                type="text/plain"
                data-type="text/javascript"
                data-name="google-analytics"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_ID}', {
                            anonymize_ip: true,
                            cookie_flags: 'SameSite=None;Secure'
                        });
                    `,
                }}
            />
        </>
    );
}
