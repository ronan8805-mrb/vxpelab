import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-gray border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-black mb-6">VAPE<span className="text-neon-pink">LAB</span></h3>
                        <p className="text-gray-400 mb-6">
                            The premier destination for all your vaping needs. Premium products, expert advice, and unbeatable prices.
                        </p>
                        <div className="flex items-center gap-2 text-neon-blue transition-colors hover:text-neon-pink cursor-pointer">
                            <Instagram size={20} />
                            <span className="font-bold">@vxpelab</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-neon-blue">
                            <Phone size={20} />
                            <span className="font-bold">07432648478</span>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Shop</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-neon-pink transition-colors">Vape Kits</a></li>
                            <li><a href="#" className="hover:text-neon-pink transition-colors">Disposables</a></li>
                            <li><a href="#" className="hover:text-neon-pink transition-colors">E-Liquids</a></li>
                            <li><a href="#" className="hover:text-neon-pink transition-colors">New Arrivals</a></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Locations</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex gap-3">
                                <MapPin className="text-neon-pink shrink-0" size={20} />
                                <span>Ribbleton Lane<br />Preston</span>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="text-neon-pink shrink-0" size={20} />
                                <span>Blackpool Road<br />Preston</span>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="text-neon-pink shrink-0" size={20} />
                                <span>Leyland Road<br />Penwortham</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Stay Updated</h4>
                        <p className="text-gray-400 mb-4">Subscribe for exclusive offers and new product alerts.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Enter your email" className="bg-brand-dark border border-white/10 px-4 py-2 rounded focus:outline-none focus:border-neon-pink w-full text-white" />
                            <button className="bg-neon-pink text-white px-4 py-2 rounded font-bold hover:bg-neon-purple transition-colors">GO</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
                    &copy; 2026 VAPE LAB. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
