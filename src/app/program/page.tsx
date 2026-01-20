import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ProgramPage() {
    const steps = [
        {
            id: "01",
            title: "Register & Onboarding",
            desc: "Create your profile and understand the core values of Age-Well Designer.",
            details: ["Profile Registration", "Orientation Video", "Community Access"],
        },
        {
            id: "02",
            title: "Training (ZERO / BASIC)",
            desc: "Learn the fundamentals of gerontology, design thinking, and community engagement.",
            details: ["e-Learning Modules", "Workshop Sessions", "Mentoring"],
        },
        {
            id: "03",
            title: "Practical Application",
            desc: "Join real-world projects, festivals, and community labs.",
            details: ["Local Festivals", "Project Planning", "Fieldwork"],
        },
        {
            id: "04",
            title: "Certification & Career",
            desc: "Receive certification and connect with partner companies for career opportunities.",
            details: ["Certification Exam", "Portfolio Review", "Corporate Matching"],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Program Curriculum</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A comprehensive journey from understanding the basics to leading social change.
                </p>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8 bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                                {step.id}
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                            <p className="text-muted-foreground mb-6">{step.desc}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {step.details.map((detail, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 size={16} className="text-accent" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="mb-6 text-lg">Ready to start your journey?</p>
                <Button size="lg" asChild>
                    <a href="/entry">Apply Now</a>
                </Button>
            </div>
        </div>
    );
}
