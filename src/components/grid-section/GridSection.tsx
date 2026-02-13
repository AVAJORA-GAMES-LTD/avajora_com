import Link from "next/link";

export default function GridSection() {
    return (
        <section
            className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 relative"
            style={{
                backgroundColor: '#5DDEF4',
                backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 2px, transparent 2px)
        `,
                backgroundSize: '60px 60px'
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-6 sm:space-y-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-sans font-bold text-black leading-tight px-2">
                        Fun that fits your day.
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans text-black/90 px-2">
                        Pick up, play, smile — anytime.
                    </p>
                    <div className="pt-4 sm:pt-6 md:pt-8">
                        <Link
                            href="/about-us"
                            className="inline-flex bg-black text-white px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-bold hover:bg-gray-800 transition-colors shadow-xl touch-manipulation"
                        >
                            About us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
