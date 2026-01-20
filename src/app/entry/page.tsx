"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function EntryPage() {
    const [submitted, setSubmitted] = useState(false);

    // Placeholder submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to backend API
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h1 className="text-3xl font-bold mb-4">Application Received</h1>
                <p className="text-muted-foreground max-w-md mb-8">
                    Thank you for applying to the Age-Well Designer Network. We will review your application and contact you shortly.
                </p>
                <Button asChild>
                    <a href="/">Return to Home</a>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 max-w-2xl">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Join the Network</h1>
                <p className="text-muted-foreground">
                    Apply to become an Age-Well Designer.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 border p-8 rounded-xl shadow-sm bg-card">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Full Name
                    </label>
                    <input
                        id="name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Taro Yamada"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="taro@example.com"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="university" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            University
                        </label>
                        <input
                            id="university"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="University Name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="grade" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Grade / Year
                        </label>
                        <select
                            id="grade"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option>1st Year</option>
                            <option>2nd Year</option>
                            <option>3rd Year</option>
                            <option>4th Year</option>
                            <option>Graduate</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="motivation" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Motivation / Why do you want to join?
                    </label>
                    <textarea
                        id="motivation"
                        required
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your interest in the Age-Well Designer Network..."
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" required className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to the <a href="/terms" className="underline underline-offset-4 hover:text-primary">Terms of Service</a> and <a href="/privacy" className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>.
                    </label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                    Submit Application
                </Button>
            </form>
        </div>
    );
}
