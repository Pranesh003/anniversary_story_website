// Ethereal romantic background music generator using Web Audio API
class RomanticAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.isPlaying = true;
      this.playMelodyLoop();
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  private playNote(freq: number, duration: number, timeOffset: number, gainValue = 0.08) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + timeOffset);

    // Smooth envelope
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime + timeOffset);
    gain.gain.exponentialRampToValueAtTime(gainValue, this.ctx.currentTime + timeOffset + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + timeOffset + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + timeOffset);
    osc.stop(this.ctx.currentTime + timeOffset + duration);
  }

  private playMelodyLoop() {
    if (!this.isPlaying || !this.ctx) return;

    // Soft romantic chord progression in F Major / D Minor (F - Am - Dm - Bb)
    const chords = [
      [349.23, 440.00, 523.25, 659.25], // Fmaj7
      [329.63, 440.00, 523.25, 659.25], // Am7
      [293.66, 349.23, 440.00, 523.25], // Dm7
      [233.08, 349.23, 440.00, 523.25]  // Bbmaj7
    ];

    let step = 0;
    const intervalTime = 3200; // ms per chord

    const playStep = () => {
      if (!this.isPlaying || !this.ctx) return;
      const currentChord = chords[step % chords.length];
      
      // Arpeggiate chord notes softly
      currentChord.forEach((note, index) => {
        this.playNote(note, 3.0, index * 0.4, 0.05);
      });

      // Add a high romantic sparkle note
      const highNotes = [698.46, 783.99, 880.00, 1046.50];
      const randomHigh = highNotes[Math.floor(Math.random() * highNotes.length)];
      this.playNote(randomHigh, 2.5, 1.8, 0.03);

      step++;
    };

    playStep();
    this.timer = window.setInterval(playStep, intervalTime);
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const romanticAudio = new RomanticAudioSynthesizer();
