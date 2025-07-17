import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { ColourfulText } from "./ui/colourful-text";

function HeroSection() {
  return (
    <div
      className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center" >
        <h1
          className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Code. Create. Innovate.</h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >Hi, I’m <ColourfulText text="Neeraj Chouhan" />, a passionate web developer dedicated to delivering clean, functional, and beautiful websites.</p>
        <div className="mt-4">
          <a href='/resume.pdf' target="_blank">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Download Resume
            </Button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default HeroSection