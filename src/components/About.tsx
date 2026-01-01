export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">About Us</h2>
                    <h3 className="text-xl md:text-2xl text-secondary font-semibold mb-6">Fast, reliable, and cash-ready—sell your house fast today</h3>
                    <div className="prose prose-lg text-slate-600 dark:text-slate-300">
                        <p className="mb-4">
                            At Parlevu Global Services LLC, we’ve proudly served homeowners in the DMV for over 3 years as trusted cash homebuyers. We specialize in buying houses as-is, providing quick cash offers without the hassle of repairs, realtor fees, or closing costs.
                        </p>
                        <p className="mb-4">
                            Whether you’re facing financial difficulties, pre-foreclosure, divorce, probate, or code violations, we offer compassionate solutions tailored to your needs. Our no-obligation cash quotes give you the freedom to decide without pressure. Contact us today for a stress-free, fast home-selling experience.
                        </p>
                    </div>
                    <div className="mt-8">
                        <a href="#hero" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-slate-800 transition-colors shadow-lg">
                            Get My Cash Offer
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    {/* Placeholder for an about image - recreating the vibe */}
                    <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                        (Insert About Image Here)
                    </div>
                </div>
            </div>
        </section>
    );
}
