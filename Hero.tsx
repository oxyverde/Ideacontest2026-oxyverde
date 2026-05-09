import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-12 overflow-hidden"
    >
      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full border border-cyan-glow/5 animate-[spinSlow_60s_linear_infinite] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full border border-teal-neon/5 animate-[spinSlow_45s_linear_infinite_reverse] pointer-events-none" />

      {/* Logos */}
      <div
        className={`flex items-center gap-4 sm:gap-6 mb-8 transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="glass-card p-3 sm:p-4 rounded-2xl hover:transform-none">
          <img
            src="https://i.postimg.cc/y6ycB0Tr/Team_OxyVerde_logo.png"
            alt="Team OxyVerde"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>
        <div className="glass-card p-3 sm:p-4 rounded-2xl hover:transform-none">
          <img
            src="https://i.postimg.cc/1R7RptmW/RDALSC_logo.png"
            alt="RDA Lab. School and College"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>
      </div>

      {/* Sparkle icon */}
      <div
        className={`mb-4 transition-all duration-700 delay-200 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <Sparkles className="text-cyan-glow/60 icon-glow" size={28} />
      </div>

      {/* Main Heading */}
      <h1
        className={`text-center font-bold leading-tight mb-4 transition-all duration-700 delay-300 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl shimmer-text">
          IDEA CONTEST
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-1 sm:mt-2 text-cyan-glow drop-shadow-[0_0_30px_rgba(0,212,255,0.4)]">
          2026
        </span>
      </h1>

      {/* Subheading */}
      <p
        className={`text-center text-lg sm:text-xl md:text-2xl font-medium text-slate-200 mb-3 transition-all duration-700 delay-[400ms] ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.05em' }}
      >
        Show Your Creativity. <span className="text-teal-light">Build The Future.</span>
      </p>

      {/* Class info */}
      <p
        className={`text-center text-sm sm:text-base text-cyan-glow/70 font-medium mb-4 transition-all duration-700 delay-[450ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        For Students of Classes 6–12
      </p>

      {/* Description */}
      <p
        className={`text-center max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed mb-8 transition-all duration-700 delay-[500ms] ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        Submit innovative ideas that can solve real-world problems and shape a better future
        through science, technology, sustainability, and creativity.
      </p>

      {/* CTA Buttons */}
      <div
        className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-700 delay-[600ms] ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <a
          href="https://forms.gle/ezrsZgEAPEdAzkyH6"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn glow-btn-primary w-full sm:w-auto"
        >
          Submit Your Idea
        </a>
        <a
          href="https://chat.whatsapp.com/JagQ3vkxl7vJAEm95CYc3X"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn glow-btn-secondary w-full sm:w-auto"
        >
          Join WhatsApp Community
        </a>
        <a
          href="https://www.facebook.com/share/1AphJXsNhy/"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn glow-btn-secondary w-full sm:w-auto"
        >
          Follow Facebook Page
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[800ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-glow transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
