import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div
            className="relative glass-card p-8 sm:p-12 md:p-16 text-center overflow-hidden"
            style={{
              borderColor: 'rgba(0, 212, 255, 0.2)',
              boxShadow: '0 0 60px rgba(0, 212, 255, 0.08), 0 0 120px rgba(20, 184, 166, 0.04)',
            }}
          >
            {/* Animated border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-neon/50 to-transparent" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-glow/5 blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-teal-neon/5 blur-[60px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-neon/20 to-cyan-glow/20 flex items-center justify-center border border-cyan-glow/20">
                  <Sparkles className="text-cyan-glow" size={26} />
                </div>
              </div>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Ready To Share Your{' '}
                <span className="shimmer-text">Innovation?</span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Your idea could inspire the next big innovation. Take the first step and submit
                your creativity today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://forms.gle/ezrsZgEAPEdAzkyH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn glow-btn-primary w-full sm:w-auto"
                >
                  Submit Idea Now
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://chat.whatsapp.com/JagQ3vkxl7vJAEm95CYc3X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn glow-btn-secondary w-full sm:w-auto"
                >
                  <MessageCircle size={18} />
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
