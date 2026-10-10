import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, Sparkles } from 'lucide-react';

interface Duration {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

export const RelationshipCounter: React.FC = () => {
  const [duration, setDuration] = useState<Duration>({ years: 2, days: 731, hours: 0, minutes: 0, seconds: 0, totalDays: 731 });

  useEffect(() => {
    // Start date: October 11, 2023 00:00:00
    const startDate = new Date('2023-10-11T00:00:00');
    // Target 2nd Anniversary date: October 11, 2025 00:00:00
    const target2ndAnniversary = new Date('2025-10-11T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      // Calculate total elapsed time up to 2nd Anniversary (or current live time)
      const effectiveNow = now > target2ndAnniversary ? target2ndAnniversary : now;
      const diffInMs = Math.max(0, effectiveNow.getTime() - startDate.getTime());

      const totalSeconds = Math.floor(diffInMs / 1000);
      const totalDays = Math.floor(totalSeconds / (3600 * 24));
      
      // Calculate live ticking seconds / minutes / hours for visual delight
      const liveSeconds = now.getSeconds();
      const liveMinutes = now.getMinutes();
      const liveHours = now.getHours();

      setDuration({
        years: 2,
        days: totalDays === 0 ? 731 : totalDays,
        hours: liveHours,
        minutes: liveMinutes,
        seconds: liveSeconds,
        totalDays: 731
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#782E43]/90 via-[#8C3A52] to-[#782E43]/90 text-[#FFF8F0] p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#D8A0A8]/30 max-w-4xl mx-auto my-8 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#D8A0A8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#C5A46D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8A0A8]/20 text-[#F4E7D8] text-xs sm:text-sm tracking-wider uppercase mb-3 border border-[#D8A0A8]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A46D] animate-pulse" />
          <span>2nd Anniversary Milestone — October 11, 2025</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A46D] animate-pulse" />
        </div>

        <h3 className="font-serif-romantic text-2xl sm:text-4xl text-[#F4E7D8] font-bold mb-1">
          Together in Love For 2 Full Years ❤️
        </h3>
        <p className="font-handwriting text-xl sm:text-2xl text-[#D8A0A8] mb-6">
          731 Days of Laughter, Love & Special Memories with Swasthika
        </p>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-6">
          <div className="bg-[#38272A]/50 backdrop-blur-md p-4 rounded-xl border border-[#D8A0A8]/20 text-center transform hover:scale-105 transition-transform">
            <span className="block font-serif-romantic text-3xl sm:text-5xl font-bold text-[#F4E7D8]">
              731
            </span>
            <span className="text-xs uppercase tracking-widest text-[#D8A0A8] mt-1 block">Days (2 Years)</span>
          </div>

          <div className="bg-[#38272A]/50 backdrop-blur-md p-4 rounded-xl border border-[#D8A0A8]/20 text-center transform hover:scale-105 transition-transform">
            <span className="block font-serif-romantic text-3xl sm:text-5xl font-bold text-[#F4E7D8]">
              {String(duration.hours).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#D8A0A8] mt-1 block">Hours</span>
          </div>

          <div className="bg-[#38272A]/50 backdrop-blur-md p-4 rounded-xl border border-[#D8A0A8]/20 text-center transform hover:scale-105 transition-transform">
            <span className="block font-serif-romantic text-3xl sm:text-5xl font-bold text-[#F4E7D8]">
              {String(duration.minutes).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#D8A0A8] mt-1 block">Minutes</span>
          </div>

          <div className="bg-[#38272A]/50 backdrop-blur-md p-4 rounded-xl border border-[#D8A0A8]/20 text-center transform hover:scale-105 transition-transform">
            <span className="block font-serif-romantic text-3xl sm:text-5xl font-bold text-[#F4E7D8] animate-pulse">
              {String(duration.seconds).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#D8A0A8] mt-1 block">Seconds</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-[#F4E7D8]/80 pt-2 border-t border-[#D8A0A8]/20">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#C5A46D]" />
            <span>Relationship Start: <strong>Oct 11, 2023</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#D8A0A8] fill-[#D8A0A8]" />
            <span>2nd Anniversary: <strong>Oct 11, 2025 (731 Days)</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#C5A46D]" />
            <span>First Sight: <strong>Sep 19, 2023</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
