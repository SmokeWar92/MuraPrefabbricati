/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Building2, 
  Zap, 
  ShieldCheck, 
  Settings2, 
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servizi', href: '#servizi' },
    { name: 'Progetti', href: '#progetti' },
    { name: 'Metodo', href: '#metodo' },
    { name: 'Chi Siamo', href: '#chi-samo' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://www.muraprefabbricati.it/file/2022/04/logo-mura-prefabbricati-definitivo-cert.png" 
            alt="Mura Prefabbricati Logo" 
            className={`h-12 md:h-16 w-auto object-contain transition-all ${scrolled ? 'brightness-100' : 'brightness-0 invert'}`}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-rust ${scrolled ? 'text-brand-black' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary py-3 px-6 text-xs">Preventivo</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-rust" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} className={scrolled ? 'text-brand-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold uppercase tracking-tighter text-brand-black border-b border-brand-gray-medium pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full">Richiedi Preventivo</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-black">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-50">
        <img 
          src="https://i.imgur.com/ACyb5vP.jpeg" 
          alt="Cantiere Industriale Mura Prefabbricati" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-brand-rust font-bold uppercase tracking-[0.3em] mb-6 block">Edilizia Industriale Evoluta</span>
          <h1 className="text-5xl md:text-8xl text-white mb-8 leading-[0.9]">
            Prefabbricati <br />
            <span className="text-brand-rust">per il futuro</span>
          </h1>
          <p className="text-brand-gray-medium text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
            Progettiamo, produciamo e realizziamo strutture industriali su misura con tecnologie all'avanguardia e precisione millimetrica.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-primary flex items-center justify-center gap-3">
              Scopri i Progetti <ArrowRight size={20} />
            </button>
            <button className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-black">
              Richiedi Preventivo
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 mx-auto" />
      </motion.div>
    </section>
  );
};

