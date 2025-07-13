"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Form } from "./Form";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-3xl mx-auto pb-40">
      <div>
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Contact Me
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Have a project in mind? Let’s make it happen.
        </p>
      </div>
    </WavyBackground>
  );
}
