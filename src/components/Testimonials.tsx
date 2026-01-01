import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: 'James Heartquist',
        text: 'I wanted to give a shout out to Hunter and his team. I recently sold these guys a house that I needed to move quickly. I’m not local to VA and purchased it to rehab and realized that I needed someone local that could take over the project. They were very professional and closed on time. Thanks Hunter!',
        location: 'Virginia'
    },
    {
        name: 'Kam K.',
        text: 'A few months ago I found myself in a bad place where I had to liquidate everything. I was introduced to Hunter from a friend of mine, and he made the whole process of selling my house fast and convenient. He was extremely polite, knowledgeable, and very patient with me. He walked me thru everything before it happened. He made a situation that was difficult and easy to deal with it. Thank you and God bless.',
        location: 'Maryland'
    },
    {
        name: 'Tripp T.',
        text: 'Parlevu Global Services is a trusted home-buying company that I have had the pleasure to transact with over the past 3 years. They have a truly fantastic staff that is customer first oriented. These guys get it and you can absolutely count on them to do what they say.',
        location: 'DMV'
    }
];

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl mb-4">
                        More From Our Customers 🙂
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        See what homeowners in the DMV are saying about Parlevu Global Services LLC.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 flex flex-col">
                            <div className="flex gap-1 mb-6 text-secondary">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-slate-200 dark:text-slate-700 mb-4" />
                            <p className="text-slate-700 dark:text-slate-300 italic mb-6 flex-grow leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                                <div className="font-bold text-primary dark:text-white text-lg">{review.name}</div>
                                <div className="text-sm text-slate-500">{review.location}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
