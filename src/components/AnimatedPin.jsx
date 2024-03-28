import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPin({ ...props }) {
  return (
    <div className="items-center">
      <PinContainer title={props.title} href={props.link}>
        <div className="flex basis-full flex-col p-4 sm:basis-1/2 w-[20rem] h-[20rem] lg:w-[22rem] lg:h-[25rem]">
          <h3 className="!pb-2 !m-0 font-bold text-lg lg:text-2xl text-neutral-200">
            {props.title}
          </h3>
          <div className="text-sm lg:text-lg !m-0 !p-0 font-normal h-full">
            <span className="text-neutral-300 line-clamp-3">
              {props.description}
            </span>
          </div>
          <div className="flex flex-1 w-full mt-4 rounded-lg min-h-[60%]">
            <img
              src={props.thumbnail}
              alt={props.title}
              className="object-fill w-full h-full rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
