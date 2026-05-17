import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <main className="container grid gap-8 py-16 lg:grid-cols-[.8fr_1fr]">
      <div>
        <h1 className="text-5xl font-black tracking-normal">Bring THE BIG GUY to your salon lane.</h1>
        <p className="mt-4 text-muted-foreground">For pilots, partner salons, student ambassador programs, and local operations.</p>
        <div className="mt-8 space-y-4 text-white/70">
          <p className="flex gap-3"><Mail className="h-5 w-5 text-primary" /> hello@thebigguy.app</p>
          <p className="flex gap-3"><Phone className="h-5 w-5 text-primary" /> +91 90000 00000</p>
          <p className="flex gap-3"><MapPin className="h-5 w-5 text-primary" /> Delhi student markets</p>
        </div>
      </div>
      <Card className="border-white/10 bg-white/[0.04] p-6 shadow-none">
        <div className="grid gap-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Salon / College area" />
          <textarea className="min-h-32 rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="What do you want to build with us?" />
          <Button>Send Message</Button>
        </div>
      </Card>
    </main>
  );
}
