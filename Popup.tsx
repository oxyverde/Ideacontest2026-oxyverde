import { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

interface PopupProps {
  onClose: () => void;
}

export default function Popup({ onClose }: PopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-400 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-md rounded-2xl glass p-6 sm:p-8 transition-all duration-400 ${
          visible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        style={{
          borderColor: 'rgba(0, 212, 255, 0.2)',
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.1), 0 0 80px rgba(20, 184, 166, 0.05)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-cyan-glow hover:bg-white/5 transition-all"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-neon/20 to-cyan-glow/20 flex items-center justify-center border border-cyan-glow/20">
            <Sparkles className="text-cyan-glow" size={28} />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-center text-xl sm:text-2xl font-bold mb-3"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="shimmer-text">Stay Connected</span>
          <br />
          <span className="text-slate-300 text-base sm:text-lg">With OxyVerde</span>
        </h3>

        {/* Message */}
        <p className="text-center text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
          Follow our Facebook page and join our WhatsApp community for all contest updates,
          announcements, and future innovation activities.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="https://www.facebook.com/share/1AphJXsNhy/"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn glow-btn-secondary w-full"
          >
            <FacebookIcon size={18} />
            Follow Facebook Page
          </a>
          <a
            href="https://chat.whatsapp.com/JagQ3vkxl7vJAEm95CYc3X"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn glow-btn-secondary w-full"
          >
            <MessageCircle size={18} />
            Join WhatsApp Community
          </a>
          <button
            onClick={handleClose}
            className="glow-btn glow-btn-primary w-full"
          >
            Continue to Website
          </button>
        </div>
      </div>
    </div>
  );
}
