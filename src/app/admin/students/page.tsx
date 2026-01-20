
// However, auth.ts is not exporting prisma by default in a way we can use in server components easily if it hasn't been instantiated globally or we should just instantiate it. 
// Given the setup, let's instantiate PrismaClient or use a lib/prisma if we had one.
// We don't have lib/prisma.ts yet. Let's create one or just instantiate here for now.
import { PrismaClient } from "@prisma/client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function TopStudentsPage() {
    let users = [];
    try {
        users = await prisma.user.findMany({
            where: {
                role: "STUDENT",
            },
            include: {
                profile: true,
                _count: {
                    select: { activityLogs: true },
                },
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    } catch (error) {
        console.error("Failed to fetch students:", error);
        // Throwing error allows the error.tsx boundary to catch it
        throw new Error("Failed to load student data. Database might be unreachable.");
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Student Management</h1>
                    <p className="text-muted-foreground">
                        Manage student accounts and view their progress.
                    </p>
                </div>
                <Button>Export CSV</Button>
            </div>

            <div className="flex items-center gap-2 max-w-sm">
                <Input placeholder="Search students..." />
                <Button size="icon" variant="ghost">
                    <Search size={20} />
                </Button>
            </div>

            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>University / Grade</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Activities</TableHead>
                            <TableHead>Registered</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">
                                    <div className="flex flex-col">
                                        <span>{user.name}</span>
                                        <span className="text-xs text-muted-foreground">{user.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {user.profile?.university ? (
                                        <div className="flex flex-col">
                                            <span>{user.profile.university}</span>
                                            <span className="text-xs text-muted-foreground">{user.profile.grade}</span>
                                        </div>
                                    ) : (
                                        <span className="text-muted-foreground italic">Not set</span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Active</Badge>
                                </TableCell>
                                <TableCell>{user._count.activityLogs} logs</TableCell>
                                <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>View details</DropdownMenuItem>
                                            <DropdownMenuItem>Edit profile</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-destructive">
                                                Deactivate account
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                        {users.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                    No students found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
