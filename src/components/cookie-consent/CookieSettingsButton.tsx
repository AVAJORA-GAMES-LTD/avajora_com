"use client";

/**
 * A button that opens the Klaro cookie consent manager.
 * Placed in the footer Legal section alongside other links.
 */
export default function CookieSettingsButton() {
    const handleClick = () => {
        const klaro = (window as unknown as Record<string, unknown>).klaro as
            | { show: (config?: unknown, modal?: boolean) => void }
            | undefined;

        if (klaro) {
            klaro.show(undefined, true);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="hover:text-white hover:underline underline-offset-4 transition text-left"
        >
            Cookie Settings
        </button>
    );
}
