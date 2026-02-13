import { Navbar } from "@/components/navbar";

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00071e] mb-3 sm:mb-4">Privacy Policy</h1>
                    <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Effective Date: February 13, 2026</p>

                    <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
                        {/* Introduction */}
                        <section>
                            <p>
                                At AVAJORA GAMES LTD ("Avajora," "we," "us," or "our"), we take your privacy seriously.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you use our games, applications, website, and related services (collectively, the "Services").
                            </p>
                            <p className="mt-4">
                                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge
                                that you have read, understood, and agree to be bound by this Privacy Policy. If you do not
                                agree with this policy, please do not use our Services.
                            </p>
                        </section>

                        {/* 1. Controller Information */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#00071e] mb-3 sm:mb-4">1. Controller Information</h2>
                            <p className="mb-2">
                                AVAJORA GAMES LTD is the data controller responsible for your personal information.
                            </p>
                            <div className="bg-slate-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                                <p className="font-medium">Company Name: AVAJORA GAMES LTD</p>
                                <p>Registration Number: 17030540</p>
                                <p>Registered Address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                                <p className="mt-2">Email: <a href="mailto:support@avajora.com" className="text-blue-600 hover:underline">support@avajora.com</a></p>
                                <p>Co-Founders: <a href="mailto:khader@avajora.com" className="text-blue-600 hover:underline">khader@avajora.com</a> | <a href="mailto:amro@avajora.com" className="text-blue-600 hover:underline">amro@avajora.com</a></p>
                            </div>
                        </section>

                        {/* 2. Information We Collect */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#00071e] mb-3 sm:mb-4">2. Information We Collect</h2>

                            <h3 className="text-lg sm:text-xl font-medium text-[#00071e] mt-4 mb-2">2.1 Information You Provide to Us</h3>
                            <p>We may collect information that you voluntarily provide when you:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Create an account or register for our Services</li>
                                <li>Make in-app purchases or transactions</li>
                                <li>Contact us for customer support</li>
                                <li>Participate in surveys, contests, or promotions</li>
                                <li>Subscribe to newsletters or marketing communications</li>
                            </ul>
                            <p className="mt-2">This information may include: name, email address, username, payment information, and any other information you choose to provide.</p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">2.2 Information Collected Automatically</h3>
                            <p>When you use our Services, we automatically collect certain information, including:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, mobile network information</li>
                                <li><strong>Usage Data:</strong> Game progress, achievements, session duration, features used, in-game actions</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, time zone, crash reports, performance data</li>
                                <li><strong>Location Data:</strong> Approximate location based on IP address (with your consent, we may collect precise location)</li>
                            </ul>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">2.3 Information from Third Parties</h3>
                            <p>We may receive information about you from third parties, such as:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Social media platforms (if you connect your social media account)</li>
                                <li>Analytics providers and advertising partners</li>
                                <li>App stores (Google Play Store, Apple App Store)</li>
                                <li>Payment processors</li>
                            </ul>
                        </section>

                        {/* 3. How We Use Your Information */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">3. How We Use Your Information</h2>
                            <p>We use the information we collect for the following purposes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Service Provision:</strong> To provide, maintain, and improve our games and Services</li>
                                <li><strong>Account Management:</strong> To create and manage your account, verify your identity</li>
                                <li><strong>Payment Processing:</strong> To process transactions and send related information</li>
                                <li><strong>Customer Support:</strong> To respond to your inquiries and provide technical assistance</li>
                                <li><strong>Personalization:</strong> To personalize your experience and deliver tailored content</li>
                                <li><strong>Analytics:</strong> To analyze usage patterns, monitor game performance, and improve our Services</li>
                                <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
                                <li><strong>Communications:</strong> To send updates, notifications, marketing materials (with your consent)</li>
                                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                            </ul>
                        </section>

                        {/* 4. Legal Basis for Processing */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">4. Legal Basis for Processing (GDPR)</h2>
                            <p>If you are located in the European Economic Area (EEA) or UK, our legal basis for collecting and using your personal information includes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Contract Performance:</strong> Processing necessary to fulfill our contract with you</li>
                                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
                                <li><strong>Consent:</strong> You have given explicit consent for specific processing activities</li>
                                <li><strong>Legal Obligations:</strong> Processing necessary to comply with legal requirements</li>
                            </ul>
                        </section>

                        {/* 5. Data Sharing and Disclosure */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">5. Data Sharing and Disclosure</h2>
                            <p className="mb-4">We may share your information in the following circumstances:</p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-4 mb-2">5.1 Service Providers</h3>
                            <p>We may share your information with third-party service providers who perform services on our behalf, including:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Cloud hosting and data storage providers</li>
                                <li>Analytics and performance monitoring services</li>
                                <li>Payment processors and billing services</li>
                                <li>Customer support platforms</li>
                                <li>Marketing and advertising partners</li>
                            </ul>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">5.2 Business Transfers</h3>
                            <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">5.3 Legal Requirements</h3>
                            <p>We may disclose your information if required by law, court order, or governmental authority, or to protect our rights, property, or safety.</p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">5.4 With Your Consent</h3>
                            <p>We may share your information with third parties when you have given us explicit consent to do so.</p>
                        </section>

                        {/* 6. Data Retention */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">6. Data Retention</h2>
                            <p>
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined
                                in this Privacy Policy, unless a longer retention period is required or permitted by law. When your
                                information is no longer needed, we will securely delete or anonymize it.
                            </p>
                        </section>

                        {/* 7. Data Security */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">7. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information
                                against unauthorized access, alteration, disclosure, or destruction. These measures include encryption,
                                secure servers, access controls, and regular security assessments.
                            </p>
                            <p className="mt-4">
                                However, no method of transmission over the internet or electronic storage is 100% secure. While we
                                strive to protect your personal information, we cannot guarantee its absolute security.
                            </p>
                        </section>

                        {/* 8. Your Rights */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">8. Your Rights and Choices</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights:</p>

                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                                <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
                                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
                            </ul>

                            <p className="mt-4">
                                To exercise any of these rights, please contact us at <a href="mailto:support@avajora.com" className="text-blue-600 hover:underline">support@avajora.com</a>.
                                We will respond to your request within the timeframe required by applicable law.
                            </p>
                        </section>

                        {/* 9. Children's Privacy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">9. Children's Privacy</h2>
                            <p>
                                Our Services are not directed to children under the age of 13 (or the minimum age required in your
                                jurisdiction). We do not knowingly collect personal information from children under 13. If you are a
                                parent or guardian and believe your child has provided us with personal information, please contact us
                                at <a href="mailto:support@avajora.com" className="text-blue-600 hover:underline">support@avajora.com</a>, and we will delete such information.
                            </p>
                        </section>

                        {/* 10. International Data Transfers */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">10. International Data Transfers</h2>
                            <p>
                                Your information may be transferred to and processed in countries other than your country of residence.
                                These countries may have data protection laws that differ from those in your jurisdiction. We ensure
                                appropriate safeguards are in place to protect your information in accordance with this Privacy Policy
                                and applicable laws, including the use of Standard Contractual Clauses approved by the European Commission.
                            </p>
                        </section>

                        {/* 11. Cookies and Tracking Technologies */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">11. Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies, web beacons, and similar tracking technologies to collect information about your
                                browsing activities and preferences. Cookies are small data files stored on your device. You can
                                control cookies through your browser settings, but disabling cookies may limit your ability to use
                                certain features of our Services.
                            </p>
                            <p className="mt-4">
                                We use the following types of cookies:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li><strong>Essential Cookies:</strong> Necessary for the operation of our Services</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Services</li>
                                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                                <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements based on your interests</li>
                            </ul>
                        </section>

                        {/* 12. Third-Party Links */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">12. Third-Party Links</h2>
                            <p>
                                Our Services may contain links to third-party websites, applications, or services. We are not
                                responsible for the privacy practices of these third parties. We encourage you to read their
                                privacy policies before providing any information to them.
                            </p>
                        </section>

                        {/* 13. California Privacy Rights */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">13. California Privacy Rights (CCPA)</h2>
                            <p>
                                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Right to know what personal information we collect, use, and disclose</li>
                                <li>Right to request deletion of your personal information</li>
                                <li>Right to opt-out of the sale of your personal information (we do not sell personal information)</li>
                                <li>Right to non-discrimination for exercising your privacy rights</li>
                            </ul>
                            <p className="mt-4">
                                To exercise these rights, contact us at <a href="mailto:support@avajora.com" className="text-blue-600 hover:underline">support@avajora.com</a>.
                            </p>
                        </section>

                        {/* 14. Changes to Privacy Policy */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">14. Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices,
                                technologies, legal requirements, or other factors. We will notify you of any material changes
                                by posting the updated Privacy Policy on our website and updating the "Effective Date" at the
                                top of this page. Your continued use of our Services after such changes constitutes your
                                acceptance of the updated Privacy Policy.
                            </p>
                        </section>

                        {/* 15. Contact Us */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">15. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                                practices, please contact us:
                            </p>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <p className="font-medium text-lg mb-3">AVAJORA GAMES LTD</p>
                                <p>Email (General Support): <a href="mailto:support@avajora.com" className="text-blue-600 hover:underline">support@avajora.com</a></p>
                                <p>Email (Co-Founders):</p>
                                <p className="ml-4">Khader: <a href="mailto:khader@avajora.com" className="text-blue-600 hover:underline">khader@avajora.com</a></p>
                                <p className="ml-4">Amro: <a href="mailto:amro@avajora.com" className="text-blue-600 hover:underline">amro@avajora.com</a></p>
                                <p className="mt-3">Registered Address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                                <p>Company Registration Number: 17030540</p>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">
                                We will make every effort to respond to your inquiry within 30 days.
                            </p>
                        </section>

                        {/* Final Note */}
                        <section className="border-t pt-6 mt-8">
                            <p className="text-sm text-slate-600">
                                <strong>Last Updated:</strong> February 13, 2026<br />
                                Thank you for trusting AVAJORA GAMES LTD with your information. We are committed to protecting your privacy
                                and providing you with the best gaming experience possible.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}
