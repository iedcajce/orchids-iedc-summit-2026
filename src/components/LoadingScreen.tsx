"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LOADING_STEPS = [
  "Initializing Summit...",
  "Powering Up Innovation...",
  "Curating Experiences...",
  "Connecting the Ecosystem...",
  "Finalizing Brilliance...",
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 60); // Roughly 6 seconds total

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % LOADING_STEPS.length);
    }, 1200);

    return () => clearInterval(stepInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#ECFCF1] blur-[100px] -top-20 -left-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[#CCFFF9]/40 blur-[120px] -bottom-40 -right-20"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.05, 1],
            opacity: 1 
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            scale: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut"
            }
          }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-12"
        >
          {/* Subtle Outer Glow */}
          <motion.div
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-[#4A7C59] rounded-full blur-3xl opacity-20"
          />
          
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ed3e4ef3-254e-4a25-9f8f-ed422d28efcf/IEDC-Startup-Summit-Logo-2026-Transparent-1768301636507.png?width=8000&height=8000&resize=contain"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-64 md:w-80 h-[2px] bg-[#E8F3ED] rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-[#4A7C59]"
          />
        </div>

        {/* Dynamic Text */}
        <div className="h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-sm font-medium text-[#4A7C59]/60 tracking-widest uppercase"
            >
              {LOADING_STEPS[currentStep]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Percentage Counter */}
        <motion.span 
          className="mt-2 text-[10px] font-bold text-[#4A7C59]/40 tracking-tighter"
        >
          {progress}%
        </motion.span>
      </div>

      {/* Modern Cursor Effect (Subtle) */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-2 h-2 bg-[#4A7C59]/10 rounded-full blur-sm"
      />
    </motion.div>
  );
}
