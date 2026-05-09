import {
  Brain, Bot, GraduationCap, Leaf, Zap, TreePine,
  Shield, Building, Globe, Heart, FlaskConical, Car,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const categories = [
  {
    icon: Brain,
    title: 'AI & Technology',
    desc: 'Harness artificial intelligence and cutting-edge technology to create smart solutions.',
    color: '#818cf8',
  },
  {
    icon: Bot,
    title: 'Robotics',
    desc: 'Design innovative robotic systems that can assist humans in various tasks.',
    color: '#06b6d4',
  },
  {
    icon: GraduationCap,
    title: 'Smart Education',
    desc: 'Reimagine learning with technology-driven educational tools and platforms.',
    color: '#f59e0b',
  },
  {
    icon: Leaf,
    title: 'Environment & Climate',
    desc: 'Develop solutions to combat climate change and protect our natural ecosystems.',
    color: '#22c55e',
  },
  {
    icon: Zap,
    title: 'Renewable Energy',
    desc: 'Create sustainable energy solutions for a cleaner and greener future.',
    color: '#eab308',
  },
  {
    icon: TreePine,
    title: 'Agriculture & Food',
    desc: 'Innovate farming and food production for a sustainable and hunger-free world.',
    color: '#84cc16',
  },
  {
    icon: Shield,
    title: 'Healthcare & Safety',
    desc: 'Build solutions that improve health outcomes and keep communities safe.',
    color: '#ef4444',
  },
  {
    icon: Building,
    title: 'Smart Cities',
    desc: 'Envision intelligent urban spaces with connected infrastructure and services.',
    color: '#6366f1',
  },
  {
    icon: Globe,
    title: 'SDG-Based Innovation',
    desc: 'Align your ideas with UN Sustainable Development Goals for global impact.',
    color: '#00d4ff',
  },
  {
    icon: Heart,
    title: 'Social Problem Solving',
    desc: 'Address pressing social challenges and improve quality of life for communities.',
    color: '#ec4899',
  },
  {
    icon: FlaskConical,
    title: 'Science & Engineering',
    desc: 'Push the boundaries of scientific research and engineering excellence.',
    color: '#14b8a6',
  },
  {
    icon: Car,
    title: 'Future Transportation',
    desc: 'Redefine mobility with innovative transportation concepts and systems.',
    color: '#f97316',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <p className="text-cyan-glow/60 text-sm font-semibold tracking-widest uppercase mb-3">
              Categories
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold section-heading"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              What Kind Of Ideas Can Be Submitted?
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Choose from a wide range of innovation categories. Your idea can span multiple domains.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 70}>
              <div className="glass-card p-5 sm:p-6 h-full text-center group cursor-default">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `${cat.color}12`,
                    border: `1px solid ${cat.color}20`,
                    boxShadow: `0 0 0px ${cat.color}00`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${cat.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0px ${cat.color}00`;
                  }}
                >
                  <cat.icon size={24} style={{ color: cat.color }} />
                </div>
                <h3
                  className="text-sm font-semibold text-white mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem' }}
                >
                  {cat.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
