import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, MonitorPlay, MessageSquare, Video, Image } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { label: "About", href: "#about" },
    { label: "Achievements", href: "#highlights" },
    { label: "Events", href: "#tournaments" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <footer className="bg-esports-dark py-16 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">

        <div className="flex flex-col items-center">
          {/* Scroll to top */}
          <motion.button
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-500 hover:text-white hover:border-sentinels-red/30 transition-all mb-12"
          >
            <ChevronUp size={20} />
          </motion.button>

          {/* Nav links */}
          <nav className="flex gap-8 mb-10">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors font-medium tracking-wider uppercase">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4 mb-10">
            {[
              { icon: <MonitorPlay size={18} /> },
              { icon: <MessageSquare size={18} /> },
              { icon: <Video size={18} /> },
              { icon: <Image size={18} /> },
            ].map((s, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-500 hover:text-white hover:border-sentinels-red/30 transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Brand + copyright */}
          <h2 className="text-4xl font-heading font-black tracking-tighter text-white/[0.06] mb-4 uppercase">Tarik</h2>
          <p className="text-gray-700 text-xs text-center">
            © {new Date().getFullYear()} Tarik Celik. All rights reserved.<br />
            Not affiliated with Riot Games or Sentinels official properties.
          </p>
        </div>
      </div>
    </footer>
  );
};
