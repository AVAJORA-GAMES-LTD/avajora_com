import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY as CO } from "@/lib/company";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { name, email, userId, device, gameName, requestType, region, details } = body;

        if (!name || !email || !requestType) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, requestType." },
                { status: 400 },
            );
        }

        const textBody = [
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

        const { error } = await resend.emails.send({
            from: `Privacy Requests <noreply@avajora.com>`,
            to: [CO.privacy],
            replyTo: email,
            subject: `Privacy Request — ${requestType}`,
            text: textBody,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please try again or email us directly." },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Privacy request API error:", err);
        return NextResponse.json(
            { error: "An unexpected error occurred." },
            { status: 500 },
        );
    }
}
