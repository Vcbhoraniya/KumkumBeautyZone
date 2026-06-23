import React from 'react';
export function Footer() {
  return (
    <footer className="bg-kumkum-ink text-kumkum-parchment pt-12 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Massive Logo */}
        <div className="mb-12 md:mb-24 text-center">
          <h2 className="text-[12vw] sm:text-[15vw] leading-none font-heading text-kumkum-parchment/10 uppercase tracking-widest select-none">
            Kumkum
          </h2>
        </div>

       

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-[10px] uppercase tracking-widest text-kumkum-parchment/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Kumkum Beauty Zone</p>
          <p className="font-heading italic normal-case text-xs sm:text-sm text-kumkum-parchment/60">
            Crafted with intention, since 2020.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <a 
              href="https://www.instagram.com/kumkumbeautyparlour__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kumkum-gold transition-colors text-[10px] uppercase tracking-widest">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>);

}