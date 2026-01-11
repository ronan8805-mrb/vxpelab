"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Truck, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Image - using largest uploaded image as fallback/bg */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-bg-new.jpg"
            alt="Vape Lab Mad Scientists Lab"
            fill
            className="object-cover object-top opacity-80 hover:scale-105 transition-all duration-[3000ms]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start pt-20">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-neon-pink/20 text-neon-pink border border-neon-pink/50 px-4 py-1 rounded-full font-bold uppercase tracking-widest text-xs mb-6 backdrop-blur-md">
              The #1 Vape Shop in Preston
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 leading-none text-white drop-shadow-2xl">
              VAPE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">REVOLUTION</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-xl leading-relaxed">
              Premium E-Liquids, Latest Kits, and Unbeatable Prices. <br />
              <span className="text-neon-green">Open till 10pm everyday!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="bg-neon-pink text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-neon-purple transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,0,255,0.4)] text-center">
                SHOP NOW
              </Link>
              <Link href="#" className="group border-2 border-white/20 hover:border-neon-blue text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/5 flex items-center justify-center gap-2">
                LOCATIONS <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-brand-gray border-y border-white/5 py-12 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="bg-brand-card p-4 rounded-full text-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              <Truck size={32} />
            </div>
            <div>
              <h3 className="font-bold text-xl uppercase tracking-wide mb-1">We Deliver</h3>
              <p className="text-gray-400 text-sm">Everyday 5PM - 8PM</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="bg-brand-card p-4 rounded-full text-neon-pink shadow-[0_0_15px_rgba(255,0,255,0.2)]">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="font-bold text-xl uppercase tracking-wide mb-1">Price Match</h3>
              <p className="text-gray-400 text-sm">Guaranteed Best Prices</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="bg-brand-card p-4 rounded-full text-neon-green shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              <Zap size={32} />
            </div>
            <div>
              <h3 className="font-bold text-xl uppercase tracking-wide mb-1">Premium Labs</h3>
              <p className="text-gray-400 text-sm">Certified Quality Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">Shop by <span className="text-neon-blue">Category</span></h2>
              <div className="h-1 w-24 bg-neon-pink rounded-full"></div>
            </div>
            <Link href="#" className="hidden md:flex text-neon-pink font-bold items-center hover:text-white transition-colors">
              VIEW ALL <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Disposables', img: '/assets/uploaded_image_2_1768141023131.png' },
              { name: 'Vape Kits', img: '/assets/uploaded_image_3_1768141023131.png' },
              { name: 'E-Liquids', img: '/assets/uploaded_image_4_1768141023131.png' },
              { name: 'Nic Salts', img: '/assets/uploaded_image_1_1768141023131.png' }
            ].map((cat, i) => (
              <div key={i} className="group relative h-80 bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-neon-pink transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.15)]">
                <div className="absolute inset-0 bg-brand-gray" />

                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-black uppercase italic mb-2 transform group-hover:-translate-y-2 transition-transform">{cat.name}</h3>
                  <span className="inline-flex items-center gap-2 text-neon-pink font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    SHOP NOW <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link href="#" className="md:hidden mt-8 flex justify-center text-neon-pink font-bold items-center hover:text-white transition-colors">
            VIEW ALL CATEGORIES <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-24 bg-brand-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-neon-green/5 skew-x-12 transform translate-x-20" />

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-neon-green text-black px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider mb-6">
              <Zap size={14} fill="black" /> New Arrival
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] text-white">
              HAYATI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">PRO MAX+</span>
            </h2>
            <div className="w-20 h-1.5 bg-neon-green mb-8 rounded-full"></div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
              The UK Ban-Proof Certified 2025 device. 6000+ puffs, 30+ intense flavors. Experience the next generation of vaping.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="bg-neon-green text-black px-10 py-4 rounded-full font-black hover:bg-white transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                BUY NOW
              </Link>
              <Link href="#" className="px-8 py-4 rounded-full font-bold text-white hover:text-neon-green transition-colors flex items-center gap-2">
                VIEW FLAVORS <ChevronRight />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[500px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-neon-green/20 blur-[100px] rounded-full transform scale-75 animate-pulse" />
            <Image
              src="/assets/hayati-product-hero.png"
              alt="Hayati Pro Max 6000"
              fill
              quality={100}
              unoptimized
              className="object-contain rounded-xl relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
