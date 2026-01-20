import { Badge } from "@/components/ui/badge";

export default function CasePage() {
    const cases = [
        {
            title: "Community Cafe Project",
            category: "Regional Project",
            desc: "Students revitalized a local community center, increasing senior participation by 200%.",
            image: "bg-slate-200",
        },
        {
            title: "Digital Literacy Workshop",
            category: "Education",
            desc: "A student-led workshop helping seniors master smartphones and tablets.",
            image: "bg-slate-300",
        },
        {
            title: "Intergenerational Sports Day",
            category: "Event",
            desc: "Organized a sports event where 300+ participants from ages 10 to 80 competed together.",
            image: "bg-slate-200",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
                <p className="text-muted-foreground text-lg">
                    Discover how Age-Well Designers are making an impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className={`aspect-video rounded-lg mb-4 ${item.image} overflow-hidden`}>
                            {/* Image placeholder - would be real images later */}
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted group-hover:bg-muted/80 transition-colors">
                                Image
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                {item.category}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
