import React from "react";

export const CtaSection = () => {
  return (
    <section className="mt-7 p-3 py-10 flex flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#636AE8] to-[#2B0092] text-white">
      {/* Title */}
      <div>
        <h2 className="text-4xl font-bold">
          Ready to Transform Your Grading Process ?
        </h2>
      </div>

      {/* discription */}
      <div className="w-[43%] mx-auto flex items-center justify-center flex-col gap-3">
        <p className="text-left">
          Join thousands of educators who have already revolutionized their
          student assessment workflow. Start your free trail today and
          experience the difference.
        </p>

        {/* button */}
        <div className="flex items-center justify-center gap-4">
          <button className="bg-white text-button-background font-medium px-5 py-2 rounded-xl cursor-pointer">
            Start free trail
          </button>
          <button className="bg-transparent text-white font-medium border border-white cursor-pointer px-5 py-2 rounded-xl">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};
