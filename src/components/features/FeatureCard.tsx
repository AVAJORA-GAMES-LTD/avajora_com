import Image from "next/image";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-8 mx-auto max-w-sm">
            <div className="mb-4 sm:mb-5 md:mb-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                <Image
                    src={icon}
                    alt={title}
                    width={112}
                    height={112}
                    className="object-contain w-full h-full"
                />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-black mb-3 sm:mb-4">
                {title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">
                {description}
            </p>
        </div>
    );
}
