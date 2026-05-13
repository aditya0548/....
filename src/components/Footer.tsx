import React from 'react';
import { Twitter, Github, Disc as Discord } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold tracking-widest text-white mb-6">VELTRIX</div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              The premier AI website generation platform. Transforming prompts into cinematic digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                <Discord className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'Showcase', 'Changelog', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Blog', 'Careers', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Veltrix AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
