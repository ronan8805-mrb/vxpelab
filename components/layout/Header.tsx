import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
            <div className="bg-neon-purple text-white text-center py-2 text-sm font-bold tracking-wide uppercase">
                Open till 10pm everyday!
            </div>
            <div className="container mx-auto px-4 h-32 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className="lg:hidden p-2 text-white"><Menu /></button>
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative size-28 rounded-full overflow-hidden border-2 border-neon-pink shadow-[0_0_20px_rgba(255,0,255,0.6)] hover:scale-105 transition-transform duration-300 bg-black">
                            <img src="/assets/logo.png" alt="VAPE LAB Logo" className="object-cover w-full h-full" />
                        </div>
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
                    <Link href="#" className="hover:text-neon-pink transition-colors">Vape Kits</Link>
                    <Link href="#" className="hover:text-neon-pink transition-colors">Disposables</Link>
                    <Link href="#" className="hover:text-neon-pink transition-colors">E-Liquids</Link>
                    <Link href="#" className="hover:text-neon-pink transition-colors">Brands</Link>
                    <Link href="#" className="hover:text-neon-pink transition-colors text-neon-green">Sale</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:text-neon-pink transition-colors"><Search size={20} /></button>
                    <button className="p-2 hover:text-neon-pink transition-colors"><User size={20} /></button>
                    <button className="p-2 hover:text-neon-pink transition-colors relative">
                        <ShoppingCart size={20} />
                        <span className="absolute top-0 right-0 size-4 bg-neon-blue rounded-full text-[10px] text-black flex items-center justify-center font-bold">0</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
