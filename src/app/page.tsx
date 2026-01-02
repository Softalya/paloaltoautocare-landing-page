'use client';

import { useState } from 'react';

export default function Home() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

   const navigation = [
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#services' },
      { label: 'Pre-Owned', href: '#pre-owned' },
      { label: 'Process', href: '#process' },
      { label: 'Reviews', href: '#reviews' },
   ];

   const testimonials = [
      {
         text: 'Finally found a mechanic in Palo Alto I can trust. They explained everything clearly and the bill was exactly what they quoted. Highly recommended.',
         name: 'Sarah Jenkins',
         role: 'Local Resident',
         avatar:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDALpUPdVaL3QJprKfbcetgnqOL_0-GAKTxVWgCUBF-Ph3Pk--8LIIE_VMUgCJuQl7aVH0gSHT48Rff6ZcpO-1Q1yu9_l3BXJ_pYCTvVwL8eK4IhcKIRNTsKHuyHhdIozfwaeDSBN_jyWB4hLRbZgHiwC2dTNm2OW26x-YDj-6F6j1kD7nOFVx4nO2pA4hzZdYgfg0Ssa6PtYDZmXcnBre4aKKCP-xTTG6W173548BuwuiJp3vbGslS-4w5joV3Pju5BhfIu88h_EI")',
      },
      {
         text: 'Fast, friendly, and professional. My BMW drives like new again. The team at Palo Alto Auto Care really knows their stuff.',
         name: 'Michael Chen',
         role: 'BMW Owner',
         avatar:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmYPgBtwwMFo-gKY8SPa2P8bueKZLn1qWFlpd_18afV_B4gQx62ig8Z7zO2O2bnTaGWMq4tUXnt3X3662icc5tISJkgNWtSOBkMZ4BVCWWeKNt3HZk-gG3tYPabhhfE5Wh3JJAwm2gZMuHJRIAXsDkTLRvJnFC24Q5okgDg5QEpI2bIMZSrGGilC-oICi6PrvuXvjtmRJlz-1vLI-5_9D3GZJLKk3LBaSCVN_cF0kaBLiSdowzjdr9_Wo1QbUKx5cHKV1RC_k2pmk")',
      },
      {
         text: '"They squeezed me in for an emergency battery replacement. I was back on the road in under an hour. Outstanding service."',
         name: 'David Rossi',
         role: 'Business Owner',
         avatar:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0geR0bzYzI7YnX6huzqSUfO8NyCujK_EN2C3dYPX9ZaBJHbqvEcZS1LbO_ZrYZ_rJraZocuw9mOwWnMkt_kXS8QxLsx6slvQiKlRQVQ5kRwg5MTiHCyXVFvCdEW39PkD_1iuj1iSquj3DYGp3wpHCR4vk3MoGWz-T7fKIzojm38x6toJQjCciKXjPWlawO67grkW-PPh1RT-OQGnOpwTLPbroPgnqx0kv3S6ztWaNVk7cXr2Idr5txnfU5cYoPCLRjYrQa6IldcA")',
      },
      {
         text: 'Clear communication, fair pricing, and exceptional workmanship. This is how automotive service should be.',
         name: 'Andrew Miller',
         role: 'Palo Alto',
         avatar: null,
      },
      {
         text: "I've serviced multiple vehicles here over the years. Consistently reliable, honest, and detail-oriented.",
         name: 'Laura Stein',
         role: 'Long-Term Client',
         avatar: null,
      },
      {
         text: 'They treated my Mercedes with the level of care I expect from a high-end service center. No shortcuts, no surprises.',
         name: 'Jonathan Park',
         role: 'Mercedes-Benz Owner',
         avatar: null,
      },
      {
         text: 'Scheduling was easy, service was efficient, and everything was explained upfront. Extremely professional operation.',
         name: 'Emily Rogers',
         role: 'Palo Alto',
         avatar: null,
      },
      {
         text: "It's rare to find a local shop that combines technical expertise with genuine customer care. Highly trustworthy.",
         name: 'Mark Alvarez',
         role: 'Local Business Consultant',
         avatar: null,
      },
      {
         text: 'From diagnostics to delivery, the experience was seamless. This is now my go-to auto care provider.',
         name: 'Daniel Foster',
         role: 'Bay Area',
         avatar: null,
      },
   ];

   const closeMobileMenu = () => setIsMobileMenuOpen(false);

   return (
      <div>
         {/* NAVIGATION */}
         <nav className="fixed top-0 left-0 right-0 z-50 w-full glass-nav border-b border-surface-border">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16 sm:h-20">
                  <a href="#" className="flex-shrink-0 flex items-center">
                     <img src="/logo/palo-alto-lux-horizontal-black.svg" alt="Palo Alto Auto Care" className="h-7 sm:h-8 w-auto dark:hidden" />
                     <img src="/logo/palo-alto-lux-horizontal-white.svg" alt="Palo Alto Auto Care" className="h-7 sm:h-8 w-auto hidden dark:block" />
                  </a>

                  <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                     {navigation.map((link) => (
                        <a key={link.label} className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href={link.href}>
                           {link.label}
                        </a>
                     ))}
                  </div>

                  <div className="hidden md:flex items-center gap-4">
                     <a
                        className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-lg shadow-red-900/20"
                        href="#contact"
                     >
                        Contact Us
                     </a>
                  </div>

                  <div className="md:hidden flex items-center">
                     <button
                        className="text-gray-300 hover:text-white p-2"
                        type="button"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                     >
                        <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                     </button>
                  </div>
               </div>
            </div>
            <div
               id="mobile-navigation"
               className={`md:hidden transition-all duration-300 ease-in-out origin-top ${
                  isMobileMenuOpen ? 'max-h-screen opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 pointer-events-none'
               }`}
            >
               <div className="px-4 sm:px-6 pt-2 pb-6 bg-background-dark/95 dark:bg-background-dark border-t border-surface-border/80 backdrop-blur-lg">
                  <div className="flex flex-col gap-1">
                     {navigation.map((link) => (
                        <a
                           key={`mobile-${link.label}`}
                           className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-gray-200 hover:bg-white/5 hover:text-white transition-colors"
                           href={link.href}
                           onClick={closeMobileMenu}
                        >
                           {link.label}
                           <span className="material-symbols-outlined text-base text-primary/70">arrow_forward</span>
                        </a>
                     ))}
                  </div>
                  <a
                     className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg h-11 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-lg shadow-red-900/20"
                     href="#contact"
                     onClick={closeMobileMenu}
                  >
                     Contact Us
                     <span className="material-symbols-outlined text-base">call</span>
                  </a>
               </div>
            </div>
         </nav>

         {/* HERO */}
         <section className="relative min-h-[90vh] flex items-center pt-20">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10" />
               <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10" />
               <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  data-alt="High-quality, wide panoramic shot of a modern auto workshop with friendly professional staff interacting with customers, featuring a car actively being serviced in a well-lit, clean, and welcoming environment conveying trust and expertise"
                  style={{
                     backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHMtotWpShvVG_XxKg6FQHoduD9hv8myi9eGW8lcFXK-HmVN0hb6qVjwsLxeUrskaXbQ05ervjbs0iDGAobloHGv5DwEFfA23dlCPETtf6DAx6-dN1mkKdE6fnwz8d235QsGkVUXV6kzGAQCXlUQ2X66DEQ47LHDGLg57MCJJjdf28bUPLaQj97s8ERBuWbGEMeFIaU0hCbLohdYfcc9cdv1eBrspcg1BzPackZ-dYFFB-au9EXIUJ0Gt-7EZqmECAl7eKhRUxl3o")',
                  }}
               />
            </div>

            <div className="relative z-20 layout-container w-full px-4 sm:px-6 lg:px-40 py-12 md:py-20">
               <div className="max-w-[700px] flex flex-col gap-6 md:gap-8 animate-fade-in-up">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                     <span className="w-8 h-[2px] bg-primary" />
                     <span>Premier Auto Service</span>
                  </div>

                  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
                     Palo Alto’s Trusted <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Auto Care Experts</span>
                  </h1>

                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-[540px]">
                     Expert maintenance for the discerning driver. Reliability, quality craftsmanship, and a friendly, local feel right here in the Bay Area.
                  </p>

                  <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-400">
                     <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                        <span>ASE Certified</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">stars</span>
                        <span>5-Star Rated</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* WHY US */}
         <section className="py-20 bg-surface-dark border-t border-surface-border relative">
            <div className="layout-container px-4 sm:px-6 max-w-7xl lg:px-40 mx-auto">
               <div className="flex flex-col items-center w-full mb-12">
                  <div className="max-w-2xl text-center">
                     <h2 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Why Us</h2>
                     <h3 className="text-white text-3xl md:text-4xl font-black leading-tight">Redefining Auto Care & Sales</h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl text-center">
                     We&apos;ve eliminated the friction from car ownership. Whether you&apos;re fixing a problem or finding a new ride, we make it effortless.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group p-6 rounded-xl border border-surface-border bg-background-dark hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                     <div className="relative size-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-[28px]">directions_car</span>
                        <span className="material-symbols-outlined text-[16px] absolute -top-1 -right-1 text-primary bg-background-dark rounded-full">
                           check_circle
                        </span>
                     </div>
                     <h4 className="text-white text-2xl font-black mb-4">Concierge Service</h4>
                     <p className="text-gray-400 leading-relaxed mb-6">
                        Time is your most valuable asset. We offer a premium pick-up and delivery service for all repairs and inspections. From your driveway to
                        our shop and back—you never have to leave your home or office.
                     </p>
                     <div className="bg-surface-dark/80 rounded-lg p-4 border border-surface-border/50">
                        <p className="text-primary text-sm font-medium italic">&quot;All that&apos;s left for you is to drive, we handle the rest.&quot;</p>
                     </div>
                  </div>

                  <div className="group p-6 rounded-xl border border-surface-border bg-background-dark hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                     <div className="size-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 text-primary">
                        <span className="material-symbols-outlined text-[28px]">handshake</span>
                     </div>
                     <h4 className="text-white text-2xl font-black mb-4">Stress-Free Buying &amp; Selling</h4>
                     <p className="text-gray-400 leading-relaxed mb-6">
                        Navigate the car market with a partner you can trust. We remove the uncertainty of buying and selling by providing verified mechanics
                        reports, handling all paperwork, and ensuring fair, transparent pricing.
                     </p>
                     <div className="bg-surface-dark/80 rounded-lg px-4 py-3 border border-surface-border/50 flex items-center gap-3">
                        <div className="size-4 rounded-full bg-primary flex items-center justify-center shrink-0">
                           <span className="material-symbols-outlined text-black !text-sm">check</span>
                        </div>
                        <span className="text-white text-sm font-medium">Smooth &amp; Transparent Process</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* WHY WE'RE DIFFERENT */}
         <section className="py-20 bg-background-dark border-t border-surface-border relative">
            <div className="layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-7xl">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                  <div className="max-w-2xl">
                     <h2 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Why We’re Different</h2>
                     <h3 className="text-white text-3xl md:text-4xl font-black leading-tight">Built on Trust &amp; Transparency</h3>
                  </div>
                  <p className="text-gray-400 max-w-md text-sm md:text-base">
                     We combine old-school craftsmanship with modern diagnostics to give your vehicle the care it deserves without the dealership price tag.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group p-6 rounded-xl border border-surface-border bg-surface-dark hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                     <div className="size-12 rounded-lg bg-surface-border/50 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[28px]">shield_person</span>
                     </div>
                     <h4 className="text-white text-xl font-bold mb-3">Professional Mechanics</h4>
                     <p className="text-gray-400 leading-relaxed">
                        ASE Certified technicians you can trust with your vehicle. We treat every car as if it were our own.
                     </p>
                  </div>

                  <div className="group p-6 rounded-xl border border-surface-border bg-surface-dark hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                     <div className="size-12 rounded-lg bg-surface-border/50 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[28px]">sentiment_satisfied</span>
                     </div>
                     <h4 className="text-white text-xl font-bold mb-3">Fast &amp; Friendly</h4>
                     <p className="text-gray-400 leading-relaxed">
                        Customer service that prioritizes your time. No jargon, just clear explanations and honest timelines.
                     </p>
                  </div>

                  <div className="group p-6 rounded-xl border border-surface-border bg-surface-dark hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                     <div className="size-12 rounded-lg bg-surface-border/50 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[28px]">reviews</span>
                     </div>
                     <h4 className="text-white text-xl font-bold mb-3">High Ratings</h4>
                     <p className="text-gray-400 leading-relaxed">
                        Consistently rated 5 stars by real Palo Alto vehicle owners for our reliability and fair pricing.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* OUR SERVICES */}
         <section className="py-20 bg-[#120c0c]" id="services">
            <div className="layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-7xl">
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-primary font-bold text-sm tracking-wider uppercase mb-3">Our Services</h2>
                  <h3 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">Comprehensive Auto Care</h3>
                  <p className="text-gray-400">From routine checkups to complex engine repairs, we have the tools and expertise to handle it all.</p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group">
                     <div className="flex items-start justify-between">
                        <div className="size-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-primary">
                           <span className="material-symbols-outlined">oil_barrel</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-xl">arrow_outward</span>
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Routine Maintenance</h4>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                           Oil changes, fluid top-ups, and scheduled logbook servicing to keep your warranty intact.
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group">
                     <div className="flex items-start justify-between">
                        <div className="size-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-primary">
                           <span className="material-symbols-outlined">air</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-xl">arrow_outward</span>
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Smog &amp; Emissions</h4>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                           State-certified testing and repairs to ensure your vehicle is compliant and eco-friendly.
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group">
                     <div className="flex items-start justify-between">
                        <div className="size-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-primary">
                           <span className="material-symbols-outlined">memory</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-xl">arrow_outward</span>
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Diagnostics &amp; Repairs</h4>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                           Advanced computer diagnostics to identify that check engine light issue accurately.
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group">
                     <div className="flex items-start justify-between">
                        <div className="size-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-primary">
                           <span className="material-symbols-outlined">tire_repair</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-xl">arrow_outward</span>
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Tire Services</h4>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                           Wheel alignment, rotation, and premium tire replacements for a smoother ride.
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group">
                     <div className="flex items-start justify-between">
                        <div className="size-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-primary">
                           <span className="material-symbols-outlined">battery_charging_full</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-xl">arrow_outward</span>
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Electrical &amp; Battery</h4>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                           Battery testing, alternator replacement, and complex electrical system troubleshooting.
                        </p>
                     </div>
                  </div>

                  <div className="flex flex-col gap-4 p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group">
                     <div className="flex items-start justify-between">
                        <div className="size-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-primary">
                           <span className="material-symbols-outlined">health_and_safety</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-xl">arrow_outward</span>
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Safety Checkups</h4>
                        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                           Pre-purchase inspections and seasonal safety checkups for peace of mind.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CAR SALES SHOWCASE */}
         <section className="py-20 bg-background-dark border-y border-surface-border" id="pre-owned">
            <div className="layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-7xl">
               <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-primary font-bold text-sm tracking-wider uppercase mb-3">Car Sales Showcase</h2>
                  <h3 className="text-white text-3xl md:text-4xl font-black leading-tight mb-6">
                     Palo Alto Auto Care: <br className="hidden md:block" />
                     <span className="text-gray-400">Where both the buyer and seller leave happy.</span>
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">Experience a safer way to buy and sell. We are mechanics first, salesmen second.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group border border-surface-border">
                     <img
                        alt="Premium Vehicle Showcase 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfHxOcjdqZCDsYfm3EhkKLt-OCmkOPM1wqrEVFNKxMiWHL3azArAK2yWn981xWCx0gJ-9zzdJ0fcWXEz7JLEWMJIAo79BTJruhvsO77mYTwPDqd619bO2Q_O_B0XXyxBX5Hol-UUJjVHiH54CUmX9aj0V8lioOw4XGKgf2yrJUls36Sw2WOAw_bWfxyp9TmkWtf92ZUGCeXs65VhxSBtwxwnxsyGm7VU6kutW6l0JWRP0TiIWv4rJSSsjalj0YAv0HlY9gxoNKji4"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent" />
                     <div className="absolute bottom-4 left-4">
                        <span className="text-white font-bold text-lg">Premium Quality</span>
                     </div>
                  </div>

                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group border border-surface-border">
                     <img
                        alt="Premium Vehicle Showcase 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnMiTRXaYrjYmSVSzTz_wjWrXZumJb4qrutU_ByeACnb1wElNOBQDtsGmasxO8AiQ24SwCWRnLiPMA-w7ENGGU3L5UtnOrrPm8s6QEIyfOpHAYJKQ0pN96H4dwvlD8XtxJ9S6swFGCtejKJexeXqP6iads52ZcT51_wnKt5WTjwVYxlXl09l9TyAUNsBH_47iBbXNSy45nqxybXSeKbsvr3ygBap4umzlbctVVJBODn_0GtHoFQc1xww-m94st9qspyuk-D4Xz1PM"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent" />
                     <div className="absolute bottom-4 left-4">
                        <span className="text-white font-bold text-lg">Expertly Inspected</span>
                     </div>
                  </div>

                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group border border-surface-border">
                     <img
                        alt="Premium Vehicle Showcase 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAb9UpY9yS38ivYBxLz_PW37h9hL4FWQU0ouJQl4m0Cq-v-Rjdoh0p3SI05tuqmrvdIqru0YwrBcr-jWzEBgxGsfc93WwwnxhMKxxnXbCpPMWS9tzocPfisg9APcCDLWARAKRwPtsV6917IcAW6eew6Fg67RYQz9u-DtWnqCV8nMycvagPiq6uBqy4TOby0JMBUjYp_cJqA_miRvCWtP7oqbW4_U3luXMcJ8Kz6xd3kKc0ZJLgWCcNGGz5Jgb1SiTVXhi2yr-vWTk"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent" />
                     <div className="absolute bottom-4 left-4">
                        <span className="text-white font-bold text-lg">Mechanic Approved</span>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                  <div className="flex flex-col h-full bg-surface-dark rounded-2xl p-8 border border-surface-border hover:border-surface-border/80 transition-colors">
                     <div className="mb-8 border-b border-surface-border pb-4">
                        <h4 className="text-white text-2xl font-black mb-2 flex items-center gap-3">
                           <span className="material-symbols-outlined text-primary text-3xl">shopping_cart_checkout</span>
                           Why Buy From Us?
                        </h4>
                        <p className="text-gray-400 text-sm">Drive away with confidence in your investment.</p>
                     </div>

                     <ul className="space-y-8">
                        <li className="flex gap-4 items-start">
                           <div className="shrink-0 size-10 rounded-full bg-surface-border/40 flex items-center justify-center text-primary mt-1">
                              <span className="material-symbols-outlined">verified_user</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold text-lg mb-1">Warranty Included</h5>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                 Every vehicle includes a <strong>6-Month / 15,000-Mile Warranty</strong>. We stand behind our inspections.
                              </p>
                           </div>
                        </li>

                        <li className="flex gap-4 items-start">
                           <div className="shrink-0 size-10 rounded-full bg-surface-border/40 flex items-center justify-center text-primary mt-1">
                              <span className="material-symbols-outlined">car_repair</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold text-lg mb-1">Service Bonus</h5>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                 The first routine maintenance is <strong>free</strong> for any car purchased from us.
                              </p>
                           </div>
                        </li>

                        <li className="flex gap-4 items-start">
                           <div className="shrink-0 size-10 rounded-full bg-surface-border/40 flex items-center justify-center text-primary mt-1">
                              <span className="material-symbols-outlined">engineering</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold text-lg mb-1">Mechanic Certified</h5>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                 Every car is inspected by experts. We sell peace of mind, knowing the technical condition is flawless.
                              </p>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div className="flex flex-col h-full bg-surface-dark rounded-2xl p-8 border border-surface-border hover:border-surface-border/80 transition-colors">
                     <div className="mb-8 border-b border-surface-border pb-4">
                        <h4 className="text-white text-2xl font-black mb-2 flex items-center gap-3">
                           <span className="material-symbols-outlined text-primary text-3xl">sell</span>
                           Why Sell to Us?
                        </h4>
                        <p className="text-gray-400 text-sm">Get fair value without the dealership games.</p>
                     </div>

                     <ul className="space-y-8">
                        <li className="flex gap-4 items-start">
                           <div className="shrink-0 size-10 rounded-full bg-surface-border/40 flex items-center justify-center text-primary mt-1">
                              <span className="material-symbols-outlined">payments</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold text-lg mb-1">Instant Cash</h5>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                 Skip the waiting. We can buy your car instantly at a fair price based on real market data.
                              </p>
                           </div>
                        </li>

                        <li className="flex gap-4 items-start">
                           <div className="shrink-0 size-10 rounded-full bg-surface-border/40 flex items-center justify-center text-primary mt-1">
                              <span className="material-symbols-outlined">storefront</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold text-lg mb-1">Consignment Service</h5>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                 We sell on your behalf to qualified buyers for top dollar, handling all the paperwork and showing.
                              </p>
                           </div>
                        </li>

                        <li className="flex gap-4 items-start">
                           <div className="shrink-0 size-10 rounded-full bg-surface-border/40 flex items-center justify-center text-primary mt-1">
                              <span className="material-symbols-outlined">search_check</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold text-lg mb-1">Expert Appraisal</h5>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                 Honest, accurate appraisals based on technical condition, not just the odometer.
                              </p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="mt-16 text-center">
                  <a
                     className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold shadow-lg shadow-red-900/20"
                     href="#contact"
                  >
                     Contact Our Sales Team <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
               </div>
            </div>
         </section>

         {/* OUR PROCESS */}
         <section className="py-20 bg-background-dark border-t border-surface-border" id="process">
            <div className="layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-7xl">
               <div className="mb-16">
                  <h2 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Our Process</h2>
                  <h3 className="text-white text-3xl md:text-4xl font-black leading-tight">Easy &amp; Transparent Service</h3>
               </div>

               <div className="relative">
                  <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-surface-border z-0" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                     <div className="flex flex-col lg:items-center lg:text-center group">
                        <div className="size-24 rounded-full bg-surface-dark border-2 border-primary lg:border-surface-border group-hover:border-primary flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black/50">
                           <span className="material-symbols-outlined text-white text-4xl">calendar_month</span>
                        </div>
                        <h4 className="text-white text-xl font-bold mb-2">1. Book</h4>
                        <p className="text-gray-400 text-sm">Schedule a time that works for you in under 60 seconds.</p>
                     </div>

                     <div className="flex flex-col lg:items-center lg:text-center group">
                        <div className="size-24 rounded-full bg-surface-dark border-2 border-surface-border group-hover:border-primary flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black/50">
                           <span className="material-symbols-outlined text-white text-4xl">directions_car</span>
                        </div>
                        <h4 className="text-white text-xl font-bold mb-2">2. Drop Off</h4>
                        <p className="text-gray-400 text-sm">Bring your car in. We have a comfy lounge if you prefer to wait.</p>
                     </div>

                     <div className="flex flex-col lg:items-center lg:text-center group">
                        <div className="size-24 rounded-full bg-surface-dark border-2 border-surface-border group-hover:border-primary flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black/50">
                           <span className="material-symbols-outlined text-white text-4xl">monitor_heart</span>
                        </div>
                        <h4 className="text-white text-xl font-bold mb-2">3. Expert Diagnosis</h4>
                        <p className="text-gray-400 text-sm">We inspect and send a digital report before starting repairs.</p>
                     </div>

                     <div className="flex flex-col lg:items-center lg:text-center group">
                        <div className="size-24 rounded-full bg-surface-dark border-2 border-surface-border group-hover:border-primary flex items-center justify-center mb-6 transition-colors shadow-lg shadow-black/50">
                           <span className="material-symbols-outlined text-white text-4xl">check_circle</span>
                        </div>
                        <h4 className="text-white text-xl font-bold mb-2">4. Road Ready</h4>
                        <p className="text-gray-400 text-sm">Pick up your vehicle, repaired, washed, and ready to go.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* TESTIMONIALS */}
         <section className="py-20 bg-[#120c0c] overflow-hidden" id="reviews">
            <div className="layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-7xl">
               <div className="text-center mb-16">
                  <h2 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Testimonials</h2>
                  <h3 className="text-white text-3xl md:text-4xl font-black leading-tight">What Our Clients Say</h3>
               </div>

               <div className="relative">
                  <div className="overflow-hidden">
                     <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{
                           transform: `translateX(calc(-${currentTestimonialIndex} * (100% / 3)))`,
                        }}
                     >
                        {testimonials.map((testimonial, index) => (
                           <div
                              key={index}
                              className="flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)] min-w-[300px] bg-surface-dark p-8 rounded-2xl border border-surface-border relative"
                           >
                              <span className="material-symbols-outlined absolute top-6 right-6 text-surface-border text-6xl opacity-20">format_quote</span>
                              <div className="flex gap-1 text-yellow-500 mb-4">
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                                 <span className="material-symbols-outlined text-sm">star</span>
                              </div>
                              <p className="text-gray-300 italic mb-6">{testimonial.text}</p>
                              <div className="flex items-center gap-4">
                                 <div
                                    className="size-10 rounded-full bg-gray-600 bg-cover bg-center"
                                    data-alt={`Portrait of a smiling customer named ${testimonial.name}`}
                                    style={testimonial.avatar ? { backgroundImage: testimonial.avatar } : {}}
                                 />
                                 <div>
                                    <h5 className="text-white font-bold text-sm">{testimonial.name}</h5>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-8">
                     <button
                        onClick={() => {
                           setCurrentTestimonialIndex((prev) => (prev === 0 ? Math.max(0, testimonials.length - 3) : prev - 1));
                        }}
                        className="flex items-center justify-center size-12 rounded-full bg-surface-dark border border-surface-border hover:border-primary hover:bg-primary/10 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentTestimonialIndex === 0}
                        aria-label="Previous testimonials"
                     >
                        <span className="material-symbols-outlined">chevron_left</span>
                     </button>

                     <div className="flex gap-2">
                        {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
                           <button
                              key={index}
                              onClick={() => setCurrentTestimonialIndex(index)}
                              className={`size-2 rounded-full transition-all duration-300 ${
                                 currentTestimonialIndex === index ? 'bg-primary w-8' : 'bg-surface-border hover:bg-primary/50'
                              }`}
                              aria-label={`Go to testimonial group ${index + 1}`}
                           />
                        ))}
                     </div>

                     <button
                        onClick={() => {
                           setCurrentTestimonialIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
                        }}
                        className="flex items-center justify-center size-12 rounded-full bg-surface-dark border border-surface-border hover:border-primary hover:bg-primary/10 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentTestimonialIndex >= testimonials.length - 3}
                        aria-label="Next testimonials"
                     >
                        <span className="material-symbols-outlined">chevron_right</span>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* KEEP YOUR VEHICLE RUNNING SMOOTHLY */}
         <section className="relative py-24 bg-surface-dark">
            <div
               className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
               data-alt="Close up of mechanic hands shaking with a customer hands over car keys"
               style={{
                  backgroundImage:
                     'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDizgTQ8RbDfN7-sWJmYJo3dRYRdtAlnxkcXNvyfNEDfBmWCN_F7FPksF7HEi2JQO7h1HOlTJkmoyOsbE5RNu2VsEpPIteoMAF5Bdp0u3ZF4Qh3jY9OFgUeD5Wj09CUwYmOcDTC3QEPX9YK23uR0fm_ONvwCv_6lhqkY5GFTp6xV6g-iyiSZuOFDjPX8_LmqFepkao3A1vEqnvUnvBMqP2Dxi8SSsrRSr3tLjUF3FVtoFHu-HCxy_whhsKz_23QeZyw5bOqyFJeLXs")',
               }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10" />
            <div className="relative z-20 layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-5xl text-center">
               <h2 className="text-white text-4xl md:text-5xl font-black mb-6">Keep Your Vehicle Running Smoothly</h2>
               <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  Don&apos;t wait for a breakdown. Schedule your preventative maintenance or repair today with Palo Alto&apos;s most trusted mechanics.
               </p>
            </div>
         </section>

         {/* CONTACT US */}
         <section className="py-20 bg-background-dark border-t border-surface-border" id="contact">
            <div className="layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-7xl">
               <div className="max-w-4xl mx-auto bg-surface-dark border border-surface-border rounded-2xl p-8 md:p-12 shadow-2xl">
                  <div className="text-center mb-10">
                     <h2 className="text-white text-3xl md:text-4xl font-black mb-4">Contact Us</h2>
                     <p className="text-gray-400">Ready to schedule your service? Send us a message below.</p>
                  </div>

                  <form action="#" className="space-y-6" method="POST">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-300" htmlFor="name">
                              Full Name
                           </label>
                           <input
                              className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                              id="name"
                              name="name"
                              placeholder="Your name"
                              type="text"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-300" htmlFor="phone">
                              Phone
                           </label>
                           <input
                              className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                              id="phone"
                              name="phone"
                              placeholder="(555) 123-4567"
                              type="tel"
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-300" htmlFor="email">
                           Email
                        </label>
                        <input
                           className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                           id="email"
                           name="email"
                           placeholder="you@example.com"
                           type="email"
                        />
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-300" htmlFor="message">
                           Message
                        </label>
                        <textarea
                           className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                           id="message"
                           name="message"
                           placeholder="How can we help you?"
                           rows={4}
                        />
                     </div>

                     <button
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-primary/20"
                        type="submit"
                     >
                        Send Message
                     </button>
                  </form>
               </div>
            </div>
         </section>

         {/* FOOTER */}
         <footer className="bg-background-dark border-t border-surface-border pt-20 pb-10">
            <div className="layout-container px-4 sm:px-6 lg:px-40 mx-auto max-w-7xl">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
                  <div className="flex flex-col gap-8">
                     <div>
                        <div className="flex items-center gap-2 mb-4">
                           <img src="/logo/palo-alto-lux-horizontal-black.svg" alt="Palo Alto Auto Care" className="h-8 w-auto dark:hidden" />
                           <img src="/logo/palo-alto-lux-horizontal-white.svg" alt="Palo Alto Auto Care" className="h-8 w-auto hidden dark:block" />
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                           We are a locally owned auto shop dedicated to honest work and quality parts. Our goal is to keep our community safe on the road with
                           reliable vehicle service.
                        </p>
                     </div>

                     <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                           <div className="size-10 rounded-lg bg-surface-dark flex items-center justify-center shrink-0 text-primary border border-surface-border">
                              <span className="material-symbols-outlined">location_on</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold">Visit Us</h5>
                              <p className="text-gray-400 text-sm">
                                 123 El Camino Real
                                 <br />
                                 Palo Alto, CA 94301
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="size-10 rounded-lg bg-surface-dark flex items-center justify-center shrink-0 text-primary border border-surface-border">
                              <span className="material-symbols-outlined">call</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold">Call Us</h5>
                              <p className="text-gray-400 text-sm">(650) 555-0199</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="size-10 rounded-lg bg-surface-dark flex items-center justify-center shrink-0 text-primary border border-surface-border">
                              <span className="material-symbols-outlined">schedule</span>
                           </div>
                           <div>
                              <h5 className="text-white font-bold">Opening Hours</h5>
                              <p className="text-gray-400 text-sm">
                                 Mon - Fri: 8:00 AM - 6:00 PM
                                 <br />
                                 Sat: 9:00 AM - 2:00 PM
                                 <br />
                                 Sun: Closed
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="w-full h-[300px] lg:h-auto rounded-xl overflow-hidden border border-surface-border relative bg-surface-dark">
                     <div
                        className="w-full h-full bg-cover bg-center opacity-80"
                        data-alt="Map showing location of Palo Alto Auto Care"
                        data-location="Palo Alto, California"
                        style={{
                           backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBRBpb7UfxRdfM3BzCfFWHkaxLWBl_Aw7Q92vaxrzXGwc6wJWsBnefKtWpGnRxhgKGUM9tMubOqc5kKgTynqvC2KcHEqdPK1XOtLOLhlQQAuyX4rle4Sl6EFENhEmoKJOE2xK5QMaQX69up9PyV-cuUbZ3cW9YnLS7O9Z3-Bw-ihxC31eMsZr5yeGQd2zWCJaI6Qa7f7GnA9fX8docDkyoSBfVWF5bPZ1heobawcbm-hahf5B8o6CO4NcM-LdhsPMnI_WqfjyRzbE")',
                        }}
                     >
                        <div className="absolute inset-0 bg-black/30" />
                     </div>
                  </div>
               </div>

               <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-500 text-sm text-center md:text-left">© 2023 Palo Alto Auto Care LLC. All rights reserved.</p>
                  <div className="flex gap-6">
                     <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
                        Privacy Policy
                     </a>
                     <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
                        Terms of Service
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
