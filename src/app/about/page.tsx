import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            {/* Vision Section */}
            <section className="max-w-4xl mx-auto mb-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Why Age-Well Designer Network?</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Japan is facing a super-aging society. Rather than viewing this as a problem,
                    we see it as an opportunity to redesign society. The Age-Well Designer Network
                    is an ecosystem where the youth (students) and the experience of the elderly
                    intersect to create new value.
                </p>
            </section>

            {/* Structure Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="bg-muted p-8 rounded-2xl">
                    {/* Placeholder for a diagram/image */}
                    <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                        Structure Diagram
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">Designing a Cycle of Value</h2>
                    <ul className="space-y-6">
                        <li>
                            <h3 className="text-xl font-semibold mb-2">Connecting Generations</h3>
                            <p className="text-muted-foreground">
                                Bridging the gap between university students and local seniors to foster mutual learning.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold mb-2">Regional Revitalization</h3>
                            <p className="text-muted-foreground">
                                Turning local communities into hubs of innovation and well-being.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold mb-2">Talent Development</h3>
                            <p className="text-muted-foreground">
                                Nurturing the next generation of leaders who understand the complexities of an aging society.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Operating Body */}
            <section className="border-t pt-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Operated by AgeWellJapan</h2>
                    <p className="text-muted-foreground mb-8">
                        AgeWellJapan is dedicated to creating a society where everyone can live with vitality and purpose, regardless of age.
                    </p>
                    <Button variant="outline" asChild>
                        <a href="https://agewelljapan.co.jp/" target="_blank" rel="noopener noreferrer">
                            Visit Official Corporate Site
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
