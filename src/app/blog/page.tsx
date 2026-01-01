import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const POSTS = [
    {
        title: 'We Buy Houses In Maryland: Fast, Fair, And Hassle-Free',
        excerpt: 'When life changes fast, selling your house the traditional way can feel slow, uncertain, and overwhelming. Parlevu Global Services LLC...',
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/We-Buy-Houses-In-Maryland-Fast-Fair-And-Hassle-Free-1024x416.png.webp',
        slug: 'we-buy-houses-maryland-fast-fair-hassle-free'
    },
    {
        title: 'Inherited a House in Maryland? 7 Powerful Steps to Sell Fast Without Probate Headaches',
        excerpt: '🏡 Inherited a House in Maryland? 7 Powerful Steps to Sell Fast Without Probate Headaches Inheriting a house sounds like...',
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/Inherited-a-House-in-Maryland-7-Powerful-Steps-to-Sell-Fast-Without-Probate-Headaches-1024x416.png.webp',
        slug: 'inherited-house-maryland-sell-fast-probate'
    },
    {
        title: 'Getting Started with Real Estate Investing: A Comprehensive Guide for Beginners',
        excerpt: 'Real estate investing has long been considered one of the most reliable paths to building wealth and generating passive income....',
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/Getting-Started-with-Real-Estate-Investing-A-Comprehensive-Guide-for-Beginners-1024x416.png.webp',
        slug: 'getting-started-with-real-estate-investing'
    },
    {
        title: 'How to Sell an Inherited House in Maryland Without a Realtor',
        excerpt: 'Inheriting a house in Maryland can feel both like a blessing and a burden. While property inheritance represents valuable assets,...',
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/How-to-Sell-an-Inherited-House-in-Maryland-Without-a-Realtor-1024x416.png.webp',
        slug: 'sell-inherited-house-maryland-without-realtor'
    },
    {
        title: 'Sell My House Fast in Baltimore – What Are My Options?',
        excerpt: 'Sell My House Fast in Baltimore – What Are My Options? Finding yourself in a situation where you need to...',
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/Sell-My-House-Fast-in-Baltimore-What-Are-My-Options-1024x416.png.webp',
        slug: 'sell-my-house-fast-baltimore-options'
    },
    {
        title: 'Selling Your Inherited Home in Maryland: A Complete Guide to Fast, Stress-Free Solutions',
        excerpt: 'The Hidden Burden of Inherited Property in Maryland Inheriting a home in Maryland should feel like a blessing, but for...',
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/Selling-Your-Inherited-Home-in-Maryland-A-Complete-Guide-to-Fast-Stress-Free-Solutions-1024x416.png.webp',
        slug: 'selling-inherited-home-maryland-guide'
    },
    {
        title: 'We Buy Houses in Baltimore: The Ultimate Guide to Selling Your Home Fast & Hassle-Free in 2025',
        excerpt: 'Need to sell your Baltimore home quickly? Avoid the traditional listing hassles. Learn how cash buyers offer fast closings, no...',
        image: 'https://parlevugloballlc.com/wp-content/uploads/2025/01/We-Buy-Houses-in-Baltimore-The-Ultimate-Guide-to-Selling-Your-Home-Fast-Hassle-Free-in-2025-1024x416.png.webp',
        slug: 'we-buy-houses-baltimore-ultimate-guide-2025'
    }
];

export default function BlogHome() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-12 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-primary dark:text-white">Our Real Estate Blog</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Insights, tips, and guides on selling your home, real estate investing, and efficient property solutions.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map((post, i) => (
                        <article key={i} className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="h-48 w-full relative overflow-hidden">
                                {/* Using unoptimized for external images to avoid configuration hassle in this environment */}
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs text-secondary font-bold uppercase tracking-wider mb-2">Real Estate</div>
                                <h3 className="text-xl font-bold mb-3 text-primary dark:text-white leading-snug line-clamp-2">
                                    <a href={`/blog/${post.slug}`} className="hover:text-secondary transition-colors">{post.title}</a>
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 flex-1 line-clamp-3 mb-4 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <a href={`/blog/${post.slug}`} className="mt-auto text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read Article &rarr;
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
