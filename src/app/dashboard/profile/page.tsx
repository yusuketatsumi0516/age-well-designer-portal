import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
                <p className="text-muted-foreground">
                    Manage your account settings and preferences.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>
                        Your profile information visible to the network.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue="Student Demo" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="demo@example.com" disabled />
                            <p className="text-xs text-muted-foreground">Please contact support to change your email.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="university">University</Label>
                                <Input id="university" defaultValue="Keio University" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="grade">Grade</Label>
                                <Input id="grade" defaultValue="3rd Year" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="motivation">Motivation & Goals</Label>
                            <Textarea
                                id="motivation"
                                className="min-h-[120px]"
                                defaultValue="I want to learn how to design services that bridge the gap between generations. I am particularly interested in community health and social participation of the elderly."
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Availability</CardTitle>
                    <CardDescription>
                        Let us know when you are available for activities.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Label htmlFor="hours">Weekly Available Hours</Label>
                        <Input id="hours" defaultValue="5-10 hours/week" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
