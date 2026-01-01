import { FileText, PhoneCall, HandCoins } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Fill Out The Form',
        description: 'Just fill out the quick form below to get things started!',
        icon: FileText,
    },
    {
        id: 2,
        title: 'We Will Contact You',
        description: 'We’ll call you to set an in-person property walk-through.',
        icon: PhoneCall,
    },
    {
        id: 3,
        title: 'Receive Your Cash',
        description: 'You choose the closing date and receive your cash.',
        icon: HandCoins,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">How it Works</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Sell Your House Fast for Cash in DMV</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-center text-center relative z-10">
                            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center mb-6 border-4 border-secondary text-primary transform transition-transform hover:scale-110">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mb-4 absolute top-0 -left-2 shadow-lg">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
