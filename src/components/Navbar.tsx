'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed w-full z-50">
            {/* Top Bar */}
            <div className="bg-white border-b border-slate-100 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-between items-center text-sm text-slate-600">
                    <div className="flex items-center gap-6">
                        <a href="tel:+16676468306" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>+1 (667) 646-8306</span>
                        </a>
                        <a href="mailto:info@parlevugloballlc.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Mail className="w-4 h-4" />
                            <span>info@parlevugloballlc.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/ParlevuGlobalServices" target="_blank" rel="noopener noreferrer" className="hover:text-secondary"><Facebook className="w-4 h-4" /></a>
                        <a href="https://www.linkedin.com/in/deji-parlevu-508b2024b" target="_blank" rel="noopener noreferrer" className="hover:text-secondary"><Linkedin className="w-4 h-4" /></a>
                        <a href="https://x.com/ParlevuGlobal" target="_blank" rel="noopener noreferrer" className="hover:text-secondary"><Twitter className="w-4 h-4" /></a>
                        <a href="https://instagram.com/parlevuglobalservices" target="_blank" rel="noopener noreferrer" className="hover:text-secondary"><Instagram className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center gap-3">
                                <Image
                                    src="/logo.png"
                                    alt="Parlevu Global Services LLC"
                                    width={280}
                                    height={80}
                                    className="w-auto h-16 md:h-20 object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8 text-neutral-800 font-semibold">
                            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                            <Link href="#about" className="hover:text-secondary transition-colors">About</Link>
                            <Link href="#services" className="hover:text-secondary transition-colors">Services</Link>
                            <Link href="#reviews" className="hover:text-secondary transition-colors">Reviews</Link>
                            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
                            <Link href="#contact" className="hover:text-secondary transition-colors">Contact Us</Link>
                            <div className="flex flex-col text-sm font-normal text-right">
                                <span className="font-bold text-primary">+1 (667) 646-8306</span>
                                <span className="text-xs text-slate-500">info@parlevugloballlc.com</span>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
                                <Menu className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-lg">
                        <Link href="/" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="#about" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="#services" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="#reviews" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>Reviews</Link>
                        <Link href="/blog" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link href="#contact" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </div>
                )}
            </nav>
        </div>
    );
}
