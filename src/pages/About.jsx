import React from "react";

function About() {
  return (
    <section
      id="about"
      className="z-50 flex flex-col items-center py-4 lg:py-10"
    >
      <div className="rounded-3xl border-[2px] border-[#66c6e0] p-4 lg:p-20 flex flex-col w-full lg:flex-row lg:gap-20">
        <img
          src="1shaj.png"
          alt="vanshaj bhatnagar"
          className="self-center object-cover w-full mb-4 lg:w-1/2 rounded-3xl lg:mb-0"
        />
        <div className="text-sm text-center lg:text-lg lg:text-justify">
          <p className="mb-4 text-neutral-300">
            Hey there! Thanks for stopping by. I'm Vanshaj Bhatnagar,
            affectionately known as the Chief Debugger and Coffee Connoisseur
            around here.
          </p>
          <p className="mb-4 text-neutral-300">
            As a full-stack developer, I spend my days coding up a storm and my
            nights dreaming in JavaScript. When I'm not battling bugs or
            wrangling code, you can find me searching for the perfect cup of
            coffee or pondering the mysteries of the universe.
          </p>
          <p className="mb-4 text-neutral-300">
            I thrive on challenges and love turning ideas into reality. From
            crafting pixel-perfect UIs to architecting scalable backend systems,
            I'm always up for an adventure in the world of technology.
          </p>
          <p className="mb-4 text-neutral-300">
            Outside of coding, you might catch me attempting to juggle, trying
            to master the art of cooking, or debating whether cats or dogs make
            better companions (it's a tough call!).
          </p>
          <p className="text-neutral-300">
            So whether you're here for the code, the coffee, or just a good
            laugh, I'm glad you've found your way to my corner of the internet.
            Let's embark on this coding journey together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
