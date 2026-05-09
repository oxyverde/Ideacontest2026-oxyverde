import { Lightbulb, Search, Wrench, Heart, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    num: '01',
    icon: Lightbulb,
    title: 'Think of a Creative Idea',
    desc: 'Brainstorm an original and innovative concept that excites you.',
    color: '#fbbf24',
  },
  {
    num: '02',
    icon: Search,
    title: 'Identify a Real-World Problem',
    desc: 'Find a meaningful problem that your idea can address effectively.',
    color: '#00d4ff',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Explain Your Solution',
    desc: 'Describe how your idea works and how it solves the identified problem.',
    color: '#14b8a6',
  },
  {
    num: '04',
    icon: Heart,
    title: 'Describe The Positive Impact',
    desc: 'Explain how your idea creates a positive impact on society or the environment.',
    color: '#ec4899',
  },
  {
    num: '05',
    icon: Send,
    title: 'Submit via Google Form',
    desc: 'Fill out the submission form with all the required details about your idea.',
    color: '#818cf8',
  },
];

const notes = [
  'Maximum 3 ideas per participant',
  'Original ideas only',
  'Clear explanations are encouraged',
  'Drawings or sketches may optionally be added',
];

export default function HowToSubmit() {
  return (
    <section id="submit" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-cyan-glow/60 text-sm font-semibold tracking-widest uppercase mb-3">
              Submission Guide
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold section-heading"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              How To Submit Your Idea
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Follow these simple steps to submit your innovative idea for IDEA CONTEST 2026.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow/30 via-teal-neon/20 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className="flex gap-4 sm:gap-6 items-start group">
                  {/* Step number */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `${step.color}10`,
                        border: `1px solid ${step.color}25`,
                      }}
                    >
                      <step.icon size={22} style={{ color: step.color }} />
                    </div>
                    {/* Mobile dot connector */}
                  </div>

                  {/* Content */}
                  <div className="glass-card p-5 sm:p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-bold tracking-wider"
                        style={{ color: step.color, fontFamily: "'Orbitron', sans-serif" }}
                      >
                        STEP {step.num}
                      </span>
                    </div>
                    <h3
                      className="text-sm sm:text-base font-semibold text-white mb-1"
                      style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <ScrollReveal delay={500}>
          <div className="mt-12 sm:mt-16 glass-card p-6 sm:p-8">
            <h3
              className="text-base sm:text-lg font-semibold text-white mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem' }}
            >
              Important Notes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {notes.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-teal-neon flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
