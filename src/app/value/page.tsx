import { Building, GraduationCap, Users } from "lucide-react";

export default function ValuePage() {
    const sections = [
        {
            title: "For Students",
            icon: GraduationCap,
            desc: "Gain unique skills and experiences that distinguish you in the job market.",
            points: [
                "Real-world problem solving experience",
                "Mentorship from industry professionals",
                "Connection with cross-generational communities",
                "Official Age-Well Designer Certification",
            ],
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            title: "For Companies",
            icon: Building,
            desc: "Connect with high-potential talent and gain insights into the silver market.",
            points: [
                "Access to motivated student talent pool",
                "Collaborative R&D opportunities",
                "Branding as an Age-Well partner",
                "Employee training programs",
            ],
            color: "text-orange-600",
            bg: "bg-orange-50",
        },
        {
            title: "For Universities & Communities",
            icon: Users,
            desc: "Revitalize local areas and enhance educational value.",
            points: [
                "Practical education opportunities outside campus",
                "Intergenerational exchange promotion",
                "Regional revitalization projects",
                "Sustainable community building models",
            ],
            color: "text-green-600",
            bg: "bg-green-50",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Our Value</h1>
                <p className="text-muted-foreground text-lg">
                    Creating shared value for all stakeholders in the Age-Well ecosystem.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {sections.map((section, index) => (
                    <div key={index} className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-14 h-14 ${section.bg} ${section.color} rounded-lg flex items-center justify-center mb-6`}>
                            <section.icon size={28} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                        <p className="text-muted-foreground mb-8 min-h-[60px]">
                            {section.desc}
                        </p>
                        <ul className="space-y-3">
                            {section.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${section.color.replace('text', 'bg')}`} />
                                    <span className="text-sm">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
