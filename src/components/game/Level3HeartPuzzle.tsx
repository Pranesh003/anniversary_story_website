import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Check, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Level3Props {
  onComplete: () => void;
}

export const Level3HeartPuzzle: React.FC<Level3Props> = ({ onComplete }) => {
  const puzzlePieces = [
    { id: 1, text: "The First Sight", icon: "✨" },
    { id: 2, text: "Golden Friendship", icon: "🤝" },
    { id: 3, text: "Hidden Feelings", icon: "💌" },
    { id: 4, text: "3 AM Conversations", icon: "🌙" },
    { id: 5, text: "She Said Yes", icon: "💍" },
    { id: 6, text: "Forever & Always", icon: "❤️" }
  ];

  // Placed piece IDs in order [slot0, slot1, ...]
  const [placed, setPlaced] = useState<number[]>([]);

  const isCompleted = placed.length === puzzlePieces.length;

  const handleSelectPiece = (id: number) => {
    if (placed.includes(id)) return;

    const nextPlaced = [...placed, id];
    setPlaced(nextPlaced);

    if (nextPlaced.length === puzzlePieces.length) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  };

  const handleReset = () => {
    setPlaced([]);
  };

  return (
    <div className="max-w-xl mx-auto py-2 px-2 text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#782E43]/10 text-[#782E43] font-semibold text-xs uppercase tracking-widest mb-3 border border-[#782E43]/20">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
        <span>Level 3 — Repair the Broken Heart</span>
      </div>

      <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-[#782E43] mb-2">
        Rebuild Our Heart Together 🧩
      </h3>

      <p className="font-handwriting text-xl sm:text-2xl text-[#38272A]/80 mb-6">
        Tap the memory pieces below to place them into our glowing heart!
      </p>

      {/* Main Heart Container / Target Grid */}
      <div className="relative bg-[#FFF8F0]/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#D8A0A8]/40 mb-6 max-w-md mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-h-[220px]">
          {puzzlePieces.map((_, idx) => {
            const isSlotFilled = placed.length > idx;
            const filledPieceId = placed[idx];
            const filledPiece = puzzlePieces.find(p => p.id === filledPieceId);

            return (
              <motion.div
                key={idx}
                animate={isSlotFilled ? { scale: [0.9, 1.05, 1] } : {}}
                className={`p-3.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                  isSlotFilled
                    ? "bg-gradient-to-br from-[#782E43] to-[#8C3A52] text-[#FFF8F0] border-[#C5A46D] shadow-md"
                    : "bg-[#F4E7D8]/60 border-dashed border-[#D8A0A8] text-[#782E43]/40"
                }`}
              >
                {isSlotFilled && filledPiece ? (
                  <>
                    <span className="text-xl mb-1">{filledPiece.icon}</span>
                    <span className="text-xs font-bold text-center leading-tight">
                      {filledPiece.text}
                    </span>
                    <Check className="w-3.5 h-3.5 text-[#C5A46D] mt-1" />
                  </>
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#782E43]/50">
                    Piece {idx + 1}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Floating Heart Icon Overlay on Completion */}
        {isCompleted && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 bg-[#782E43]/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-[#FFF8F0] z-10"
          >
            <Heart className="w-16 h-16 text-[#D8A0A8] fill-[#D8A0A8] animate-pulse mb-3" />
            <h4 className="font-serif-romantic text-2xl font-bold mb-2 text-[#F4E7D8]">
              Heart Restored! ❤️
            </h4>
            <p className="font-handwriting text-xl text-[#D8A0A8] mb-6 max-w-xs mx-auto">
              Just like this heart, every little moment has become a part of our story.
            </p>

            <button
              onClick={onComplete}
              className="px-6 py-3 rounded-full bg-[#FFF8F0] text-[#782E43] font-bold text-sm hover:bg-[#F4E7D8] transition-all shadow-lg hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <span>Unlock the final surprise ✨</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Memory Pieces Selection Pool */}
      {!isCompleted && (
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#782E43]/70 font-semibold mb-2">
            Tap a piece to fit into the heart:
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-md mx-auto">
            {puzzlePieces.map(piece => {
              const isUsed = placed.includes(piece.id);
              return (
                <button
                  key={piece.id}
                  disabled={isUsed}
                  onClick={() => handleSelectPiece(piece.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
                    isUsed
                      ? "bg-gray-200 text-gray-400 border-gray-300 opacity-40 cursor-not-allowed line-through"
                      : "bg-[#FFF8F0] text-[#782E43] border-[#D8A0A8] hover:bg-[#782E43] hover:text-[#FFF8F0] shadow-sm hover:scale-105"
                  }`}
                >
                  <span>{piece.icon}</span>
                  <span>{piece.text}</span>
                </button>
              );
            })}
          </div>

          {placed.length > 0 && (
            <button
              onClick={handleReset}
              className="mt-4 inline-flex items-center gap-1 text-xs text-[#782E43]/70 hover:text-[#782E43] underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Puzzle</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
