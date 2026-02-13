import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Gauge, Rocket, Sparkles, Users, type LucideIcon } from "lucide-react";

type ValueCard = {
    title: string;
    description: string;
    icon: LucideIcon;
};

const valueCards: ValueCard[] = [
    {
        title: "Player-First Strategy",
        description: "We design around real player behavior — not assumptions.",
        icon: Users,
    },
    {
        title: "Fast Shipping, Faster Learning",
        description: "We release early, learn quickly, and iterate relentlessly.",
        icon: Rocket,
    },
    {
        title: "Polished UX by Default",
        description: "Clean UI, smooth controls, clear goals, zero confusion.",
        icon: Sparkles,
    },
    {
        title: "Optimized Casual Design",
        description: "Simple to start, satisfying to replay, tuned for short sessions.",
        icon: Gauge,
    },
];

const founders = [
    {
        name: "Khader — Co-Founder",
        image:
            "https://res.cloudinary.com/destej60y/image/upload/v1770943950/Gemini_Generated_Image_m3ra2em3ra2em3ra_stwj9a.png",
        bio: "Engineering + Product. Focused on systems, shipping, and building smooth player experiences — from gameplay loops to release pipelines.",
        email: "khader@avajora.com",
        frameBgClass: "bg-[#e0b68d]",
    },
    {
        name: "Amro — Co-Founder",
        image:
            "https://res.cloudinary.com/destej60y/image/upload/v1770944061/Gemini_Generated_Image_rwsa17rwsa17rwsa3_kdlbnk.png",
        bio: "Game design + production. Focused on gameplay feel, visuals, and turning concepts into fun, replayable mobile experiences.",
        email: "amro@avajora.com",
        frameBgClass: "bg-[#e4bb90]",
    },
];

export default function AboutUsPage() {
    return (
        <>
            <Navbar />
            <main className="about-page-bg min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4">
                <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12 md:space-y-14">
                    <section className="bg-black/85 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm shadow-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 sm:mb-8">About Avajora Games</h1>
                        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
                            <p>
                                We’re Khader and Amro — two entrepreneurs building casual mobile games with a simple obsession: make every tap feel good.
                            </p>
                            <p>
                                We focus on player-first design, fast iteration, and polished UX. We ship, measure, listen to feedback, and improve continuously — because great casual games aren’t “finished”, they’re refined.
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold">Our mission:</p>
                            <p className="text-lg sm:text-xl md:text-2xl text-white">
                                Ship casual games that feel smooth, fair, and instantly fun.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-black mb-6 sm:mb-8">How We Build</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {valueCards.map((card) => {
                                const Icon = card.icon;

                                return (
                                    <article
                                        key={card.title}
                                        className="rounded-xl sm:rounded-2xl bg-[#00071e]/95 text-white p-5 sm:p-6 border border-white/10 shadow-xl"
                                    >
                                        <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 border border-white/20">
                                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#08fe8a]" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">{card.title}</h3>
                                        <p className="text-sm sm:text-base text-white/85 leading-relaxed">{card.description}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-black mb-6 sm:mb-8">Founders</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {founders.map((founder) => (
                                <article
                                    key={founder.name}
                                    className="rounded-2xl sm:rounded-3xl bg-black/90 text-white p-5 sm:p-6 md:p-8 backdrop-blur-sm shadow-2xl"
                                >
                                    <div className={`relative h-60 sm:h-72 w-full overflow-hidden rounded-xl sm:rounded-2xl mb-5 sm:mb-6 ${founder.frameBgClass}`}>
                                        <Image
                                            src={founder.image}
                                            alt={founder.name}
                                            fill
                                            className="object-contain object-center"
                                        />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">{founder.name}</h3>
                                    <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-3 sm:mb-4">{founder.bio}</p>
                                    <a
                                        href={`mailto:${founder.email}`}
                                        className="inline-flex rounded-full bg-white px-4 sm:px-5 py-2 text-sm sm:text-base text-black hover:bg-[#08fe8a] transition-colors touch-manipulation"
                                    >
                                        {founder.email}
                                    </a>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="bg-[#00071e]/95 text-white rounded-3xl p-8 md:p-10 shadow-2xl text-center space-y-5">
                        <p className="text-lg md:text-xl leading-relaxed">
                            We’re building a casual-first studio where quality is a habit: ship → learn → improve. Over time, we aim to release multiple titles and grow a recognizable standard of “Avajora Games”.
                        </p>
                        <h2 className="text-3xl md:text-4xl">Let’s talk</h2>
                        <p className="text-white/85">For business inquiries, partnerships, or feedback:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="mailto:khader@avajora.com"
                                className="inline-flex rounded-full bg-white px-6 py-3 text-black hover:bg-[#08fe8a] transition-colors"
                            >
                                Khader: khader@avajora.com
                            </a>
                            <a
                                href="mailto:amro@avajora.com"
                                className="inline-flex rounded-full bg-white px-6 py-3 text-black hover:bg-[#08fe8a] transition-colors"
                            >
                                Amro: amro@avajora.com
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
