import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary dark:text-white tracking-tight">
                            Parlevu Global
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-foreground hover:text-secondary transition-colors">Home</Link>
                        <Link href="#how-it-works" className="text-foreground hover:text-secondary transition-colors">How it Works</Link>
                        <Link href="/blog" className="text-foreground hover:text-secondary transition-colors">Blog</Link>
                        <a href="tel:+16676468306" className="flex items-center gap-2 bg-secondary hover:bg-amber-700 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg shadow-amber-500/20">
                            <Phone className="w-4 h-4" />
                            <span>(667) 646-8306</span>
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-foreground p-2">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
