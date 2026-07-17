"use client";

import { useScroll, useSpring, useTransform } from "motion/react";
import * as motion from "motion/react-client";

export default function Sky() {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

    return (
        <div>
            <motion.img
                src="/sky.svg"
                className="fixed inset-0 w-full h-full object-cover"
            />
            <motion.div
                style={{ opacity: opacity }}
                className="fixed inset-0 z-0 flex mt-8 sm:mt-12 md:mt-16 lg:mt-20 items-center justify-center px-4"
            >
                <div className="flex flex-col gap-4 sm:gap-6">
                    <h1 className="text-white uppercase tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                        Create Beyond Reality
                    </h1>
                    <p
                        className="text-sm sm:text-base md:text-lg max-w-[90vw] sm:max-w-96 md:max-w-[28rem] lg:max-w-120 text-center self-center"
                        style={{ fontFamily: "imprima" }}
                    >
                        Exclusive journeys to breathtaking destinations curated
                        for travelers seeking rare and unforgettable
                        experiences.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
