import Image from "next/image";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-8 max-w-sm">
            <div className="mb-6 w-28 h-28 flex items-center justify-center">
                <Image
                    src={icon}
                    alt={title}
                    width={112}
                    height={112}
                    className="object-contain"
                />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-black mb-4">
                {title}
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">
                {description}
            </p>
        </div>
    );
}
