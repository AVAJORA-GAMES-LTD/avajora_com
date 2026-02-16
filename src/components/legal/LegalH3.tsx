/**
 * Shared heading-3 component for legal pages.
 * Ensures uniform styling across Privacy Policy, ToS, Cookie Policy, etc.
 */
export function LegalH3({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="mt-8 mb-3 text-lg font-bold text-neutral-900">
            {children}
        </h3>
    );
}
