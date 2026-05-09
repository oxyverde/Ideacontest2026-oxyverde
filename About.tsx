import { Lightbulb, Zap, Globe, Rocket, Sparkles, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const cards = [
  {
    icon: Lightbulb,
    title: 'Think Creatively',
    desc: 'Students are encouraged to think creatively and explore new possibilities beyond conventional approaches.',
    color: '#fbbf24',
  },
  {
    icon: Zap,
    title: 'Innovation From Any Field',
    desc: 'Innovation can come from any field — technology, science, environment, education, and beyond.',
    color: '#00d4ff',
  },
  {
    icon: Globe,
    title: 'Shape The Future',
    desc: 'Young minds have the power to shape the future with groundbreaking ideas and solutions.',
    color: '#14b8a6',
  },
  {
    icon: Rocket,
    title: 'Problem-Solving Focus',
    desc: 'The competition promotes problem-solving skills and encourages creative thinking among students.',
    color: '#f472b6',
  },
  {
    icon: Sparkles,
    title: 'Inspire Future Projects',
    desc: 'Selected ideas may inspire future research, development, innovation projects, and competitions.',
    color: '#a78bfa',
  },
  {
    icon: Users,
    title: 'Organized By OxyVerde',
    desc: 'Organized by Team OxyVerde to encourage and empower the next generation of innovators.',
    color: '#2dd4bf',
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-cyan-glow/60 text-sm font-semibold tracking-widest uppercase mb-3">
              About The Contest
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold section-heading"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Why This Competition?
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Discover why IDEA CONTEST 2026 is the perfect platform for young innovators to showcase their creativity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <div className="glass-card p-6 sm:p-7 h-full group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}25`,
                  }}
                >
                  <card.icon size={22} style={{ color: card.color }} />
                </div>
                <h3
                  className="text-base sm:text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem' }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
