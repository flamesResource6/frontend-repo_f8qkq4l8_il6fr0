import React from "react";
import { SplineScene } from "../components/ui/splite";
import { Card } from "../components/ui/Card";
import { Spotlight } from "../components/ui/spotlight";

export default function LandingAthlyGlobal() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Athly Global
          </h1>
          <p className="mt-3 text-neutral-300 max-w-2xl">
            The modern marketplace connecting clients and elite trainers worldwide.
          </p>
        </div>
        <SplineSceneBasic />
      </section>
    </div>
  );
}

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex h-full">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture attention and enhance your design.
          </p>
        </div>
        <div className="flex-1 relative">
          <SplineScene scene="https://prod.spline.design/g3YWrPw7TMAE46gh/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>
  );
}
