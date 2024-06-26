import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";

export function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert(
        "The contact service is not yet implemented. Kindly reach out to me via LinkedIn or Email. Thank you!"
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section
      id="contact"
      className="z-50 bg-transparent rounded-3xl border-[2px] border-[#66c6e0]"
    >
      <div className="flex flex-col gap-6 p-8 md:p-20 shadow-input">
        <h2 className="text-2xl font-bold md:text-4xl text-neutral-200">
          Let's Connect
        </h2>
        <p className="max-w-full text-base md:max-w-xl md:text-lg text-neutral-300">
          I'm always happy to chat about new projects or opportunities. Feel
          free to reach out to me. I'll get back to you as soon as I can.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 md:flex-row">
            <LabelInputContainer>
              <label htmlFor="firstname">First name</label>
              <Input
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="John"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <label htmlFor="lastname">Last name</label>
              <Input
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Doe"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer>
            <label htmlFor="email">Email Address</label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@email.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <label htmlFor="content">Content</label>
            <Input
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Your message here..."
              type="text"
              multiline
            />
          </LabelInputContainer>

          <button
            className="text-base md:text-lg bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-700 w-full text-white rounded-md h-10 md:h-12 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Drop a message &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-[#66c6e0] to-transparent mt-4 md:mt-10 h-[1px] w-full" />
        </form>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 group-hover/btn:opacity-100 -bottom-px bg-gradient-to-r from-transparent via-[#66c6e0] to-transparent" />
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 group-hover/btn:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 w-full text-base md:text-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
