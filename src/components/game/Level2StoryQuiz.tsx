import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, Heart } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../data/gameData';

interface Level2Props {
  onComplete: (score: number) => void;
}

export const Level2StoryQuiz: React.FC<Level2Props> = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (hasAnswered) return;
    setSelectedOption(optIdx);
    setHasAnswered(true);

    if (optIdx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-2 px-2 text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#782E43]/10 text-[#782E43] font-semibold text-xs uppercase tracking-widest mb-3 border border-[#782E43]/20">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
        <span>Level 2 — How Well Do You Know Our Story?</span>
      </div>

      {!quizFinished ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFF8F0]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-[#D8A0A8]/40"
          >
            {/* Progress counter */}
            <div className="flex justify-between items-center text-xs font-semibold text-[#782E43]/70 mb-4 pb-2 border-b border-[#D8A0A8]/30">
              <span>Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
              <div className="flex items-center gap-1 text-[#C5A46D]">
                <Heart className="w-3.5 h-3.5 fill-[#C5A46D]" />
                <span>Score: {score}</span>
              </div>
            </div>

            <h3 className="font-serif-romantic text-xl sm:text-2xl font-bold text-[#782E43] mb-6 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;
                let btnStyle = "bg-[#FFF8F0] text-[#782E43] border-[#D8A0A8]/50 hover:bg-[#F4E7D8]";

                if (hasAnswered) {
                  if (isCorrect) {
                    btnStyle = "bg-[#782E43] text-[#FFF8F0] border-[#C5A46D] shadow-md ring-2 ring-[#C5A46D]";
                  } else if (isSelected && !isCorrect) {
                    btnStyle = "bg-[#38272A] text-[#D8A0A8] border-[#782E43]";
                  } else {
                    btnStyle = "bg-[#FFF8F0]/50 text-[#38272A]/40 border-transparent opacity-60";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full p-4 rounded-xl text-sm sm:text-base font-medium border text-left transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {hasAnswered && (
                      <span>
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-[#C5A46D]" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-[#D8A0A8]" />
                        ) : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback */}
            {hasAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-[#F4E7D8] border border-[#D8A0A8]/50 text-left"
              >
                <div className="font-handwriting text-xl sm:text-2xl text-[#782E43] mb-1 font-bold">
                  {selectedOption === currentQ.correctIndex
                    ? "You remember our story, my love! ❤️"
                    : "Not quite, my love. Here's a little memory for you 💗"}
                </div>
                <p className="text-xs sm:text-sm text-[#38272A]/90 font-medium">
                  {currentQ.explanation}
                </p>

                <button
                  onClick={handleNextQuestion}
                  className="mt-4 w-full py-3 rounded-full bg-[#782E43] text-[#FFF8F0] font-bold text-sm hover:bg-[#8C3A52] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>{currentIdx + 1 < QUIZ_QUESTIONS.length ? "Next Question" : "See Your Results"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        /* Quiz Results Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#FFF8F0]/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#D8A0A8] text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#782E43] text-[#FFF8F0] flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
            🏆
          </div>

          <h3 className="font-serif-romantic text-3xl font-bold text-[#782E43] mb-2">
            Level 2 Complete! 🎉
          </h3>

          <p className="font-handwriting text-2xl text-[#C5A46D] mb-4">
            You scored {score} out of {QUIZ_QUESTIONS.length}!
          </p>

          <p className="text-sm text-[#38272A]/80 font-medium max-w-md mx-auto mb-6 leading-relaxed">
            {score === 5
              ? "Perfect score, Swasthika! You remember every single detail of our love story! ❤️"
              : "Every moment we share is etched in my heart forever, my love! ❤️"}
          </p>

          <button
            onClick={() => onComplete(score)}
            className="px-8 py-3.5 rounded-full bg-[#782E43] text-[#FFF8F0] font-bold text-base hover:bg-[#8C3A52] transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <span>Proceed to Level 3 ✨</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </div>
  );
};
