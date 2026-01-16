"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 45); // Roughly 4.5 seconds

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#f8faf9] overflow-hidden"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#439162 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}>
        <motion.div
          animate={{
            x: [0, -32, 0],
            y: [0, -32, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#439162]/10 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: -360,
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-[#439162]/5 rounded-[40%] opacity-20"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Core Loading Element */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-16">
          {/* Rotating Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              stroke="currentColor"
              strokeWidth="1"
              fill="transparent"
              className="text-[#439162]/5"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 100 - progress }}
              className="text-[#439162]"
              strokeLinecap="round"
            />
          </svg>

          {/* Pulse Rings */}
          <AnimatePresence>
            {progress % 20 === 0 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 border border-[#439162] rounded-full"
              />
            )}
          </AnimatePresence>

          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: 1,
              filter: ["drop-shadow(0 0 0px rgba(67,145,98,0))", "drop-shadow(0 0 15px rgba(67,145,98,0.3))", "drop-shadow(0 0 0px rgba(67,145,98,0))"]
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ed3e4ef3-254e-4a25-9f8f-ed422d28efcf/IEDC-Startup-Summit-Logo-2026-Transparent-1768301636507.png?width=8000&height=8000&resize=contain"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
