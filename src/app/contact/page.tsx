import { Navbar } from "@/components/navbar";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main
                className="min-h-screen pt-20 pb-16 px-4 relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/destej60y/image/upload/v1770941675/background_4_whua18.png')",
                }}
            >
                <div className="mx-auto max-w-6xl py-20">
                    <div className="text-center space-y-8">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black">
                            Get in touch.
                        </h1>

                        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black max-w-4xl mx-auto">
                            We&apos;d love to hear from you.
                        </p>

                        <div className="pt-8 space-y-6">
                            <div className="bg-black/90 backdrop-blur-sm text-white rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl">
                                <div className="space-y-8">
                                    <div className="space-y-4 text-center">
                                        <h2 className="text-3xl md:text-4xl font-bold">Contact Information</h2>
                                        <div className="h-1 w-24 bg-[#08fe8a] rounded-full mx-auto"></div>
                                    </div>

                                    <div className="space-y-6 text-lg">
                                        <div className="space-y-2">
                                            <p className="text-white uppercase tracking-wider text-sm font-semibold">Email</p>
                                            <a
                                                href="mailto:support@avajora.com"
                                                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xl md:text-2xl font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-white"
                                            >
                                                support@avajora.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
