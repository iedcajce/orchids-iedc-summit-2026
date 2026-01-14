"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LOADING_STEPS = [
  "Initializing System",
  "Calibrating Neural Pathways",
  "Optimizing Network Core",
  "Synchronizing Future Realities",
  "Activating Startup Protocol",
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

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

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % LOADING_STEPS.length);
    }, 900);
    return () => clearInterval(stepInterval);
  }, []);

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
            animate={{ scale: 1, opacity: 1 }}
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

        {/* Info Terminal */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-heading font-bold text-[#1a2e23] tabular-nums">
                {progress.toString().padStart(3, '0')}
              </span>
              <span className="text-sm font-heading font-medium text-[#439162]">/ 100</span>
            </div>
            
            <div className="w-48 h-1 bg-[#439162]/5 rounded-full mt-4 overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-[#439162]"
                animate={{ width: `${progress}%` }}
              />
              <motion.div 
                className="absolute inset-y-0 left-0 w-1/4 bg-white/40 blur-sm"
                animate={{ x: ['-100%', '400%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <div className="h-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                className="flex items-center gap-3"
              >
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 h-1 bg-[#439162] rounded-full"
                    />
                  ))}
                </div>
                <span className="text-[10px] md:text-xs font-heading font-semibold tracking-[0.2em] text-[#439162] uppercase">
                  {LOADING_STEPS[currentStep]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-12 left-12 flex gap-4 opacity-20 hidden md:flex">
        <div className="w-12 h-[1px] bg-[#439162]" />
        <span className="text-[10px] font-heading font-medium tracking-widest text-[#439162] uppercase">System v2.0.26</span>
      </div>
      <div className="absolute bottom-12 right-12 flex flex-col items-end opacity-20 hidden md:flex">
        <span className="text-[10px] font-heading font-medium tracking-widest text-[#439162] uppercase">IEDC SUMMIT</span>
        <div className="w-24 h-[1px] bg-[#439162] mt-2" />
      </div>
    </motion.div>
  );
}
