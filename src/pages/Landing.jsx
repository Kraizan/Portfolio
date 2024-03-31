import React from "react";

export function Landing() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center w-full min-h-screen antialiased rounded-md"
    >
      <div className="p-4 mx-auto">
        <h2 className="relative z-10 max-w-2xl mx-auto my-2 font-bold text-center lg:pt-12 text-md lg:text-3xl text-neutral-500">
          Hi, I'm
        </h2>
        <h1 className="relative z-10 py-3 text-5xl font-bold text-center text-transparent lg:text-9xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500">
          VANSHAJ
          <br />
          BHATNAGAR
        </h1>
        <p className="relative z-10 max-w-xs mx-auto my-2 font-semibold text-center lg:max-w-2xl text-md lg:text-3xl text-neutral-500">
          Software Engineer, Full Stack Developer, Competitive Programmer, and a
          Tech Enthusiast.
        </p>
        <button
          className="relative block p-[2px] mx-auto mt-8 lg:mt-16 font-semibold leading-6 text-white no-underline rounded-full shadow-2xl cursor-pointer bg-slate-800 group shadow-zinc-900 text-sm lg:text-xl lg:my-8"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1sCgzj-_nevu6Z3MpKNf5c9dfb8L21Bar"
            );
          }}
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(100%_100%_at_50%_0%,rgba(24,204,253,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center px-8 py-2 space-x-2 rounded-full lg:py-3 lg:px-10 bg-zinc-950 ring-1 ring-white/10 ">
            <span>View Resume &#8680;</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-4 w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#6344F5]/0 via-[#6344F5]/90 to-[#6344F5]/0 transition-opacity duration-500 group-hover:opacity-50"></span>
        </button>
      </div>
    </section>
  );
}
