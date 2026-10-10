import React, { useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { romanticAudio } from '../utils/audioSynth';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  audioPath?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  onToggle,
  audioPath = '/audio/our-song.mp3'
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // If HTML audio fails (e.g. file missing), fallback to synth
          romanticAudio.start();
        });
      } else {
        audioRef.current.pause();
        romanticAudio.stop();
      }
    }
  }, [isPlaying]);

  const handleAudioError = () => {
    if (isPlaying) {
      romanticAudio.start();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioPath}
        loop
        onError={handleAudioError}
        preload="auto"
      />

      <div className="flex items-center gap-2 bg-[#38272A]/90 hover:bg-[#38272A] text-[#F4E7D8] px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md border border-[#D8A0A8]/30 transition-all">
        <button
          onClick={onToggle}
          className="w-8 h-8 rounded-full bg-[#782E43] text-[#F4E7D8] flex items-center justify-center hover:bg-[#8C3A52] transition-colors"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <div className="hidden sm:flex flex-col pr-2">
          <span className="text-[11px] font-bold text-[#F4E7D8] leading-tight flex items-center gap-1">
            <Music className="w-3 h-3 text-[#D8A0A8]" />
            Our Special Song
          </span>
          <span className="text-[9px] text-[#D8A0A8] font-mono">
            {isPlaying ? "Playing Romantic Melody" : "Tap to Play Music"}
          </span>
        </div>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#D8A0A8] animate-bounce" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#C5A46D]/60" />
        )}
      </div>
    </div>
  );
};
