import React from "react";
import {
  Globe2,
  ShieldCheck,
  Wallet,
  LineChart,
  Users,
  Layers,
  DollarSign,
  Target,
  Compass,
  Smartphone,
} from "lucide-react";

export default function FitLinkGlobal() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-teal-900/40" />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 mb-6">
              <Globe2 className="h-4 w-4 text-teal-300" />
              <span className="text-xs tracking-wide text-teal-100">FitLink Global</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Global Platform for Trainers & Clients
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-200 max-w-2xl">
              Connect, train, and grow—anywhere in the world. A modern
              marketplace designed to match clients with certified personal
              trainers across the globe.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#clients"
                className="inline-flex items-center justify-center rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-medium px-6 py-3 transition shadow-lg shadow-teal-500/20"
              >
                Find a Trainer
              </a>
              <a
                href="#trainers"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 transition backdrop-blur-sm border border-white/15"
              >
                Become a Trainer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="clients"
        className="relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="For Clients"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-black/60 to-black/90" />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">For Clients</h2>
            <p className="mt-3 text-gray-200">
              Get personalized coaching from world-class trainers
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FrostedCard
              icon={<ShieldCheck className="h-6 w-6 text-teal-300" />}
              title="Hire certified trainers worldwide"
              desc="Work with vetted professionals across time zones for flexible, results-driven coaching."
            />
            <FrostedCard
              icon={<Target className="h-6 w-6 text-teal-300" />}
              title="Choose by goal, style, or budget"
              desc="Filter by specialties like strength, mobility, weight loss, or sport performance."
            />
            <FrostedCard
              icon={<LineChart className="h-6 w-6 text-teal-300" />}
              title="Track your progress online"
              desc="Stay accountable with sessions, metrics, and check-ins all in one place."
            />
          </div>
        </div>
      </section>

      <section
        id="trainers"
        className="relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6453399/pexels-photo-6453399.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="For Trainers"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-teal-900/50" />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">For Trainers</h2>
            <p className="mt-3 text-gray-200">Build your coaching business globally</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FrostedCard
              icon={<Globe2 className="h-6 w-6 text-teal-300" />}
              title="Get global clients"
              desc="Expand beyond your local market and connect with clients worldwide."
            />
            <FrostedCard
              icon={<Layers className="h-6 w-6 text-teal-300" />}
              title="All-in-one platform"
              desc="Scheduling, messaging, and client management designed for coaching."
            />
            <FrostedCard
              icon={<DollarSign className="h-6 w-6 text-teal-300" />}
              title="Set your own prices"
              desc="Flexible rates and packages so you stay in control of your business."
            />
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-black to-[#0a0f0f]">
        <div className="w-full max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why FitLink Global</h2>
            <p className="mt-3 text-gray-300">Simple, secure, and built for growth</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Bullet icon={<Compass className="h-5 w-5 text-teal-300" />} title="Global reach" desc="Find and work with top coaches, anywhere." />
            <Bullet icon={<Wallet className="h-5 w-5 text-teal-300" />} title="Secure payments" desc="Protected transactions with transparent pricing." />
            <Bullet icon={<Smartphone className="h-5 w-5 text-teal-300" />} title="Online coaching tools" desc="Chat, scheduling, and session tracking." />
            <Bullet icon={<Users className="h-5 w-5 text-teal-300" />} title="Future add-ons" desc="Calorie tracker, progress dashboard, and more." />
          </div>
        </div>
      </section>

      <section
        className="relative"
        aria-label="Call to action"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Ready to start your fitness journey?
            </h3>
            <p className="mt-2 text-gray-300">
              Join FitLink Global today. Whether you’re finding a trainer or
              growing your coaching business, we’re here to help you succeed.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-medium px-6 py-3 transition shadow-lg shadow-teal-500/20"
            >
              Find a Trainer
            </a>
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 transition backdrop-blur-sm border border-white/15"
            >
              Apply as Trainer
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-400 to-teal-600" />
            <span className="font-semibold tracking-wide">FitLink Global</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FitLink Global. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FrostedCard({ icon, title, desc }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-gray-50/20 backdrop-blur-sm p-5 transition hover:bg-gray-50/25 hover:border-white/20">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/5 pointer-events-none" />
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 border border-white/10">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="mt-1 text-sm text-gray-200/90">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Bullet({ icon, title, desc }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="mt-1 text-sm text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}
