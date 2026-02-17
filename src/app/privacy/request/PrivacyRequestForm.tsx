"use client";

import { useState } from "react";
import { COMPANY as CO } from "@/lib/company";

const REQUEST_TYPES = [
    "Access (copy of my data)",
    "Deletion (erase my data)",
    "Rectification (correct my data)",
    "Portability (export my data)",
    "Restriction (pause processing)",
    "Objection (stop processing)",
    "Withdraw Consent",
    "Opt Out of Sale/Sharing",
] as const;

type Status = "idle" | "sending" | "sent" | "error";

export function PrivacyRequestForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
    const [device, setDevice] = useState("");
    const [gameName, setGameName] = useState("");
    const [requestType, setRequestType] = useState("");
    const [region, setRegion] = useState("");
    const [details, setDetails] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    /** Build mailto: link as fallback */
    const buildMailto = () => {
        const body = [
            `Full name / username: ${name}`,
            `Email: ${email}`,
            `In-game user ID: ${userId || "N/A"}`,
            `Device type: ${device || "N/A"}`,
            `Game name: ${gameName || "N/A"}`,
            `Request type: ${requestType}`,
            `Country / State: ${region || "N/A"}`,
            details ? `\nAdditional details:\n${details}` : "",
        ]
            .filter(Boolean)
            .join("\n");

        const subject = encodeURIComponent(`Privacy Request — ${requestType}`);
        const mailBody = encodeURIComponent(body);
        return `mailto:${CO.privacy}?subject=${subject}&body=${mailBody}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch("/api/privacy-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    userId,
                    device,
                    gameName,
                    requestType,
                    region,
                    details,
                }),
            });

            if (res.ok) {
                setStatus("sent");
            } else {
                const data = await res.json().catch(() => ({}));
                setErrorMsg(data?.error || "Something went wrong.");
                setStatus("error");
            }
        } catch {
            setErrorMsg("Network error — please try the email fallback below.");
            setStatus("error");
        }
    };

    const inputClass =
        "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900";
    const labelClass = "block text-sm font-medium text-neutral-700 mb-1";

    /* ── Success state ── */
    if (status === "sent") {
        return (
            <div className="rounded-lg border border-green-200 bg-green-50 p-5 sm:p-6 text-center space-y-3">
                <p className="text-green-800 font-semibold text-base">Request submitted successfully.</p>
                <p className="text-sm text-green-700">
                    We&rsquo;ve received your privacy request and will respond within the timeframes
                    required by applicable law. A copy has been sent to <strong>{CO.privacy}</strong>.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 sm:p-6 space-y-4"
        >
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="pr-name" className={labelClass}>
                        Full name or username <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="pr-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label htmlFor="pr-email" className={labelClass}>
                        Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="pr-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="pr-userid" className={labelClass}>
                        In-game user ID
                    </label>
                    <input
                        id="pr-userid"
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="Found in Settings > About"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label htmlFor="pr-device" className={labelClass}>
                        Device type
                    </label>
                    <select
                        id="pr-device"
                        value={device}
                        onChange={(e) => setDevice(e.target.value)}
                        className={inputClass}
                    >
                        <option value="">Select…</option>
                        <option value="iOS">iOS (iPhone / iPad)</option>
                        <option value="Android">Android</option>
                        <option value="Both">Both</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="pr-game" className={labelClass}>
                        Game name
                    </label>
                    <input
                        id="pr-game"
                        type="text"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                        placeholder="e.g. Game Title"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label htmlFor="pr-type" className={labelClass}>
                        Request type <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="pr-type"
                        required
                        value={requestType}
                        onChange={(e) => setRequestType(e.target.value)}
                        className={inputClass}
                    >
                        <option value="">Select…</option>
                        {REQUEST_TYPES.map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="pr-region" className={labelClass}>
                        Country / State of residence
                    </label>
                    <input
                        id="pr-region"
                        type="text"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder="e.g. California, UK, Germany"
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="pr-details" className={labelClass}>
                    Additional details (optional)
                </label>
                <textarea
                    id="pr-details"
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Any extra information that will help us process your request…"
                    className={inputClass + " resize-y"}
                />
            </div>

            {/* Error message */}
            {status === "error" && (
                <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {errorMsg || "Something went wrong."} You can also{" "}
                    <a href={buildMailto()} className="underline underline-offset-2 font-medium">
                        email us directly
                    </a>.
                </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "sending" ? "Submitting…" : "Submit Request"}
                </button>

                <a
                    href={buildMailto()}
                    className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 transition-colors"
                >
                    Open in Email Client
                </a>
            </div>

            <p className="text-xs text-neutral-500">
                &ldquo;Submit Request&rdquo; sends your request directly to {CO.privacy}.
                &ldquo;Open in Email Client&rdquo; opens your default email app as a fallback.
                No data is stored on our servers beyond what is needed to deliver the email.
            </p>
        </form>
    );
}
