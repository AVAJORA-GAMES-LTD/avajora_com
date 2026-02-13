import { Navbar } from "@/components/navbar";

export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00071e] mb-3 sm:mb-4">Terms of Service</h1>
                    <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Last Updated: February 13, 2026</p>

                    <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
                        {/* Introduction */}
                        <section>
                            <p>
                                Welcome to AVAJORA GAMES LTD ("Avajora," "we," "us," or "our"). These Terms of Service
                                ("Terms") govern your access to and use of our mobile games, applications, websites, and
                                related services (collectively, the "Services").
                            </p>
                            <p className="mt-4">
                                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
                                If you do not agree to these Terms, please do not use our Services. We reserve the right to
                                update these Terms at any time, and your continued use of the Services after such changes
                                constitutes your acceptance of the revised Terms.
                            </p>
                        </section>

                        {/* 1. Company Information */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#00071e] mb-3 sm:mb-4">1. Company Information</h2>
                            <div className="bg-slate-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                                <p className="font-medium">AVAJORA GAMES LTD</p>
                                <p>Company Registration Number: 17030540</p>
                                <p>Registered Address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                                <p className="mt-2">Contact Email: <a href="mailto:support@avajora.com" className="text-blue-600 hover:underline">support@avajora.com</a></p>
                                <p>Co-Founders: <a href="mailto:khader@avajora.com" className="text-blue-600 hover:underline">khader@avajora.com</a> | <a href="mailto:amro@avajora.com" className="text-blue-600 hover:underline">amro@avajora.com</a></p>
                            </div>
                        </section>

                        {/* 2. Eligibility */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">2. Eligibility</h2>
                            <p>
                                You must be at least 13 years old to use our Services. If you are between 13 and 18 years old
                                (or the age of legal majority in your jurisdiction), you may only use the Services with the
                                consent and supervision of a parent or legal guardian who agrees to be bound by these Terms.
                            </p>
                            <p className="mt-4">
                                By using our Services, you represent and warrant that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>You meet the age requirements stated above</li>
                                <li>You have the legal capacity to enter into these Terms</li>
                                <li>You will comply with these Terms and all applicable laws and regulations</li>
                                <li>You have not been previously suspended or removed from the Services</li>
                            </ul>
                        </section>

                        {/* 3. Account Registration */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">3. Account Registration and Security</h2>

                            <h3 className="text-xl font-medium text-[#00071e] mt-4 mb-2">3.1 Account Creation</h3>
                            <p>
                                To access certain features of our Services, you may need to create an account. When creating
                                an account, you must provide accurate, complete, and current information. You are responsible
                                for maintaining the confidentiality of your account credentials and for all activities that
                                occur under your account.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">3.2 Account Security</h3>
                            <p>You agree to:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Choose a strong password and keep it confidential</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                                <li>Not share your account with others or allow others to access your account</li>
                                <li>Not create multiple accounts or use another person's account without permission</li>
                                <li>Not sell, transfer, or assign your account to another person</li>
                            </ul>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">3.3 Account Deletion</h3>
                            <p>
                                You may request deletion of your account at any time by contacting us at{" "}
                                <a href="mailto:support@avajora.com" className="text-blue-600 hover:underline">support@avajora.com</a>.
                                Upon account deletion, you will lose access to all associated data, virtual items, and in-game progress.
                            </p>
                        </section>

                        {/* 4. Use of Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">4. Use of Services</h2>

                            <h3 className="text-xl font-medium text-[#00071e] mt-4 mb-2">4.1 License Grant</h3>
                            <p>
                                Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
                                non-transferable, revocable license to access and use the Services for your personal,
                                non-commercial entertainment purposes.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">4.2 Restrictions</h3>
                            <p>You agree NOT to:</p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Use the Services for any commercial purpose or for the benefit of any third party</li>
                                <li>Modify, adapt, hack, or reverse engineer any part of the Services</li>
                                <li>Use cheats, exploits, automation software, bots, hacks, or any unauthorized third-party software</li>
                                <li>Access or attempt to access accounts, servers, or networks connected to the Services through unauthorized means</li>
                                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                                <li>Collect, harvest, or store personal information about other users</li>
                                <li>Use the Services for any illegal or unauthorized purpose</li>
                                <li>Upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                            </ul>
                        </section>

                        {/* 5. User Conduct */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">5. User Conduct and Community Guidelines</h2>
                            <p>
                                We strive to maintain a safe, respectful, and enjoyable environment for all users. You agree to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Treat other users with respect and courtesy</li>
                                <li>Not engage in harassment, bullying, hate speech, or discriminatory behavior</li>
                                <li>Not impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                                <li>Not spam, advertise, or solicit other users</li>
                                <li>Not share inappropriate, offensive, or explicit content</li>
                                <li>Comply with all applicable laws and regulations</li>
                            </ul>
                            <p className="mt-4">
                                We reserve the right to monitor user conduct and take action, including warnings, suspensions,
                                or permanent bans, for violations of these Terms or our community guidelines.
                            </p>
                        </section>

                        {/* 6. Virtual Items and In-App Purchases */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">6. Virtual Items and In-App Purchases</h2>

                            <h3 className="text-xl font-medium text-[#00071e] mt-4 mb-2">6.1 Virtual Items</h3>
                            <p>
                                Our Services may include virtual currencies, items, points, or other virtual goods
                                (collectively, "Virtual Items"). Virtual Items have no real-world value and cannot be
                                exchanged for real money or any item of real-world value. You do not own Virtual Items;
                                instead, you receive a limited license to use them within the Services.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">6.2 Purchases</h3>
                            <p>
                                You may purchase Virtual Items through in-app purchases or other payment methods. All purchases
                                are final and non-refundable except as required by applicable law or as stated in our refund policy.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">6.3 Pricing</h3>
                            <p>
                                We reserve the right to change the pricing of Virtual Items at any time. Prices shown in the
                                Services are in the currency of your app store or payment method and may include applicable taxes.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">6.4 Payment Processing</h3>
                            <p>
                                Payments are processed by third-party payment processors (such as Apple App Store or Google Play Store).
                                You agree to comply with the terms and conditions of these payment processors.
                            </p>
                        </section>

                        {/* 7. Intellectual Property */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">7. Intellectual Property Rights</h2>

                            <h3 className="text-xl font-medium text-[#00071e] mt-4 mb-2">7.1 Our Rights</h3>
                            <p>
                                All rights, title, and interest in and to the Services, including all content, features,
                                functionality, software, code, graphics, designs, trademarks, logos, and other materials,
                                are owned by Avajora or our licensors and are protected by copyright, trademark, patent,
                                trade secret, and other intellectual property laws.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">7.2 User-Generated Content</h3>
                            <p>
                                If you submit, post, or upload any content to the Services (such as messages, reviews, or
                                other materials), you grant Avajora a worldwide, non-exclusive, royalty-free, perpetual,
                                irrevocable, sublicensable, and transferable license to use, reproduce, modify, adapt,
                                publish, translate, distribute, and display such content in connection with the Services.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">7.3 Feedback</h3>
                            <p>
                                Any feedback, suggestions, or ideas you provide to us regarding the Services will be considered
                                non-confidential and non-proprietary. We may use such feedback without any obligation to you.
                            </p>
                        </section>

                        {/* 8. Third-Party Services */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">8. Third-Party Services and Links</h2>
                            <p>
                                Our Services may contain links to third-party websites, applications, or services, or may
                                integrate with third-party platforms (such as social media networks or advertising partners).
                                We are not responsible for the content, policies, or practices of any third-party services.
                                Your use of third-party services is at your own risk and subject to their terms and conditions.
                            </p>
                            <p className="mt-4">
                                We may use third-party analytics, advertising, and other service providers to improve and
                                monetize our Services. These third parties may collect information about your use of the Services
                                as described in our Privacy Policy.
                            </p>
                        </section>

                        {/* 9. Updates and Modifications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">9. Updates and Modifications to Services</h2>
                            <p>
                                We may update, modify, suspend, or discontinue any aspect of the Services at any time without
                                prior notice. We may also impose limits on certain features or restrict access to parts or all
                                of the Services. You agree that we will not be liable to you or any third party for any such
                                changes or discontinuation.
                            </p>
                            <p className="mt-4">
                                We may require you to download and install updates to continue using the Services. Some updates
                                may be installed automatically, and you consent to such automatic updates.
                            </p>
                        </section>

                        {/* 10. Disclaimers and Warranties */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">10. Disclaimers and Warranties</h2>
                            <p className="uppercase font-medium">
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                                FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICES WILL BE UNINTERRUPTED,
                                ERROR-FREE, OR SECURE.
                            </p>
                            <p className="mt-4">
                                We do not warrant that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>The Services will meet your requirements or expectations</li>
                                <li>The Services will be available at all times or at any particular time</li>
                                <li>Any errors or defects will be corrected</li>
                                <li>The Services are free of viruses or other harmful components</li>
                                <li>The results obtained from using the Services will be accurate or reliable</li>
                            </ul>
                        </section>

                        {/* 11. Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">11. Limitation of Liability</h2>
                            <p className="uppercase font-medium">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AVAJORA GAMES LTD, ITS
                                DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                                DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Your access to or use of (or inability to access or use) the Services</li>
                                <li>Any conduct or content of any third party on the Services</li>
                                <li>Any content obtained from the Services</li>
                                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                            </ul>
                            <p className="mt-4">
                                In no event shall our total liability to you for all claims relating to the Services exceed
                                the amount you paid to us in the twelve (12) months prior to the claim, or £100, whichever is greater.
                            </p>
                        </section>

                        {/* 12. Indemnification */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">12. Indemnification</h2>
                            <p>
                                You agree to indemnify, defend, and hold harmless Avajora Games Ltd, its affiliates, and their
                                respective directors, officers, employees, agents, and licensors from and against any claims,
                                liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising
                                out of or in connection with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Your violation of these Terms</li>
                                <li>Your violation of any law or the rights of a third party</li>
                                <li>Your use or misuse of the Services</li>
                                <li>Any content you submit, post, or upload to the Services</li>
                            </ul>
                        </section>

                        {/* 13. Termination */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">13. Termination</h2>
                            <p>
                                We may suspend or terminate your access to the Services at any time, with or without cause,
                                with or without notice, and without liability to you. Reasons for termination may include,
                                but are not limited to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                                <li>Breach of these Terms</li>
                                <li>Fraudulent or illegal activity</li>
                                <li>Behavior that harms other users or the Services</li>
                                <li>At our discretion for any reason</li>
                            </ul>
                            <p className="mt-4">
                                Upon termination, your right to use the Services will immediately cease. All provisions of
                                these Terms that by their nature should survive termination shall survive, including ownership
                                provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>
                        </section>

                        {/* 14. Dispute Resolution */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">14. Dispute Resolution and Governing Law</h2>

                            <h3 className="text-xl font-medium text-[#00071e] mt-4 mb-2">14.1 Governing Law</h3>
                            <p>
                                These Terms and your use of the Services shall be governed by and construed in accordance with
                                the laws of England and Wales, without regard to its conflict of law provisions.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">14.2 Dispute Resolution</h3>
                            <p>
                                Any dispute, controversy, or claim arising out of or relating to these Terms or the Services
                                shall first be attempted to be resolved through good faith negotiations. If we cannot resolve
                                the dispute informally, you agree that any legal action must be brought in the courts of England
                                and Wales, and you consent to the exclusive jurisdiction of such courts.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">14.3 Time Limitation</h3>
                            <p>
                                Any claim or cause of action arising out of or related to the Services must be filed within
                                one (1) year after such claim or cause of action arose, or it will be forever barred.
                            </p>
                        </section>

                        {/* 15. General Provisions */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">15. General Provisions</h2>

                            <h3 className="text-xl font-medium text-[#00071e] mt-4 mb-2">15.1 Entire Agreement</h3>
                            <p>
                                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                                Avajora regarding the Services and supersede any prior agreements or understandings.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">15.2 Amendments</h3>
                            <p>
                                We reserve the right to modify these Terms at any time. We will notify you of material changes
                                by posting the updated Terms on our website or in the Services. Your continued use of the Services
                                after such changes constitutes your acceptance of the revised Terms.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">15.3 Severability</h3>
                            <p>
                                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                                will continue in full force and effect.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">15.4 Waiver</h3>
                            <p>
                                Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such
                                right or provision.
                            </p>

                            <h3 className="text-xl font-medium text-[#00071e] mt-6 mb-2">15.5 Assignment</h3>
                            <p>
                                You may not assign or transfer these Terms or your rights under these Terms without our prior
                                written consent. We may assign these Terms without restriction.
                            </p>
                        </section>

                        {/* 16. Contact Information */}
                        <section>
                            <h2 className="text-2xl font-semibold text-[#00071e] mb-4">16. Contact Information</h2>
                            <p className="mb-4">
                                If you have any questions, concerns, or feedback regarding these Terms or the Services,
                                please contact us:
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
                                We will make every effort to respond to your inquiry within a reasonable timeframe.
                            </p>
                        </section>

                        {/* Final Note */}
                        <section className="border-t pt-6 mt-8">
                            <p className="text-sm text-slate-600">
                                <strong>Last Updated:</strong> February 13, 2026<br />

                                By using our Services, you acknowledge that you have read, understood, and agree to be bound by
                                these Terms of Service. Thank you for choosing AVAJORA GAMES LTD!
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}
