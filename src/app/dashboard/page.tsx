import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back, Student Demo. Here is your progress overview.
                </p>
            </div>

            {/* Metrics */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Active Hours</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12.5 hrs</div>
                        <p className="text-xs text-muted-foreground">+2.5h from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Programs Completed</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1 / 4</div>
                        <p className="text-xs text-muted-foreground">Next: Basic Training</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Certification Status</CardTitle>
                        <Badge variant="secondary">In Progress</Badge>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Level 1</div>
                        <div className="h-2 w-full bg-muted mt-2 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[25%]" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Active Program */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Current Program</CardTitle>
                        <CardDescription>You are currently enrolled in the following program.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between border p-4 rounded-lg bg-card hover:bg-accent/5 transition-colors">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Badge>Training</Badge>
                                    <h3 className="font-semibold">Age-Well Basic Training</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">Learn the fundamentals of communication with seniors.</p>
                            </div>
                            <Button size="sm" variant="outline">
                                Continue <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
