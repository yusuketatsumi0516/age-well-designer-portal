"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    Users,
    BookOpen,
    FileText,
    LogOut,
    Menu,
    X,
    Settings
} from "lucide-react";
import { useState } from "react";
import { signOut } from "next-auth/react";

const sidebarItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Students", href: "/admin/students", icon: Users },
    { name: "Programs", href: "/admin/programs", icon: BookOpen },
    { name: "Activity Logs", href: "/admin/activities", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-muted/20 flex">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 flex-col border-r bg-background fixed inset-y-0 z-30">
                <div className="h-16 flex items-center px-6 border-b bg-primary/5">
                    <Link href="/" className="font-bold text-lg text-primary">
                        Age-Well Admin
                    </Link>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                pathname === item.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <item.icon size={18} />
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >
                        <LogOut size={18} className="mr-2" />
                        Log Out
                    </Button>
                </div>
            </aside>

            {/* Mobile Header & Overlay */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <header className="h-16 border-b bg-background flex items-center justify-between px-4 md:px-8 sticky top-0 z-20">
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                            ADMINISTRATOR
                        </div>
                    </div>
                </header>

                {/* Mobile Sidebar Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden flex">
                        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                        <div className="relative w-64 bg-background border-r flex flex-col h-full animate-slide-in-from-left">
                            <div className="h-16 flex items-center justify-between px-6 border-b bg-primary/5">
                                <span className="font-bold text-lg text-primary">Admin Menu</span>
                                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                                    <X size={20} />
                                </Button>
                            </div>
                            <nav className="flex-1 p-4 space-y-1">
                                {sidebarItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                            pathname === item.href
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="p-4 border-t">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                >
                                    <LogOut size={18} className="mr-2" />
                                    Log Out
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
