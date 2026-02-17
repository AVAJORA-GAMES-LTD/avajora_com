import Image from "next/image";

export default function PlayStoreSection() {
    return (
        <section
            className="h-screen flex items-center justify-center px-4"
            style={{
                backgroundColor: "#08fe8a",
                backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.3) 2px, transparent 2px), linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 2px, transparent 2px)",
                backgroundSize: "60px 60px"
            }}
        >
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                    Download Our Games
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-black max-w-2xl mx-auto">
                    Play our mobile games on Android devices. Available now on the Google Play Store.
                </p>
                <div className="flex justify-center pt-6">
                    <a
                        href="https://play.google.com/store/apps/dev?id=6769319870657320087"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Get it on Google Play"
                        className="inline-block hover:scale-105 transition-transform duration-200"
                    >
                        <Image
                            src="https://res.cloudinary.com/destej60y/image/upload/v1771346830/Store_Google_Play_Type_Dark_Language_English_1_buber3.svg"
                            alt="Get it on Google Play"
                            width={200}
                            height={60}
                            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
