"use client";
import BackgroundGradientDemo from "@/components/example/background-gradient-demo";
import GlobeDemo from "@/components/example/globe-demo";
import ImagesSliderDemo from "@/components/example/images-slider-demo";
import InfiniteMovingCardsDemo from "@/components/example/infinite-moving-cards-demo";
import { Navbar } from "@/components/example/navbar-menu-demo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  const words = `we are working on this field from the last 15 years as an software developement`;
  return (
    <AuroraBackground>
      <div className="relative">
        <Navbar />
        {/* <div >
          <ImagesSliderDemo />
        </div> */}

        <HeroHighlight className="bg-transparent">
          <h1 className=" text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
            With insomnia, nothing&apos;s real. Everything is far away.
            Everything is a{" "}
            <Highlight className="text-black dark:text-white">
              copy, of a copy, of a copy.
            </Highlight>
          </h1>
          <TextGenerateEffect words={words} />
        </HeroHighlight>
        <div className=" flex justify-center items-center px-4">
          <div className="text-4xl md:text-6xl font-bold mb-8 mt-4 relative text-center text-zinc-700 max-w-6xl mx-auto !leading-snug ">
            Buy
            <FlipWords words={["Product 1", "Product 2", "Product 3"]} /> <br />
            <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] z-10">
              with Aceternity
            </span>
          </div>
        </div>

        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <h2 className="text-zinc-50 text-2xl md:text-6xl font-bold text-center">
              The hell is this?
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              This is chemical burn. It&apos;ll hurt more than you&apos;ve ever
              been burned and you&apos;ll have a scar.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Contact Us
              </button>
            </div>
          </Vortex>
        </div>
        <div className=" w-full bg-transparent flex flex-col items-center justify-center w-100 overflow-hidden ">
          <h1 className="md:text-3xl text-3xl lg:text-3xl font-bold text-center text-neutral-700 relative z-20">
            Aceternity
          </h1>
          <div className="w-[42rem] h-20 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#000"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className="mt-4 text-base w-fit mx-auto bg-black text-zinc-50 rounded-full shadow-xl px-6 py-2">
          ✨ Range of products ✨
        </div>
        <div className="w-100  md:w-1/3">
        <BackgroundGradientDemo />

        </div>
        <InfiniteMovingCardsDemo />

        <GlobeDemo />
      </div>
    </AuroraBackground>
  );
}
