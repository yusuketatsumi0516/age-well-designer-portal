import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function ActivitiesPage() {
    const activities = [
        {
            id: 1,
            date: "2024-03-10",
            program: "Age-Well Basic Training",
            content: "Completed Module 1: Introduction to Gerontology",
            hours: 1.5,
        },
        {
            id: 2,
            date: "2024-03-12",
            program: "Age-Well Basic Training",
            content: "Attended online kickoff meeting.",
            hours: 1.0,
        },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Activity Log</h1>
                    <p className="text-muted-foreground">
                        Track your hours and reflections.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Log Activity
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent History</CardTitle>
                    <CardDescription>
                        Your activity history for this month.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <div className="grid grid-cols-12 border-b bg-muted/40 p-4 text-sm font-medium">
                            <div className="col-span-3">Date</div>
                            <div className="col-span-4">Program / Project</div>
                            <div className="col-span-4">Content</div>
                            <div className="col-span-1 text-right">Hours</div>
                        </div>
                        {activities.map((activity) => (
                            <div key={activity.id} className="grid grid-cols-12 p-4 text-sm items-center border-b last:border-0 hover:bg-muted/10">
                                <div className="col-span-3 text-muted-foreground">{activity.date}</div>
                                <div className="col-span-4 font-medium">{activity.program}</div>
                                <div className="col-span-4 text-muted-foreground truncate">{activity.content}</div>
                                <div className="col-span-1 text-right font-bold">{activity.hours}h</div>
                            </div>
                        ))}
                        {activities.length === 0 && (
                            <div className="p-8 text-center text-muted-foreground">
                                No activities logged yet.
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
