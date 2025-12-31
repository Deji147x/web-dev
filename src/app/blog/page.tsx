import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogHome() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8 text-primary dark:text-white">Blog</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                    Insights and tips on selling your home fast.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder Blog Posts */}
                    {[1, 2, 3].map((i) => (
                        <article key={i} className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full animate-pulse"></div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-sm text-secondary font-medium mb-2">Real Estate Tips</div>
                                <h3 className="text-xl font-bold mb-2 text-primary dark:text-white">How to Sell Your House Without a Realtor</h3>
                                <p className="text-slate-600 dark:text-slate-400 flex-1">
                                    Selling FSBO can be challenging but rewarding. Here are the top 5 things you need to know...
                                </p>
                                <a href="#" className="mt-4 text-accent hover:text-sky-600 font-medium inline-flex items-center">
                                    Read More &rarr;
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
