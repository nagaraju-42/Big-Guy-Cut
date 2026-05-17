"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/reference/hero-salon.png"
          alt="Crowded modern salon with THE BIG GUY mobile queue interface"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-8 py-12 lg:grid-cols-[1fr_440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
            <Star className="mr-1 h-3 w-3 fill-primary" />
            India&apos;s smart salon booking & live queue system
          </Badge>
          <h1 className="mt-7 text-balance text-5xl font-black leading-[0.96] tracking-normal sm:text-7xl lg:text-8xl">
            Skip The Queue. <span className="text-primary">Save Your Time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
            Book your slot, track live queues, and get served on time. Built for busy students and
            crowded college areas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/student/salons">
                Book a Salon Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              <Link href="/features">
                <PlayCircle className="h-5 w-5" /> Watch How It Works
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                <div className="text-2xl font-black text-primary">{stat.value}</div>
                <div className="mt-1 text-xs text-white/65">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto hidden w-full max-w-[420px] lg:block"
        >
          <div className="rounded-[2rem] border border-white/15 bg-slate-950/80 p-3 shadow-glow">
            <Image
              src="/reference/mobile-dark.png"
              alt="THE BIG GUY mobile queue app preview"
              width={720}
              height={900}
              className="rounded-[1.5rem]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
