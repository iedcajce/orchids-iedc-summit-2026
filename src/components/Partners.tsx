"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PartnerCard = ({ src, alt, delay = 0, className = "" }: { src: string; alt: string; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5 }}
        className="group relative flex items-center justify-center p-6 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-500 h-32 md:h-40"
    >
        <div className={`relative w-full h-12 md:h-16 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain transition-all duration-500"
            />
        </div>
    </motion.div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-4 mb-8 w-full">

        <div className="h-px bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent flex-1" />
        <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-brand-dark/40 px-4 py-1.5 border border-brand-dark/5 rounded-full bg-[#f8faf9]">
            {children}
        </span>
        <div className="h-px bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent flex-1" />
    </div>
);

export function Partners() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-brand-dark mb-6 italic tracking-tighter uppercase leading-none"
                        style={{ fontFamily: '"Cooper Hewitt", sans-serif' }}
                    >
                        OUR <span className="text-brand">PARTNERS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-dark/50 text-xs md:text-sm uppercase tracking-[0.2em] font-medium max-w-2xl mx-auto"
                    >
                        Collaborating with industry leaders to shape the future
                    </motion.p>
                </div>

                <div className="flex flex-col gap-20">
                    {/* Top Tier: Powered By & Hosted By */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Powered By */}
                        <div className="flex flex-col items-center">
                            <SectionLabel>Powered By</SectionLabel>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                                <PartnerCard src="/images/powredby/ksum.svg" alt="KSUM" delay={0.1} />
                                <PartnerCard src="/images/powredby/iedc_kerala.png" alt="IEDC Kerala" delay={0.2} />
                                <PartnerCard src="/images/powredby/startupvally.png" alt="Startup Valley" delay={0.3} />
                            </div>
                        </div>

                        {/* Hosted By */}
                        <div className="flex flex-col items-center">
                            <SectionLabel>Hosted By</SectionLabel>
                            <div className="grid grid-cols-2 gap-6 w-full">
                                <PartnerCard src="/images/hosted_by/ajce_logo_6.png" alt="AJCE" delay={0.4} className="!h-20 md:!h-24" />
                                <PartnerCard src="/images/hosted_by/iedc_ajce.png" alt="IEDC AJCE" delay={0.5} />
                            </div>
                        </div>
                    </div>

                    {/* Secondary Tier */}
                    <div className="max-w-4xl mx-auto w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                            {/* Marketing Partner */}
                            <div className="flex flex-col items-center">
                                <SectionLabel>Marketing Partner</SectionLabel>
                                <div className="w-full max-w-[280px]">
                                    <PartnerCard src="/images/incial_logo.jpg" alt="Incial" delay={0.6} />
                                </div>
                            </div>

                            {/* Technical Partner */}
                            <div className="flex flex-col items-center">
                                <SectionLabel>Technical Partner</SectionLabel>
                                <div className="w-full max-w-[280px]">
                                    <PartnerCard src="/images/agrowtein.png" alt="Agrowtein" delay={0.7} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
