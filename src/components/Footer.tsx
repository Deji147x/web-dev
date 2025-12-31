import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Calendar } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Parlevu Global Services LLC</h3>
                        <p className="mb-6 max-w-sm text-slate-400">
                            We provide real estate solutions to homeowners looking to sell their house fast for cash.
                            We are local, trusted, and ready to help.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/ParlevuGlobalServices" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook className="w-6 h-6" /></a>
                            <a href="https://instagram.com/parlevuglobalservices" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram className="w-6 h-6" /></a>
                            <a href="https://www.linkedin.com/in/deji-parlevu-508b2024b" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Linkedin className="w-6 h-6" /></a>
                            <a href="https://x.com/ParlevuGlobal" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Twitter className="w-6 h-6" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-secondary" />
                                <a href="mailto:info@parlevugloballlc.com" className="hover:text-white transition-colors">info@parlevugloballlc.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-secondary" />
                                <a href="tel:+16676468306" className="hover:text-white transition-colors">+1 (667) 646-8306</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-secondary" />
                                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ19RbXv54TXkDBHXxBlvNd2yVw4ONeYTX_xjjy6HXcM6SwfwMXQKd8Awl2JGRwGZG_zIdIvLOov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a Call</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 mt-12 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Parlevu Global Services LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
