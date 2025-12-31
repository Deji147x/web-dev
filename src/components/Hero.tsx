'use client';

import { ArrowRight, Lock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
    const [formData, setFormData] = useState({
        address: 'Test Rd 123',
        city: '',
        state: '',
        zip: '',
        name: '',
        phone: '',
        email: '',
        source: '',
        consent: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', formData);
        // Add logic to send to /api/n8n
        fetch('/api/n8n', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(() => {
            alert('Thank you! We will be in touch shortly.');
        }).catch(err => console.error(err));
    };

    return (
        <div className="relative pt-[124px] lg:pt-[136px] min-h-screen flex flex-col lg:flex-row">
            {/* Left: Image Section */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                <Image
                    src="/hero-team.jpg"
                    alt="Parlevu Global Team"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Mobile Overlay Text (Visible only on small screens if needed, otherwise rely on the right side) */}
            </div>

            {/* Right: Content & Form Section */}
            <div className="w-full lg:w-1/2 bg-[#0f172a] text-white p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern Stub */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

                <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                        Simplify your home-selling journey with <span className="text-sky-400">Parlevu Global Services LLC</span>—no repairs, no fees, no stress!
                    </h1>

                    <p className="text-sky-400 text-lg font-semibold mb-2">
                        Fast, reliable, and cash-ready—sell your house fast today!
                    </p>

                    <p className="text-slate-300 font-medium mb-8 uppercase tracking-wide text-sm">
                        We Buy Houses In DC, Maryland, Virginia
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter your address..."
                            className="w-full px-4 py-3 rounded bg-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            required
                        />

                        <div className="grid grid-cols-3 gap-2">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                required
                            />
                            <select
                                className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 appearance-none"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            >
                                <option value="">State</option>
                                <option value="MD">MD</option>
                                <option value="VA">VA</option>
                                <option value="DC">DC</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Zip Code"
                                className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                value={formData.zip}
                                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />

                        <select
                            className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            value={formData.source}
                            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                        >
                            <option value="">How Did You Find Us?</option>
                            <option value="Google">Google</option>
                            <option value="SocialMedia">Social Media</option>
                            <option value="Referral">Referral</option>
                            <option value="Other">Other</option>
                        </select>

                        <div className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                id="consent"
                                className="mt-1 w-4 h-4 rounded text-sky-500 focus:ring-sky-500"
                                checked={formData.consent}
                                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                                required
                            />
                            <label htmlFor="consent" className="text-xs text-slate-400 leading-tight">
                                By providing your phone number and checking this box, I agree for Parlevu Global Services LLC to contact me via SMS or phone. Standard rates may apply. Reply STOP to opt out.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-secondary hover:bg-amber-600 text-white font-bold text-lg py-4 rounded shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            Get My Cash Offer
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        <div className="text-center">
                            <span className="inline-flex items-center gap-1 text-slate-400 text-xs text-center"><Lock className="w-3 h-3" /> Your information is secure</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
