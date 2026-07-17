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
                className="fixed inset-0 z-10 flex items-center pl-24"
                style={{ scale: anim }}
            >
                <div className="flex flex-col gap-6 max-w-xl">
                    <h1 className="text-white uppercase leading-[0.95] tracking-wide">
                        <span className="flex items-center gap-4 text-6xl">
                            STEP / INTO
                        </span>
                        <span className="block text-7xl">WONDER</span>
                    </h1>
                    <p
                        className="text-white/80 text-lg max-w-80 text-center"
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
