import { Sparkles, Coffee, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const prizes = [
  {
    icon: Sparkles,
    title: 'OxyVerde Premium T-Shirt',
    desc: 'An exclusive embedded premium T-Shirt featuring the OxyVerde branding for outstanding innovators.',
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.3)',
  },
  {
    icon: Coffee,
    title: 'Premium Mug',
    desc: 'A beautifully designed premium mug as a token of recognition for your innovative thinking.',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.3)',
  },
  {
    icon: Award,
    title: 'Official E-Certificate',
    desc: 'A professionally designed digital certificate recognizing your participation and achievement.',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.3)',
  },
];

export default function Prizes() {
  return (
    <section id="prizes" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-cyan-glow/60 text-sm font-semibold tracking-widest uppercase mb-3">
              Rewards
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold section-heading"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Rewards For Outstanding Innovators
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Top innovators will receive exclusive rewards and recognition for their outstanding contributions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {prizes.map((prize, i) => (
            <ScrollReveal key={prize.title} delay={i * 150}>
              <div
                className="glass-card p-6 sm:p-8 text-center relative overflow-hidden animate-float"
                style={{
                  animationDelay: `${i * 2}s`,
                  boxShadow: `0 0 40px ${prize.glow.replace('0.3', '0.08')}`,
                }}
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${prize.color}, transparent)`,
                  }}
                />

                {/* Icon with glow */}
                <div className="mb-6 relative inline-block">
                  <div
                    className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center relative"
                    style={{
                      background: `${prize.color}10`,
                      border: `1px solid ${prize.color}25`,
                    }}
                  >
                    <prize.icon size={36} style={{ color: prize.color }} />
                    {/* Outer glow ring */}
                    <div
                      className="absolute inset-[-8px] rounded-3xl animate-glow-pulse"
                      style={{
                        border: `1px solid ${prize.color}15`,
                      }}
                    />
                  </div>
                </div>

                <h3
                  className="text-sm sm:text-base font-bold text-white mb-3"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem' }}
                >
                  {prize.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prize.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
