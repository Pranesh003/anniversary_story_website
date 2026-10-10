import React from 'react';
import { motion } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalLetterProps {
  onReplay: () => void;
}

export const FinalLetter: React.FC<FinalLetterProps> = ({ onReplay }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#D8A0A8', '#782E43', '#C5A46D', '#FFF8F0']
    });
  };

  return (
    <section id="final-letter" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#FFF8F0] via-[#FAF3E6] to-[#F4E7D8] paper-texture relative border-t-2 border-[#782E43]/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#782E43]/10 text-[#782E43] font-semibold text-xs uppercase tracking-widest mb-3 border border-[#782E43]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>FINAL CHAPTER — A LETTER FOR SWASTHIKA</span>
          </div>

          <h2 className="font-serif-romantic text-4xl sm:text-6xl font-bold text-[#782E43] mb-3">
            If I Could Tell You One More Thing
          </h2>

          <p className="font-handwriting text-2xl text-[#C5A46D] mb-8">
            From Pranesh's Heart to Swasthika's Soul ❤️
          </p>

          {/* Letter Card */}
          <div className="bg-[#FFF8F0] rounded-2xl p-6 sm:p-12 shadow-2xl border-2 border-[#D8A0A8]/40 text-left max-w-3xl mx-auto relative my-8">
            <div className="flex justify-center mb-6 text-[#782E43]">
              <Heart className="w-10 h-10 fill-[#782E43] animate-pulse" />
            </div>

            <div className="space-y-5 font-handwriting text-2xl sm:text-3xl text-[#38272A] leading-relaxed">
              <p className="font-bold text-[#782E43]">My dear Swasthika,</p>

              <p>
                When I first saw you on September 19, 2023, I never imagined that you would become such an important part of my life.
              </p>

              <p>
                What started as a feeling I kept inside slowly became a friendship, then a confession, and finally the love story we share today.
              </p>

              <p>
                I know I may not always express my feelings perfectly. Sometimes I may struggle to find the right words. But I hope you know that what I feel for you is real.
              </p>

              <p>
                Thank you for becoming a part of my journey. Thank you for the memories, the happiness, the late-night conversations, and the moments that became special simply because they were with you.
              </p>

              <p>
                I don't know everything that the future holds, but I know the dreams I want to work toward and the memories I still want to make with you.
              </p>

              <p>
                I hope better days are coming for us. I hope we continue to grow, support each other, and make our future beautiful.
              </p>

              <p className="text-[#782E43] font-bold">
                If I could go back to that first day at college, I would still want to meet you. And if I could choose again, I would still want OUR story.
              </p>

              <div className="pt-4 text-right">
                <p className="text-xl sm:text-2xl font-serif-romantic text-[#782E43]">Happy Anniversary, my love.</p>
                <p className="text-2xl sm:text-3xl text-[#782E43] font-bold">With all my love,<br />Pranesh ❤️</p>
              </div>
            </div>
          </div>

          {/* Timeline Summary Box */}
          <div className="bg-[#782E43] text-[#FFF8F0] rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto my-10 border border-[#C5A46D]/40">
            <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold mb-4 text-[#F4E7D8]">
              Our Story Isn't Over Yet ❤️
            </h3>

            <div className="space-y-2 text-sm sm:text-base font-medium text-[#D8A0A8]">
              <p>September 19, 2023 — The first sight.</p>
              <p>October 11, 2024 — The beginning of us.</p>
              <p>October 11, 2026 — Two years of our love.</p>
              <p className="text-[#FFF8F0] font-bold text-lg pt-2">And many more chapters to come.</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  triggerConfetti();
                  onReplay();
                }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFF8F0] text-[#782E43] hover:bg-[#F4E7D8] font-bold text-base shadow-lg hover:scale-105 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Read Our Story Again ❤️</span>
              </button>

              <button
                onClick={triggerConfetti}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D8A0A8] text-[#FFF8F0] hover:bg-white/10 font-medium text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                <span>Send Love Confetti 🎉</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
