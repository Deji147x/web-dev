'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
    const [address, setAddress] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for n8n or API submission
        console.log('Submitted address:', address);
        alert('Thanks! We will contact you shortly.');
    };

    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-white to-white dark:from-slate-900 dark:via-black dark:to-black opacity-80" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary dark:text-white mb-6">
                        Sell Your House Fast <br />
                        <span className="text-secondary">In Any Condition</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
                        We buy houses As-Is. No fees, no commissions, no repairs needed.
                        Get a fair cash offer within 24 hours.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-none p-6 md:p-8 border border-slate-100 dark:border-slate-800">
                    <h3 className="text-lg font-semibold mb-4 text-center">Get Your Cash Offer Today</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Enter your property address..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-secondary hover:bg-amber-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 group"
                        >
                            Get My Cash Offer
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                    <p className="text-xs text-center text-slate-500 mt-4">
                        By submitting, you agree to receive calls and texts. No obligation.
                    </p>
                </div>
            </div>
        </div>
    );
}
