"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Partners() {
    return (
        <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-4 italic tracking-tighter uppercase leading-none">
                        OUR <span className="text-brand">PARTNERS</span>
                    </h2>
                    <p className="text-brand-dark/40 text-[10px] uppercase tracking-[0.4em] font-black mb-24">
                        Grateful to our partners who make IEDC Summit 2026 possible.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#f8faf9] rounded-[4rem] p-12 md:p-24 shadow-inner space-y-32"
                >
                    {/* <div className="relative">
            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Title Sponsor</p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center cursor-pointer border border-brand/5"
              >
                <div className="w-48 h-10 bg-brand/10 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </div> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Powered By</p>
                            <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-48 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-brand/5"
                                >
                                    <Image src="/images/powredby/ksum.svg" alt="KSUM" width={120} height={60} className="object-contain w-full h-full" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-48 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-brand/5"
                                >
                                    <Image src="/images/powredby/iedc_kerala.png" alt="IEDC Kerala" width={120} height={60} className="object-contain w-full h-full" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-48 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-brand/5"
                                >
                                    <Image src="/images/powredby/startupvally.png" alt="Startup Valley" width={120} height={60} className="object-contain w-full h-full" />
                                </motion.div>
                            </div>
                        </div>

                        <div>
                            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Hosted By</p>
                            <div className="flex flex-col gap-6 justify-center items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-48 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-brand/5"
                                >
                                    <Image src="/images/hosted_by/ajce_logo.png" alt="AJCE" width={120} height={60} className="object-contain w-full h-full" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-48 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-brand/5"
                                >
                                    <Image src="/images/hosted_by/iedc_ajce.png" alt="IEDC AJCE" width={120} height={60} className="object-contain w-full h-full" />
                                </motion.div>
                            </div>
                        </div>

                        <div>
                            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Marketing Partner</p>
                            <div className="flex justify-center flex-col gap-6 items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-48 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-brand/5"
                                >
                                    <Image src="/images/incial_logo.jpg" alt="Incial" width={120} height={60} className="object-contain w-full h-full" />
                                </motion.div>
                            </div>
                        </div>

                        <div>
                            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Technical Partner</p>
                            <div className="flex justify-center flex-col gap-6 items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-48 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-brand/5"
                                >
                                    <Image src="/images/agrowtein.png" alt="Agrowtein" width={120} height={60} className="object-contain w-full h-full" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* <div>
            <p className="text-left text-brand-dark/40 font-black uppercase tracking-[0.2em] text-[10px] mb-12 border-l-4 border-brand pl-6">Startup Enablers</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="w-56 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center cursor-pointer border border-brand/5"
                >
                  <div className="w-32 h-6 bg-brand/5 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div> */}


                </motion.div>
            </div>
        </section>
    );
}
