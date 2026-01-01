'use client';

import { CheckCircle, Home, Briefcase, HeartHandshake, Gavel, Truck, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const detailedServices = [
    {
        title: 'Tired Landlords',
        description: 'Are you a landlord feeling overwhelmed? Let us help you sell your property fast without the hassle of managing tenants.',
        icon: Home
    },
    {
        title: 'Tax Delinquency',
        description: 'Falling behind on property taxes? We specialize in buying houses for cash, providing a hassle-free solution.',
        icon: Wallet
    },
    {
        title: 'Divorce',
        description: 'Going through a divorce? Our cash home buyers make the selling process smooth and stress-free.',
        icon: HeartHandshake
    },
    {
        title: 'Inherited Property',
        description: 'Inherited a property you don’t want? Turn your inherited property into cash quickly and easily.',
        icon: Briefcase
    },
    {
        title: 'Probate',
        description: 'Navigating probate? We simplify the process helping families settle estates quickly and efficiently.',
        icon: Gavel
    },
    {
        title: 'Relocation',
        description: 'Need to relocate quickly? We make it easy for you to sell your home fast and move forward.',
        icon: Truck
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative bg-slate-950 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern-bg.png')] bg-repeat bg-contain"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Real Estate Solutions
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        We specialize in providing homeowners with a hassle-free, quick, and fair selling experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detailedServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-secondary hover:shadow-[0_0_30px_rgba(217,119,6,0.15)] transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-secondary shadow-lg group-hover:scale-110 group-hover:bg-secondary group-hover:text-slate-900 transition-all duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <motion.a
                        href="#hero"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-10 py-4 bg-secondary hover:bg-amber-500 text-slate-900 text-lg font-bold rounded-full shadow-lg shadow-amber-900/20 transition-colors"
                    >
                        Get a Fair Cash Offer Today
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
