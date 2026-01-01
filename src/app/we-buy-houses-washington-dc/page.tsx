'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Reuse Form Logic (Ideally refactor to a component file, but duplicated for speed per instruction)
function LeadForm({ title }: { title: string }) {
    const [formData, setFormData] = useState({
        address: 'Test Rd 123', city: '', state: '', zip: '', name: '', phone: '', email: '', source: '', consent: false
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
                <input type="text" placeholder="Enter your address..." className="w-full px-4 py-3 rounded bg-white text-slate-900" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required />
                <div className="grid grid-cols-3 gap-2">
                    <input type="text" placeholder="City" className="w-full px-4 py-3 rounded bg-white text-slate-900" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                    <input type="text" placeholder="State" className="w-full px-4 py-3 rounded bg-white text-slate-900" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
                    <input type="text" placeholder="Zip" className="w-full px-4 py-3 rounded bg-white text-slate-900" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded bg-white text-slate-900" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded bg-white text-slate-900" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-white text-slate-900" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                <div className="flex items-start gap-3 pt-2">
                    <input type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded text-sky-500" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} required />
                    <label htmlFor="consent" className="text-xs text-slate-400 leading-tight">By providing your phone number and checking this box, I agree for Parlevu Global Services LLC to contact me via SMS or phone.</label>
                </div>
                <button type="submit" className="w-full bg-secondary hover:bg-amber-600 text-white font-bold text-lg py-4 rounded shadow-lg flex items-center justify-center gap-2 mt-4">Get My Cash Offer <ArrowRight className="w-6 h-6" /></button>
            </form>
        </div>
    );
}

export default function DC() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
                            Sell Your House Fast <span className="text-secondary">Washington DC</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            We Buy Houses Washington DC. Count on Parlevu Global Services LLC to buy your house fast. The Best Way to Sell Your Washington DC House Fast.
                        </p>
                        <div className="grid grid-cols-1 gap-4 mb-8">
                            {['Inherited House', 'Rental Properties', 'Expensive Repairs Needed', 'Fire/Mold Damage', 'Divorce', 'Relocation'].map(item => (
                                <div key={item} className="flex items-center gap-2 font-semibold text-primary dark:text-white">
                                    <ArrowRight className="w-5 h-5 text-secondary" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <LeadForm title="Sell My House Fast Washington DC" />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-20 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg dark:prose-invert">
                    <h2>We Buy Houses Washington DC</h2>
                    <p>Worried that a unique situation has come up and you’re not sure if you’ll be able to sell your house fast for cash? We’re experienced in many different circumstances.</p>

                    <h3>Cash Home Buyers Washington DC</h3>
                    <p>As a local cash buyer in the DMV, our purpose is to help you sell your house fast for cash as quick and painless as possible.</p>
                    <p>If you have a house you’d like to sell that’s not in Maryland? We buy houses in Washington DC. Looking to sell your house fast in Northern Virginia? We buy houses in Virginia, as well.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
