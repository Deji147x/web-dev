'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-32 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
            {/* Decorative blurred blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">About Parlevu Global</h2>
                    <h3 className="text-2xl text-secondary font-semibold mb-8">Fast, reliable, and cash-ready—sell your house fast today</h3>
                    <div className="prose prose-lg text-slate-300">
                        <p className="mb-6 leading-relaxed">
                            At Parlevu Global Services LLC, we’ve proudly served homeowners in the DMV for over 3 years as trusted cash homebuyers. We specialize in buying houses as-is, providing quick cash offers without the hassle of repairs, realtor fees, or closing costs.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Whether you’re facing financial difficulties, pre-foreclosure, divorce, probate, or code violations, we offer compassionate solutions tailored to your needs. Our no-obligation cash quotes give you the freedom to decide without pressure. Contact us today for a stress-free, fast home-selling experience.
                        </p>
                    </div>
                    <motion.div
                        className="mt-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#hero" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-slate-900 bg-secondary hover:bg-amber-500 transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                            Get My Cash Offer
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/about-family.png"
                        alt="Happy family receiving keys from Parlevu Global agent"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
