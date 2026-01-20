import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto py-8 px-4 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <span className="text-lg font-bold text-primary">
                            Age-Well Designer
                        </span>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Empowering the next generation to design an age-well society.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Links</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/about" className="hover:text-primary">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/program" className="hover:text-primary">
                                    Program
                                </Link>
                            </li>
                            <li>
                                <Link href="/value" className="hover:text-primary">
                                    Value
                                </Link>
                            </li>
                            <li>
                                <Link href="/case" className="hover:text-primary">
                                    Case
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Legal</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/privacy" className="hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-primary">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} AgeWellJapan. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
