import React from "react";
import { featureCardDetails } from "@/lib/utils";

export const Feature = () => {
  return (
    <section className="mt-16 flex bg-secondary-background items-center justify-center gap-6 flex-col p-3 py-10">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary">Powerful Features</h2>
        <p className="my-3">
          Everything you need to manage student marks efficiently
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-row gap-5 mx-11">
        {featureCardDetails.map((element, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 rounded bg-white p-7 py-10 shadow-xl"
            >
              <div
                style={{ backgroundColor: element.backgroundColor }}
                className=" rounded w-fit p-2"
              >
                {element.icon}
              </div>
              <p className="text-primary font-bold">{element.title}</p>
              <p className="text-gray">{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
