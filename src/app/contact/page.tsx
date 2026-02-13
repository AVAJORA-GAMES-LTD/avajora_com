import { Navbar } from "@/components/navbar";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main
                className="min-h-screen pt-16 md:pt-20 pb-8 md:pb-12 px-4 relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/destej60y/image/upload/v1770941675/background_4_whua18.png')",
                }}
            >
                <div className="mx-auto max-w-6xl w-full">
                    <div className="text-center space-y-6 sm:space-y-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight px-2">
                            Get in touch.
                        </h1>

                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black max-w-4xl mx-auto px-2">
                            We&apos;d love to hear from you.
                        </p>

                        <div className="pt-4 sm:pt-6 md:pt-8 space-y-6">
                            <div className="bg-black/90 backdrop-blur-sm text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl mx-auto shadow-2xl">
                                <div className="space-y-6 sm:space-y-8">
                                    <div className="space-y-3 sm:space-y-4 text-center">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contact Information</h2>
                                        <div className="h-1 w-20 sm:w-24 bg-[#08fe8a] rounded-full mx-auto"></div>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
                                        <div className="space-y-2 flex flex-col items-center">
                                            <p className="text-white uppercase tracking-wider text-xs sm:text-sm font-semibold">Email</p>
                                            <a
                                                href="mailto:support@avajora.com"
                                                className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-white touch-manipulation"
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
