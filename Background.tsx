import { useMemo } from 'react';

const PARTICLE_COUNT = 20;

interface Particle {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
  glow: string;
}

export default function Background() {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      { color: '#00d4ff', glow: '#00d4ff' },
      { color: '#14b8a6', glow: '#14b8a6' },
      { color: '#2dd4bf', glow: '#2dd4bf' },
    ];
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const c = colors[i % 3];
      return {
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 15 + 12,
        opacity: Math.random() * 0.4 + 0.1,
        ...c,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Layer 1: Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0a0f1a] to-[#022c22]" />

      {/* Layer 2: Campus image overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'url(https://i.postimg.cc/j5sqhnnM/Rdalsc_campus.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Layer 3: Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Layer 4: Gradient blobs */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-900/20 blur-[120px] animate-blob1 max-md:w-[300px] max-md:h-[300px]" />
      <div className="absolute bottom-[-5%] right-[10%] w-[450px] h-[450px] rounded-full bg-cyan-900/15 blur-[120px] animate-blob2 max-md:w-[250px] max-md:h-[250px]" />
      <div className="absolute top-[40%] left-[50%] w-[350px] h-[350px] rounded-full bg-teal-900/10 blur-[100px] animate-blob3 max-md:w-[200px] max-md:h-[200px]" />

      {/* Layer 5: Aurora glow */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[100%] bg-gradient-to-br from-emerald-600/20 via-transparent to-cyan-600/20 rounded-full blur-[80px] animate-aurora" />
      </div>

      {/* Layer 6: Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: '-10px',
            background: p.color,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 3}px ${p.glow}`,
          }}
        />
      ))}
    </div>
  );
}
