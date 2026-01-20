import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function ProgramsPage() {
    const programs = [
        {
            id: "p1",
            title: "Age-Well Basic Training",
            desc: "Fundamental course on gerontology and communication.",
            status: "In Progress",
            progress: 25,
            tags: ["Required", "Online"],
        },
        {
            id: "p2",
            title: "Design Thinking for Social Impact",
            desc: "Learn how to apply design thinking to social problems.",
            status: "Available",
            progress: 0,
            tags: ["Elective", "Workshop"],
        },
        {
            id: "p3",
            title: "Community Festival Project 2024",
            desc: "Join the organizing team for the annual intergenerational festival.",
            status: "Coming Soon",
            progress: 0,
            tags: ["Project", "Fieldwork"],
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Programs</h1>
                <p className="text-muted-foreground">
                    Browse and manage your participation in training and projects.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program) => (
                    <Card key={program.id} className="flex flex-col">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex gap-2">
                                    {program.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                    ))}
                                </div>
                                {program.status === "In Progress" && <Badge>Active</Badge>}
                            </div>
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                            <CardDescription>{program.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            {program.status === "In Progress" && (
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Progress</span>
                                        <span>{program.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{ width: `${program.progress}%` }} />
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant={program.status === "In Progress" ? "default" : "outline"} disabled={program.status === "Coming Soon"}>
                                {program.status === "In Progress" ? "Continue Learning" : program.status === "Coming Soon" ? "Not Open Yet" : "Start Program"}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
