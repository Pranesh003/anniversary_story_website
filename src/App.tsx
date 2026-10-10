import { useState } from 'react';
import { OpeningLetter } from './components/OpeningLetter';
import { ProgressIndicator } from './components/ProgressIndicator';
import { Timeline } from './components/Timeline';
import { StoryChapter } from './components/StoryChapter';
import { MemoryGallery } from './components/MemoryGallery';
import { FinalLetter } from './components/FinalLetter';
import { MusicPlayer } from './components/MusicPlayer';
import { STORY_CHAPTERS } from './data/story';

export function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [introPassed, setIntroPassed] = useState(false);

  const handleStartJourney = () => {
    setIntroPassed(true);
    // Start music on first interaction
    setIsPlayingMusic(true);
    setTimeout(() => {
      const chapter1 = document.getElementById('chapter-1');
      if (chapter1) {
        chapter1.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  const handleSelectChapter = (id: number) => {
    setIntroPassed(true);
    const chapterEl = document.getElementById(`chapter-${id}`);
    if (chapterEl) {
      chapterEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic(prev => !prev);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#38272A] font-sans selection:bg-[#D8A0A8] selection:text-[#38272A]">
      {/* Floating Header Progress Navigation */}
      {introPassed && (
        <ProgressIndicator
          onSelectChapter={handleSelectChapter}
          isPlayingMusic={isPlayingMusic}
          onToggleMusic={handleToggleMusic}
        />
      )}

      {/* 01. Opening Screen — Sealed Love Letter */}
      <OpeningLetter
        onStartJourney={handleStartJourney}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={handleToggleMusic}
      />

      {/* Main Journey Container */}
      <main className="w-full">
        {/* Interactive Timeline Bar */}
        <Timeline onSelectChapter={handleSelectChapter} />

        {/* Story Chapters 1 to 8, and 10 */}
        {STORY_CHAPTERS.map((chapter, idx) => {
          // Chapter 9 is rendered as the interactive Memory Gallery component
          if (chapter.id === 9) {
            return <MemoryGallery key={chapter.id} />;
          }
          return (
            <StoryChapter
              key={chapter.id}
              chapter={chapter}
              index={idx}
            />
          );
        })}

        {/* Final Chapter & Personal Letter */}
        <FinalLetter onReplay={handleReplay} />
      </main>

      {/* Floating Music Player */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onToggle={handleToggleMusic}
      />

      {/* Footer & Personalization Notice */}
      <footer className="bg-[#38272A] text-[#F4E7D8] py-10 px-4 text-center border-t border-[#782E43]">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-serif-romantic text-2xl text-[#D8A0A8]">
            Our Story — Pranesh ❤️ Swasthika
          </p>
          <p className="text-xs text-[#F4E7D8]/70 max-w-lg mx-auto">
            September 19, 2023 – October 11, 2025 and forever. Built with love for Swasthika.
          </p>

          <div className="inline-block mt-4 px-4 py-2 bg-[#782E43]/60 rounded-lg text-left text-[11px] font-mono border border-[#D8A0A8]/30 max-w-md">
            <span className="text-[#C5A46D] font-bold block mb-1">📸 How to add your real photos & song:</span>
            1. Add your pictures inside <code className="text-[#F4E7D8]">public/images/</code> or update <code className="text-[#F4E7D8]">src/data/story.ts</code> & <code className="text-[#F4E7D8]">src/data/memories.ts</code>.<br />
            2. Place your song in <code className="text-[#F4E7D8]">public/audio/our-song.mp3</code>.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
