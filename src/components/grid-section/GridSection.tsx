import Link from "next/link";

export default function GridSection() {
    return (
        <section
            className="w-full py-32 px-4 relative"
            style={{
                backgroundColor: '#5DDEF4',
                backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 2px, transparent 2px)
        `,
                backgroundSize: '80px 80px'
            }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-8">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-black leading-tight px-4">
                        Fun that fits your day.
                    </h2>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-sans text-black/90 px-4">
                        Pick up, play, smile — anytime.
                    </p>
                    <div className="pt-8">
                        <Link
                            href="/about-us"
                            className="inline-flex bg-black text-white px-12 py-5 rounded-full text-2xl md:text-3xl font-sans font-bold hover:bg-gray-800 transition-colors shadow-xl"
                        >
                            About us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
