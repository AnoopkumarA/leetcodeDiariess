"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../lib/utils";
export default function NumberTicker({ value, direction = "up", delay = 0.1, className, }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });
    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 2000);
        }
    }, [motionValue, isInView, delay, value, direction]);
    useEffect(() => springValue.on("change", (latest) => {
        if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest));
        }
    }), [springValue]);
    return (_jsx("span", { className: cn("inline-block tabular-nums text-white dark:text-white tracking-wider", className), ref: ref }));
}
