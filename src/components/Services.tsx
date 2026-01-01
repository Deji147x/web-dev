import { CheckCircle, Home, Briefcase, HeartHandshake, Gavel, Truck, Wallet } from 'lucide-react';

const detailedServices = [
    {
        title: 'Tired Landlords',
        description: 'Are you a landlord feeling overwhelmed? Let us help you sell your property fast without the hassle of managing tenants. As experienced real estate investors, we buy homes as-is, offering a quick house sale solution for landlords ready to move on.',
        icon: Home
    },
    {
        title: 'Tax Delinquency',
        description: 'Falling behind on property taxes? Don’t wait for the situation to worsen. We specialize in buying houses for cash, providing a hassle-free home sale process that can help you settle quickly and move forward with peace of mind.',
        icon: Wallet
    },
    {
        title: 'Divorce',
        description: 'Going through a divorce and need to sell your house fast? Our cash home buyers make the selling process smooth and stress-free, allowing you to sell your property for cash and focus on your fresh start.',
        icon: HeartHandshake
    },
    {
        title: 'Inherited Property',
        description: 'Inherited a property you don’t want or can’t manage? We buy homes as-is, offering a fast and straightforward solution for selling without a realtor. Turn your inherited property into cash quickly and easily.',
        icon: Briefcase
    },
    {
        title: 'Probate',
        description: 'Navigating probate can be complicated. We simplify the process with a hassle-free home sale option, buying houses for cash and helping families settle estates quickly and efficiently.',
        icon: Gavel
    },
    {
        title: 'Relocation',
        description: 'Need to relocate quickly? We’re here to help with a quick house sale. As trusted home buying companies, we make it easy for you to sell your home fast and move forward with your plans.',
        icon: Truck
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Our Services</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                        We specialize in as-is home sales, providing homeowners with a hassle-free, quick, and fair selling experience—no repairs, no delays, and no stress.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        {['Inherited Property', 'Probate Sales', 'Tired Landlords', 'Tax Delinquency', 'Divorce Settlements', 'Relocation Needs'].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detailedServices.map((service) => (
                        <div key={service.title} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-secondary shadow-sm group-hover:scale-110 transition-transform">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#hero" className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-amber-600 text-white text-lg font-bold rounded-full shadow-lg transition-colors">
                        Contact Us Today
                    </a>
                </div>
            </div>
        </section>
    );
}
