import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Key, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Level1Props {
  onComplete: () => void;
}

export const Level1HiddenHeart: React.FC<Level1Props> = ({ onComplete }) => {
  const [targetIndex] = useState(2); // Heart #3 (index 2) contains the key
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleHeartClick = (index: number) => {
    if (isUnlocked) return;
    setSelectedIndex(index);

    if (index === targetIndex) {
      setIsUnlocked(true);
      setFeedback("You found it, my love! Unlocking the key to my heart... ✨");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        onComplete();
      }, 1800);
    } else {
      setFeedback("Not this one, my love. Try again ❤️");
    }
  };

  const hearts = [
    { label: "Memory 1", color: "from-[#D8A0A8] to-[#8C3A52]" },
    { label: "Memory 2", color: "from-[#8C3A52] to-[#782E43]" },
    { label: "Secret Heart", color: "from-[#C5A46D] to-[#8C3A52]" },
    { label: "Memory 4", color: "from-[#782E43] to-[#38272A]" },
    { label: "Memory 5", color: "from-[#D8A0A8] to-[#C5A46D]" },
    { label: "Memory 6", color: "from-[#8C3A52] to-[#D8A0A8]" }
  ];

  return (
    <div className="text-center py-4 px-2 max-w-xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#782E43]/10 text-[#782E43] font-semibold text-xs uppercase tracking-widest mb-3 border border-[#782E43]/20">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
        <span>Level 1 — Find the Hidden Heart</span>
      </div>

      <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-[#782E43] mb-2">
        Can You Find My Secret Heart? 💌
      </h3>

      <p className="font-handwriting text-xl sm:text-2xl text-[#38272A]/80 mb-6">
        Somewhere in these floating hearts, a little surprise is waiting for you. Tap to discover!
      </p>

      {/* Grid of 6 Floating Hearts */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6">
        {hearts.map((_, idx) => {
          const isSelected = selectedIndex === idx;
          const isTarget = idx === targetIndex;
          const isCorrect = isUnlocked && isTarget;

          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.92 }}
              animate={
                isCorrect
                  ? { scale: [1, 1.25, 1], rotate: [0, 15, -15, 0] }
                  : { y: [0, -6, 0] }
              }
              transition={{
                y: { repeat: Infinity, duration: 2 + idx * 0.4, ease: "easeInOut" }
              }}
              onClick={() => handleHeartClick(idx)}
              className={`relative p-5 sm:p-6 rounded-2xl shadow-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center min-h-[110px] sm:min-h-[130px] bg-gradient-to-br ${
                isCorrect
                  ? "from-[#C5A46D] via-[#D8A0A8] to-[#782E43] border-[#FFF8F0] shadow-2xl ring-4 ring-[#C5A46D]/40"
                  : isSelected && !isTarget
                  ? "from-[#38272A] to-[#782E43] border-[#D8A0A8]/40 text-[#FFF8F0]"
                  : "from-[#FFF8F0] to-[#F4E7D8] border-[#D8A0A8]/40 hover:border-[#782E43]/50"
              }`}
            >
              {isCorrect ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  className="flex flex-col items-center"
                >
                  <Key className="w-9 h-9 text-[#FFF8F0] animate-bounce mb-1" />
                  <span className="text-xs font-bold text-[#FFF8F0]">Found It!</span>
                </motion.div>
              ) : (
                <>
                  <Heart
                    className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${
                      isSelected ? "fill-[#D8A0A8] text-[#D8A0A8]" : "fill-[#782E43]/20 text-[#782E43]"
                    }`}
                  />
                  <span className="text-[11px] font-medium text-[#782E43] mt-2 opacity-75">
                    Heart #{idx + 1}
                  </span>
                </>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback Message */}
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3.5 rounded-xl font-handwriting text-xl sm:text-2xl mb-4 border ${
            isUnlocked
              ? "bg-[#782E43] text-[#F4E7D8] border-[#C5A46D]/50 shadow-md"
              : "bg-[#FFF8F0] text-[#782E43] border-[#D8A0A8]/50"
          }`}
        >
          {feedback}
        </motion.div>
      )}

      {/* Optional Hint Button */}
      <div className="mt-4">
        {!showHint ? (
          <button
            onClick={() => setShowHint(true)}
            className="inline-flex items-center gap-1.5 text-xs text-[#782E43]/80 hover:text-[#782E43] font-medium underline cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Need a little hint?</span>
          </button>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-handwriting text-lg text-[#C5A46D] bg-[#782E43]/10 p-2.5 rounded-lg border border-[#C5A46D]/30 inline-block"
          >
            💡 Hint: "Keep following your heart. Look for the third glowing heart! ❤️"
          </motion.p>
        )}
      </div>
    </div>
  );
};
