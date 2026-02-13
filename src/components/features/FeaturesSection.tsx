import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
    const features = [
        {
            icon: "https://res.cloudinary.com/destej60y/image/upload/v1770938880/hot-zone_1_q1enzi.png",
            title: "Always Free to Play",
            description: "Keep playing without paying.",
        },
        {
            icon: "https://res.cloudinary.com/destej60y/image/upload/v1770938880/bounty_1_vyxfin.png",
            title: "Android & iOS",
            description: "Available on both platforms - smooth, consistent gameplay across devices.",
        },
        {
            icon: "https://res.cloudinary.com/destej60y/image/upload/v1770938955/diamond-purple_1_sa4s3i.svg",
            title: "Casual-First by Design",
            description: "Built for everyone. Quick to learn, satisfying to replay, and instantly fun.",
        },
    ];

    return (
        <section className="w-full bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