const ValueSection = () => {
  const values = [
    { icon: <ShieldCheck size={40} />, title: "Qualità", desc: "Standard costruttivi certificati e materiali di prima scelta." },
    { icon: <Zap size={40} />, title: "Velocità", desc: "Tempi di realizzazione ridotti grazie al sistema prefabbricato." },
    { icon: <Settings2 size={40} />, title: "Su Misura", desc: "Soluzioni architettoniche personalizzate per ogni esigenza." },
    { icon: <Building2 size={40} />, title: "Esperienza", desc: "Oltre 30 anni di leadership nel settore dei prefabbricati." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {values.map((v, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="text-brand-rust">{v.icon}</div>
            <h3 className="text-xl">{v.title}</h3>
            <p className="text-brand-black/60 text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Strutture Prefabbricate", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" },
    { title: "Capannoni Industriali", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" },
    { title: "Edilizia Commerciale", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { title: "Soluzioni Speciali", img: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2014&auto=format&fit=crop" },
  ];

  return (
    <section id="servizi" className="section-padding bg-brand-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-brand-rust font-bold uppercase tracking-widest text-sm">Cosa Facciamo</span>
          <h2 className="text-4xl md:text-6xl mt-4">Servizi <span className="text-brand-rust">Specializzati</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden bg-brand-black"
            >
              <img 
                src={s.img} 
                alt={s.title} 
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h3 className="text-white text-3xl mb-6">{s.title}</h3>
                <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:text-brand-rust transition-colors">
                  Scopri di più <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { name: "Victoria Tetervinas", category: "Residenziale", img: "https://maestrocase.it/uploads/product/43/victoria_tetervinas_64fb0d4eb27c5-370x340.webp" },
    { name: "Gila Kikilis", category: "Residenziale", img: "https://maestrocase.it/uploads/product/4/gila_kikilis_64c3978445c95-370x340.webp" },
    { name: "Ebro Gandras", category: "Residenziale", img: "https://maestrocase.it/uploads/product/61/medinis_namas_ebro_gandras_65cc743c8b229-370x340.webp" },
    { name: "Escur Pempe", category: "Residenziale", img: "https://maestrocase.it/uploads/product/32/medinis_namelis_escur_pempe_660697992ee75-370x340.webp" },
  ];

  return (
    <section id="progetti" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-brand-rust font-bold uppercase tracking-widest text-sm">Realizzazioni</span>
            <h2 className="text-4xl md:text-6xl mt-4">Progetti <span className="text-brand-rust">Recenti</span></h2>
          </div>
          <button className="btn-secondary">Vedi Tutti i Progetti</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[16/10] mb-6 bg-brand-gray-medium">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-rust/0 group-hover:bg-brand-rust/20 transition-colors duration-500" />
              </div>
              <span className="text-brand-rust font-bold uppercase tracking-widest text-xs">{p.category}</span>
              <h3 className="text-2xl mt-2 group-hover:translate-x-2 transition-transform duration-300">{p.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Method = () => {
  const steps = [
    { n: "01", title: "Analisi", desc: "Studio di fattibilità e analisi delle esigenze specifiche del cliente." },
    { n: "02", title: "Progettazione", desc: "Sviluppo tecnico avanzato con software BIM e calcoli strutturali." },
    { n: "03", title: "Produzione", desc: "Realizzazione dei componenti prefabbricati nei nostri stabilimenti." },
    { n: "04", title: "Installazione", desc: "Montaggio rapido e sicuro in cantiere con team specializzati." },
  ];

  return (
    <section id="metodo" className="section-padding bg-brand-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-24 text-center">
          <span className="text-brand-rust font-bold uppercase tracking-widest text-sm">Il Nostro Processo</span>
          <h2 className="text-4xl md:text-6xl mt-4">Metodo <span className="text-brand-rust">Costruttivo</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-white/10 z-0" />
          
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10"
            >
              <div className="w-20 h-20 bg-brand-rust flex items-center justify-center text-3xl font-black mb-8">
                {s.n}
              </div>
              <h3 className="text-2xl mb-4">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { val: "30+", label: "Anni di Esperienza" },
    { val: "500+", label: "Progetti Completati" },
    { val: "150k", label: "mq Realizzati" },
    { val: "100%", label: "Clienti Soddisfatti" },
  ];

  return (
    <section id="chi-samo" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
            alt="Team Mura" 
            className="w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-rust hidden md:flex items-center justify-center p-8 text-white">
            <p className="text-xl font-bold uppercase leading-tight">Leadership e Innovazione dal 1994</p>
          </div>
        </motion.div>

        <div>
          <span className="text-brand-rust font-bold uppercase tracking-widest text-sm">Chi Siamo</span>
          <h2 className="text-4xl md:text-6xl mt-4 mb-8">Solidità <br /> <span className="text-brand-rust">Professionale</span></h2>
          <p className="text-brand-black/70 text-lg mb-12 leading-relaxed">
            Mura Prefabbricati è sinonimo di eccellenza nell'edilizia industriale. Non costruiamo solo capannoni, ma creiamo gli spazi dove le aziende crescono e prosperano. La nostra forza risiede nell'integrazione totale tra progettazione e produzione.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-black text-brand-rust">{s.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  return (
    <section className="section-padding bg-brand-rust text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-7xl mb-12 leading-tight">Realizza il tuo <br /> progetto con noi</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-brand-rust px-12 py-6 font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all">
            Richiedi Preventivo
          </button>
          <button className="border-2 border-white text-white px-12 py-6 font-bold uppercase tracking-widest hover:bg-white hover:text-brand-rust transition-all">
            Contattaci
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://www.muraprefabbricati.it/file/2022/04/logo-mura-prefabbricati-definitivo-cert.png" 
                alt="Mura Prefabbricati Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Leader nella progettazione e realizzazione di strutture prefabbricate industriali e commerciali. Qualità e innovazione dal 1994.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-rust transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-rust transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-rust transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-rust mb-8">Contatti</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-brand-rust" /> Via dell'Industria, 42 - Sassari</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-brand-rust" /> +39 079 1234567</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-brand-rust" /> info@muraprefabbricati.it</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-rust mb-8">Link Rapidi</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><a href="#servizi" className="hover:text-white transition-colors">Servizi</a></li>
              <li><a href="#progetti" className="hover:text-white transition-colors">Progetti</a></li>
              <li><a href="#metodo" className="hover:text-white transition-colors">Metodo</a></li>
              <li><a href="#chi-samo" className="hover:text-white transition-colors">Chi Siamo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-rust mb-8">Newsletter</h4>
            <p className="text-white/40 text-xs mb-6">Iscriviti per ricevere aggiornamenti sui nostri progetti e innovazioni.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-white/5 border-none px-4 py-3 text-sm w-full focus:ring-1 focus:ring-brand-rust outline-none" />
              <button className="bg-brand-rust px-4 py-3 hover:bg-white hover:text-brand-rust transition-all"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2026 Mura Prefabbricati S.r.l. - P.IVA 01234567890</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueSection />
        <Services />
        <Projects />
        <Method />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
