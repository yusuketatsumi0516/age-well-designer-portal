import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Building, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b-border border-b-2">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero.png"
            alt="Community Interaction"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in drop-shadow-md">
            Design the Future of <span className="text-accent">Age-Well</span> Society
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 animate-slide-up drop-shadow-sm">
            Connect students, universities, companies, and communities to create a sustainable and vibrant aging society.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 w-full sm:w-auto" asChild>
              <Link href="/entry">
                Join the Network <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-black border-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Age-Well Designer Network</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are building a new infrastructure for society where multiple generations co-create value.
                By connecting ambitious students with forward-thinking companies and local communities,
                we foster innovation that addresses the challenges of an aging population.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <span className="font-medium">Student Growth & Certification</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Building size={20} />
                  </div>
                  <span className="font-medium">Corporate Innovation Partners</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Users size={20} />
                  </div>
                  <span className="font-medium">Community Revitalization</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/network.png"
                alt="Network Concept"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Journey to become an Age-Well Designer</h2>
            <p className="text-muted-foreground">Four steps to gain skills, experience, and certification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Join", desc: "Register your profile and enter the network.", icon: Users },
              { step: "02", title: "Learn", desc: "Take ZERO / BASIC training programs.", icon: BookOpen },
              { step: "03", title: "Act", desc: "Participate in festivals and community projects.", icon: Building },
              { step: "04", title: "Certify", desc: "Get certified and connect with career opportunities.", icon: GraduationCap },
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-primary group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/program">View Detailed Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats / Impact (Placeholder for now, maybe add later) */}
    </main>
  );
}
