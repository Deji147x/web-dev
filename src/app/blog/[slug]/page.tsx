'use client';

import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

const POSTS = [
    {
        title: 'We Buy Houses In Maryland: Fast, Fair, And Hassle-Free',
        content: `
            <p>When life changes fast, selling your house the traditional way can feel slow, uncertain, and overwhelming. At Parlevu Global Services LLC, we understand that sometimes you just need a straightforward solution.</p>
            <h3>Why Sell Your Maryland House for Cash?</h3>
            <p>Traditional sales involve repairs, staging, open houses, and the constant stress of potential buyers backing out. When you sell to us, you bypass all of that.</p>
            <ul>
                <li><strong>No Repairs:</strong> We buy as-is. Whether the roof is leaking or the basement is unfinished, it doesn't matter.</li>
                <li><strong>No Commissions:</strong> You keep 100% of the offer. No agent fees.</li>
                <li><strong>Fast Closing:</strong> We can close in as little as 7 days, or on your preferred timeline.</li>
            </ul>
            <h3>The Old Line State Real Estate Market</h3>
            <p>From Baltimore to the Eastern Shore, Maryland's real estate market can be competitive. Listing a house that needs work can often result in low-ball offers from buyers who want a move-in ready home. By selling to a professional home buyer like Parlevu Global, you get a fair price based on market value without the "renovation tax."</p>
        `,
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/We-Buy-Houses-In-Maryland-Fast-Fair-And-Hassle-Free-1024x416.png.webp',
        slug: 'we-buy-houses-maryland-fast-fair-hassle-free',
        date: 'January 15, 2025',
        author: 'Deji Adeyemo'
    },
    {
        title: 'Inherited a House in Maryland? 7 Powerful Steps to Sell Fast Without Probate Headaches',
        content: `
            <p>Inheriting a house sounds like a blessing, but it often comes with a mountain of paperwork and emotional stress. If you've inherited a property in Maryland, here is how you can navigate the process efficiently.</p>
            <h3>1. Locate the Will</h3>
            <p>The first step is determining if there is a legal will. This dictates how the property should be handled.</p>
            <h3>2. Navigate Probate</h3>
            <p>Probate is the legal process of transferring the title from the deceased to the heirs. In Maryland, this can take months.</p>
            <h3>3. Selling Without the Wait</h3>
            <p>One way to avoid the long-term carrying costs of an inherited home (taxes, utilities, maintenance) is to sell to a cash buyer who is experienced in probate sales.</p>
        `,
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/Inherited-a-House-in-Maryland-7-Powerful-Steps-to-Sell-Fast-Without-Probate-Headaches-1024x416.png.webp',
        slug: 'inherited-house-maryland-sell-fast-probate',
        date: 'January 12, 2025',
        author: 'Deji Adeyemo'
    },
    {
        title: 'Getting Started with Real Estate Investing: A Comprehensive Guide for Beginners',
        content: `
            <p>Real estate investing has long been considered one of the most reliable paths to building wealth. Here is a starter guide for those looking to enter the market in 2025.</p>
            <h3>Understand Your Goals</h3>
            <p>Are you looking for monthly passive income (rentals) or a one-time large profit (flipping)? Your strategy will dictate where you look for deals.</p>
            <h3>The Importance of Local Knowledge</h3>
            <p>The DMV area (DC, Maryland, Virginia) offers diverse opportunities. While DC might have higher barrier to entry, suburban Maryland and Virginia offer great rental yields.</p>
        `,
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/Getting-Started-with-Real-Estate-Investing-A-Comprehensive-Guide-for-Beginners-1024x416.png.webp',
        slug: 'getting-started-with-real-estate-investing',
        date: 'January 10, 2025',
        author: 'Deji Adeyemo'
    }
    // Add more posts as needed or keep it dynamic
];

export default function BlogPost() {
    const params = useParams();
    const slug = params?.slug;

    const post = POSTS.find(p => p.slug === slug) || POSTS[0]; // Fallback to first if not found for demo

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header / Intro */}
            <div className="pt-32 pb-16 bg-slate-950 text-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-sky-500" /> {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-sky-500" /> {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-sky-500" /> Real Estate
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 -mt-24 relative z-20 border-8 border-white">
                        <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-800" dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* CTA Section */}
                    <div className="mt-20 p-8 md:p-12 bg-[#0f172a] rounded-3xl text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Need to sell a property fast?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
                            Whether it's an inherited home, a rental property, or you just need to close quickly, we're here to help with a fair cash offer.
                        </p>
                        <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-amber-600 font-bold rounded-xl transition-all hover:scale-105">
                            Get Your Cash Offer Now
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
