import { Target, Lightbulb, Heart, MessageSquare, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const requirements = [
  {
    icon: Target,
    title: 'Solves a Real Problem',
    desc: 'Your idea must address a practical real-world issue. An idea becomes valuable when it solves a meaningful problem and serves a clear purpose.',
    color: '#ef4444',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Approach',
    desc: 'The idea should be creative, unique, futuristic, or provide a smart improvement over existing systems.',
    color: '#fbbf24',
  },
  {
    icon: Heart,
    title: 'Positive Impact on Society',
    desc: 'The solution should create a positive impact for society, the environment, education, sustainability, healthcare, or the community.',
    color: '#ec4899',
  },
  {
    icon: MessageSquare,
    title: 'Clear Explanation',
    desc: 'Participants should clearly explain how the idea works and how it can help people in the future.',
    color: '#00d4ff',
  },
  {
    icon: TrendingUp,
    title: 'Future Potential',
    desc: 'Ideas with strong future possibilities, scalability, and innovation value are highly encouraged.',
    color: '#14b8a6',
  },
];

export default function IdeaRequirements() {
  return (
    <section id="requirements" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-cyan-glow/60 text-sm font-semibold tracking-widest uppercase mb-3">
              Idea Criteria
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold section-heading"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              What Makes A Strong Idea?
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Learn what qualities make an idea stand out and how to craft a winning submission.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {requirements.map((req, i) => (
            <ScrollReveal key={req.title} delay={i * 100}>
              <div className="glass-card p-6 sm:p-7 h-full relative overflow-hidden group">
                {/* Glow accent */}
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${req.color}, transparent)`,
                  }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${req.color}12`,
                      border: `1px solid ${req.color}25`,
                    }}
                  >
                    <req.icon size={20} style={{ color: req.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-sm sm:text-base font-semibold text-white mb-2"
                      style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem' }}
                    >
                      {req.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{req.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
