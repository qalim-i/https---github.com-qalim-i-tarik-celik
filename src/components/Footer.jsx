import React from 'react';
import { TrackLineH, CrosshairLabel } from './ui';
import tarikFooter from '../assets/tarik-footer.png';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-32 pb-16 px-8 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={tarikFooter} 
          alt="Tarik Background" 
          className="w-full h-full object-cover object-top grayscale mix-blend-luminosity opacity-90"
        />
      </div>
      {/* 
        Massive Watermark behind the footer 
        FIX: Made text-ink opacity-5 because it sits over the paper background outside the spine
      */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="font-serif text-[15rem] md:text-[25rem] text-muted-light opacity-[0.3] select-none">
          TARIK
        </h1>
      </div> */}

      <div className="relative z-10">
        <TrackLineH className="bg-ink/10 mb-16 mt-24" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0 mb-32">
          {/* Left Block */}
          <div>
            <CrosshairLabel>Contact Data</CrosshairLabel>
            <div className="mt-8 space-y-4">
              {/* Changed to text-ink since this content sits inside the footer which might not be covered by the spine */}
              <a className="label-tech text-charcoal hover:text-crimson transition-colors cursor-pointer" href="https://www.twitch.tv/tarik" target="_blank" rel="noopener noreferrer">twitch.tv/tarik</a><br />
              <a className="label-tech text-charcoal hover:text-crimson transition-colors cursor-pointer" href="https://www.youtube.com/@tarik" target="_blank" rel="noopener noreferrer">youtube.com/@tarik</a><br />
              <a className="label-tech text-charcoal hover:text-crimson transition-colors cursor-pointer" href="https://www.x.com/tarik" target="_blank" rel="noopener noreferrer">x.com/tarik</a><br />
              <a className="label-tech text-charcoal hover:text-crimson transition-colors cursor-pointer" href="https://www.instagram.com/officialtarik/" target="_blank" rel="noopener noreferrer">instagram.com/officialtarik/</a><br />
            </div>
          </div>

          {/* Right Block - Back to top */}
          <div className="md:text-right">
            <button
              onClick={scrollToTop}
              className="label-tech text-muted hover:text-charcoal transition-colors"
            >
              Return to Origin ↑
            </button>
          </div>
        </div>

        {/* Bottom copyright & dots */}
        <div className="flex justify-between items-end">
          <p className="label-tech text-muted">
            © {new Date().getFullYear()} TARIK CELIK
          </p>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 bg-crimson" />
            <div className="w-1.5 h-1.5 bg-ink/20" />
            <div className="w-1.5 h-1.5 bg-ink/20" />
          </div>
        </div>
      </div>
    </footer>
  );
};
