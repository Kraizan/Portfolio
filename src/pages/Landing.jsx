import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export function Landing() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen antialiased rounded-md bg-neutral-950">
      <div className="max-w-2xl p-4 mx-auto">
        <h2 className="relative z-10 max-w-lg mx-auto my-2 text-2xl font-bold text-center text-neutral-500">
          Hi, I'm
        </h2>
        <h1 className="relative z-10 py-3 text-3xl font-bold text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">
          VANSHAJ
          <br />
          BHATNAGAR
        </h1>
        <p className="relative z-10 max-w-lg mx-auto my-2 font-semibold text-center text-neutral-500 text-md">
          Software Engineer, Full Stack Developer, Competitive Programmer, and a
          Tech Enthusiast.
        </p>
        <button className="relative block p-px mx-auto mt-16 font-semibold leading-6 text-white no-underline rounded-full shadow-2xl cursor-pointer bg-slate-800 group shadow-zinc-900 text-md lg:text-xl lg:my-8">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-10 py-3 space-x-2 rounded-full bg-zinc-950 ring-1 ring-white/10 ">
            <span>{`Let's Connect`}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
