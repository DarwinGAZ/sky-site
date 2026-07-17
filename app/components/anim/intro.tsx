"use client";

import { useScroll, useSpring, useTransform } from "motion/react";
import * as motion from "motion/react-client";

export default function Intro() {
    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const animR = useTransform(smoothProgress, [0, 1], [0, 500]);
    const animL = useTransform(smoothProgress, [0, 1], [0, -500]);

    const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]); // some no final

    return (
        <div className="flex  items-center">
            <motion.img
                src="/left-full.svg"
                initial={{ translateX: 0 }}
                animate={{ translateX: -700 }}
                transition={{ duration: 1, ease: "easeIn" }}
                style={{
                    position: "fixed",
                    top: 0,
                    x: animL,
                    opacity,
                    zIndex: 20,
                }}
            />
            <motion.img
                src="/right-full.svg"
                initial={{ translateX: 0 }}
                animate={{ translateX: 800 }}
                transition={{ duration: 1, ease: "easeIn" }}
                style={{
                    position: "fixed",
                    top: 0,
                    x: animR,
                    opacity,
                    zIndex: 20,
                }}
            />
        </div>
    );
}
