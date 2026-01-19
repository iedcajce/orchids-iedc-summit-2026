"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const TextReveal = ({
    children,
    className = "",
    delay = 0,
    width = "fit-content",
}: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            style={{ position: "relative", width, overflow: "hidden" }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
};
