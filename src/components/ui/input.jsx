"use client";
import React, { forwardRef, useState } from "react";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const Input = forwardRef(({ className, type, multiline, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? `${radius}px` : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            #66c6e0,
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      {multiline ? (
        <textarea
          type={type}
          className={cn(
            `flex h-56 w-full border-none bg-zinc-800 text-white rounded-lg px-3 py-2 text-lg placeholder-text-neutral-300 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[#66c6e0] shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400 resize-none
            `,
            className
          )}
          ref={ref}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-zinc-800 text-white rounded-lg px-3 py-2 text-lg placeholder-text-neutral-300 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[#66c6e0] shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400
            `,
            className
          )}
          ref={ref}
          {...props}
        />
      )}
    </motion.div>
  );
});

Input.displayName = "Input";

export { Input };
