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

    const animR = useTransform(smoothProgress, [0, 1], ["0vw", "50vw"]);
    const animL = useTransform(smoothProgress, [0, 1], ["0vw", "-50vw"]);

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // some no final

    return (
        <div className="flex  items-center">
            <motion.img
                src="/left-full.svg"
                initial={{ translateX: "100%" }}
                animate={{ translateX: "-60vw" }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                style={{
                    position: "fixed",
                    top: 0,
                    x: animL,
                    zIndex: 20,
                    height: "100%",
                    width: "100%",
                }}
            />
            <motion.img
                src="/right-full.svg"
                initial={{ translateX: "100%" }}
                animate={{ translateX: "65vw" }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                style={{
                    position: "fixed",
                    top: 0,
                    x: animR,
                    zIndex: 20,
                    height: "100%",
                    width: "100%",
                }}
            />
        </div>
    );
}
