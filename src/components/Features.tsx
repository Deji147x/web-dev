import { Zap, Wallet, Wrench, Calendar } from 'lucide-react';

const features = [
    {
        name: 'Fast Cash Offer',
        description: 'We can make you a fair cash offer within 24 hours of contacting us.',
        icon: Wallet,
    },
    {
        name: 'No Repairs Needed',
        description: 'We buy houses "As-Is". You don’t need to paint, clean, or fix anything.',
        icon: Wrench,
    },
    {
        name: 'Fast Closing',
        description: 'We can close in as little as 7 days, or on the date of your choice.',
        icon: Zap,
    },
    {
        name: 'No Fees or Commissions',
        description: 'Unlike listing with an agent, you pay zero commissions or hidden fees.',
        icon: Calendar,
    },
];

export default function Features() {
    return (
        <div className="py-24 bg-slate-50 dark:bg-slate-900/50" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
                        Why Sell To Parlevu Global?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        We simplify the home selling process so you can move on with your life.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
                            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center mb-6 text-accent">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-primary dark:text-white">{feature.name}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
