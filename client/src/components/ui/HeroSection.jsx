import Image from "next/image";
import React from "react";

export const HeroSection = () => {
    return (
        <section className="bg-secondary lg:grid lg:h-screen lg:place-content-center my-4 rounded">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-6 lg:px-8 lg:py-32">
                <div className="max-w-prose text-left">
                    <h1 className="text-4xl font-bold text-primary sm:text-6xl">
                        Automate Student Marks Like Never Before
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        Transform your grading process with our intelligent student marks
                        management system. Save time, reduce errors, and focus on what
                        matters most - teaching.
                    </p>

                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <button className="inline-block rounded border border-button-background cursor-pointer bg-button-background px-5 py-3 font-medium text-white shadow-sm transition-colors">
                            Get Started
                        </button>

                        <button className="inline-block rounded border border-button-background px-5 py-3 font-medium text-button-background shadow-sm transition-colors bg-transparent cursor-pointer">
                            Try Demo
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <Image
                        src="/hero.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={450}
                    />
                </div>
            </div>
        </section>
    );
};
