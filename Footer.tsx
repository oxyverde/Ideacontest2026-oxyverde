import { MessageCircle, FileText, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Submit Idea', href: '#submit' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Rules', href: '#rules' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      {/* Divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://i.postimg.cc/y6ycB0Tr/Team_OxyVerde_logo.png"
                  alt="Team OxyVerde"
                  className="w-10 h-10 rounded-lg object-contain"
                />
                <img
                  src="https://i.postimg.cc/1R7RptmW/RDALSC_logo.png"
                  alt="RDA Lab. School and College"
                  className="w-10 h-10 rounded-lg object-contain"
                />
              </div>
              <p
                className="text-sm font-semibold text-cyan-glow mb-2"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                IDEA CONTEST 2026
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                An innovation competition organized by Team OxyVerde to inspire young minds.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-sm font-semibold text-white mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-cyan-glow transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4
                className="text-sm font-semibold text-white mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem' }}
              >
                Connect With Us
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/share/1AphJXsNhy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-glow transition-colors"
                >
                  <FacebookIcon size={16} />
                  Facebook Page
                </a>
                <a
                  href="https://chat.whatsapp.com/JagQ3vkxl7vJAEm95CYc3X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-glow transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Community
                </a>
                <a
                  href="https://drive.google.com/file/d/1PthXePn3PDXsnxk6ASfdIiq_1b75N7DV/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-glow transition-colors"
                >
                  <FileText size={16} />
                  Terms & Conditions
                </a>
              </div>
            </div>

            {/* Submit */}
            <div>
              <h4
                className="text-sm font-semibold text-white mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem' }}
              >
                Submit Your Idea
              </h4>
              <p className="text-slate-500 text-sm mb-4">
                Ready to innovate? Submit your creative ideas now.
              </p>
              <a
                href="https://forms.gle/ezrsZgEAPEdAzkyH6"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn glow-btn-primary !py-2.5 !px-5 !text-sm"
              >
                Submit Now
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-slate-500 text-xs sm:text-sm">
              © 2026 Team OxyVerde. All Rights Reserved.
            </p>
            <p className="text-slate-600 text-xs flex items-center gap-1">
              Organized by Team OxyVerde, RDA Lab. School and College.{' '}
              <Heart size={12} className="text-teal-neon/50 inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
