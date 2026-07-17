"use client";
import { useScroll, useSpring, useTransform } from "motion/react";
import * as motion from "motion/react-client";

export default function Background() {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const anim = useTransform(smoothProgress, [0, 1], [1, 10]);

    return (
        <>
            <motion.img
                src="/bg1.svg"
                alt=""
                className="fixed inset-0 z-10 w-full h-full object-cover"
                style={{ scale: anim }}
            />

            <motion.div
                className="fixed inset-0 z-10 flex items-center px-6 sm:px-12 md:pl-16 lg:pl-24"
                style={{ scale: anim }}
            >
                <div className="flex flex-col gap-4 sm:gap-6 max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <h1 className="text-white uppercase leading-[0.95] tracking-wide">
                        <span className="flex items-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            STEP / INTO
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            WONDER
                        </span>
                    </h1>
                    <p
                        className="text-white/80 text-sm sm:text-base md:text-lg max-w-[75vw] sm:max-w-64 md:max-w-72 lg:max-w-80 text-center"
                        style={{ fontFamily: "imprima" }}
                    >
                        Designing immersive digital experiences that blur the
                        line between imagination, AI, and reality.
                    </p>
                </div>
            </motion.div>
        </>
    );
}
