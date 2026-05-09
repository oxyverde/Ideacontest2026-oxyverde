import { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const rules = [
  {
    title: 'Original Ideas Only',
    desc: 'All submissions must be original ideas created by the participant. Copied or plagiarized content will not be accepted.',
  },
  {
    title: 'Maximum 3 Submissions',
    desc: 'Each participant can submit up to 3 ideas. Choose your best concepts to present.',
  },
  {
    title: 'Idea Usage Rights',
    desc: 'Organizers may use submitted ideas for educational, research, development, awareness, innovation, and competition purposes.',
  },
  {
    title: 'Content Guidelines',
    desc: 'Inappropriate or copied content may be disqualified at the discretion of the organizing team.',
  },
  {
    title: 'Final Decisions',
    desc: 'Final decisions regarding winners, selections, and any disputes will be made by the organizing team and are considered final.',
  },
];

const faqs = [
  {
    q: 'Who can participate?',
    a: 'Students from Classes 6 to 12 of RDA Lab. School and College.',
  },
  {
    q: 'How many ideas can I submit?',
    a: 'Each participant can submit up to 3 ideas.',
  },
  {
    q: 'Can ideas be from any field?',
    a: 'Yes. Ideas can be related to technology, environment, robotics, healthcare, education, sustainability, social problems, and more.',
  },
  {
    q: 'Does my idea need to be fully built?',
    a: 'No. Creative concepts and problem-solving ideas are welcome even if they are not physically built.',
  },
  {
    q: 'Can I include drawings or sketches?',
    a: 'Yes. Participants may add sketches or visual concepts if they want.',
  },
  {
    q: 'What kind of ideas are preferred?',
    a: 'Innovative ideas that solve real-world problems and create positive impact are highly encouraged.',
  },
  {
    q: 'Will selected ideas be used in future projects or competitions?',
    a: 'Some selected ideas may inspire future research, innovation projects, awareness campaigns, or competitions organized by Team OxyVerde.',
  },
  {
    q: 'How will winners be selected?',
    a: 'Ideas will be judged based on creativity, originality, usefulness, innovation, real-world impact, and future potential.',
  },
];

function AccordionItem({
  title,
  children,
  open: initialOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-sm sm:text-base font-medium text-white pr-4">{title}</span>
        <ChevronDown
          size={18}
          className={`text-cyan-glow/60 flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-slate-400 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function RulesAndFAQ() {
  return (
    <section id="rules" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Rules Section */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-cyan-glow/60 text-sm font-semibold tracking-widest uppercase mb-3">
              Guidelines
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold section-heading"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Rules & Terms
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3 mb-8">
          {rules.map((rule, i) => (
            <ScrollReveal key={rule.title} delay={i * 80}>
              <AccordionItem title={rule.title}>{rule.desc}</AccordionItem>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <a
              href="https://drive.google.com/file/d/1PthXePn3PDXsnxk6ASfdIiq_1b75N7DV/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn glow-btn-secondary inline-flex"
            >
              <FileText size={18} />
              Read Full Terms & Conditions PDF
            </a>
          </div>
        </ScrollReveal>

        {/* FAQ Section */}
        <div id="faq" className="scroll-mt-20">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-cyan-glow/60 text-sm font-semibold tracking-widest uppercase mb-3">
                FAQ
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold section-heading"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <AccordionItem title={faq.q}>{faq.a}</AccordionItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
