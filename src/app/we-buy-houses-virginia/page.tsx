'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Reuse Form Logic (Simplified for this page)
function LeadForm({ title }: { title: string }) {
    const [formData, setFormData] = useState({
        address: '', city: '', state: 'VA', zip: '', name: '', phone: '', email: '', source: '', consent: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', formData);
        fetch('/api/n8n', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
            .then(() => alert('Thank you! We will be in touch shortly.'))
            .catch(err => console.error(err));
    };

    return (
        <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Enter your address..." className="w-full px-4 py-3 rounded bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
                <div className="grid grid-cols-3 gap-2">
                    <input type="text" placeholder="City" className="w-full px-4 py-3 rounded bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required />
                    <input type="text" placeholder="State" className="w-full px-4 py-3 rounded bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none" value={formData.state} disabled />
                    <input type="text" placeholder="Zip" className="w-full px-4 py-3 rounded bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} required />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-white text-slate-900 border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                <div className="flex items-start gap-3 pt-2">
                    <input type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} required />
                    <label htmlFor="consent" className="text-xs text-slate-400 leading-tight">By providing your phone number and checking this box, I agree for Parlevu Global Services LLC to contact me via SMS or phone. Reply STOP to opt out.</label>
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-amber-600 text-white font-bold text-lg py-4 rounded shadow-lg flex items-center justify-center gap-2 mt-4 transition-all hover:scale-[1.02]">Get My Cash Offer <ArrowRight className="w-6 h-6" /></button>
            </form>
        </div>
    );
}

export default function Virginia() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center relative z-10">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 uppercase tracking-widest leading-none">
                            Virginia Real Estate Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Sell Your House Fast in <span className="text-secondary">Virginia</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Parlevu Global Services LLC is Virginia's most trusted home buyer. We buy houses as-is for cash, which means no repairs, no cleaning, and no agent commissions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {['Inherited Property', 'Tired Landlords', 'Downsizing', 'Financial Hardship', 'Relocation', 'Foreclosure'].map(item => (
                                <div key={item} className="flex items-center gap-3 text-lg">
                                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4 text-secondary" />
                                    </div>
                                    <span className="text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <LeadForm title="Get Your Fair Cash Offer Today" />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-slate-800">
                        <h2 className="text-4xl font-bold text-slate-900 mb-8">Trusted Cash Home Buyers in Virginia</h2>
                        <p>Are you looking to sell your house fast in Virginia? At <strong>Parlevu Global Services LLC</strong>, we specialize in helping Virginia homeowners move on from burdensome properties without the typical stress of a traditional sale.</p>
                        <p>We buy houses, condos, and multi-family units across Virginia, from Alexandria to Richmond and beyond. Whether your house needs a complete overhaul or you just need to close quickly, we are ready to offer you a fair price.</p>

                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 my-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Sell To Us?</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                <li className="flex items-center gap-2 m-0 font-medium">✅ Closed in as little as 7 days</li>
                                <li className="flex items-center gap-2 m-0 font-medium">✅ No repairs or cleaning needed</li>
                                <li className="flex items-center gap-1 m-0 font-medium">✅ No agent fees or commissions</li>
                                <li className="flex items-center gap-1 m-0 font-medium">✅ We pay all closing costs</li>
                            </ul>
                        </div>

                        <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Simple Virginia Home Selling Process</h3>
                        <p>Selling your Virginia home to us is simple. First, fill out the form above or give us a call. We'll set up a quick walkthrough and provide you with a no-obligation cash offer. If you accept, you choose the closing date that works best for you!</p>
                        <p>Stop worrying about the market, the inspections, or the repairs. Let Parlevu Global handle everything for you.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
