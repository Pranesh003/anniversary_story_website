export interface MemoryItem {
  id: string;
  title: string;
  date: string;
  category: 'photos' | 'college' | 'dates' | 'laughs' | 'support';
  imageUrl: string;
  placeholderName: string;
  caption: string;
  handwrittenNote?: string;
  location?: string;
}

export const MEMORY_CATEGORIES = [
  { id: 'all', label: 'All Memories' },
  { id: 'photos', label: 'Favourite Photos' },
  { id: 'college', label: 'College Days' },
  { id: 'dates', label: 'Special Dates' },
  { id: 'laughs', label: 'Laughter & Smiles' },
  { id: 'support', label: 'Moments of Care' }
];

export const MEMORIES: MemoryItem[] = [
  {
    id: 'm1',
    title: 'The First Sight at College ❤️',
    date: 'September 19, 2023',
    category: 'college',
    imageUrl: '/images/first-college-day.jpg?v=3',
    placeholderName: 'first-college-day.jpg',
    caption: 'My first day at college — seeing you for the very first time.',
    handwrittenNote: 'Where it all started...',
    location: 'College Campus'
  },
  {
    id: 'm1b',
    title: 'Our Golden Days of Friendship ❤️',
    date: 'Late September 2023',
    category: 'college',
    imageUrl: '/images/college-friendship.jpg?v=3',
    placeholderName: 'college-friendship.jpg',
    caption: 'Our first college IV days — golden days of friendship.',
    handwrittenNote: 'Becoming someone I never wanted to lose...',
    location: 'Karpagam College Campus'
  },
  {
    id: 'm1i',
    title: 'Our College IV Days ❤️',
    date: 'College IV Trip',
    category: 'support',
    imageUrl: '/images/college-iv-water-care.jpg?v=1',
    placeholderName: 'college-iv-water-care.jpg',
    caption: 'Our college IV days — looking so tired, I brought water to you, looking so romantic.',
    handwrittenNote: 'Looking so tired, I bring water to you... looking so romantic ❤️',
    location: 'College IV Outing'
  },
  {
    id: 'm1h',
    title: 'Our First Ride Date ❤️',
    date: 'Special Ride Date',
    category: 'dates',
    imageUrl: '/images/our-first-ride-date.jpg?v=1',
    placeholderName: 'our-first-ride-date.jpg',
    caption: 'Our first ride date — I dropped you at the bus stand with my vehicle.',
    handwrittenNote: 'I dropped you at the bus stand with my vehicle... ❤️',
    location: 'Bus Stand Drop-off'
  },
  {
    id: 'm1f',
    title: 'Our Rathinam College Days ❤️',
    date: 'College Memories',
    category: 'college',
    imageUrl: '/images/rathinam-college-days.jpg?v=1',
    placeholderName: 'rathinam-college-days.jpg',
    caption: 'Our Rathinam College days — more fun and romantic days.',
    handwrittenNote: 'More fun and romantic days with you, Swasthika... ❤️',
    location: 'Rathinam College Campus'
  },
  {
    id: 'm1g',
    title: 'Our College Dhruva Days ❤️',
    date: 'Dhruva Fest Days',
    category: 'college',
    imageUrl: '/images/college-dhurva-days.jpg?v=1',
    placeholderName: 'college-dhurva-days.jpg',
    caption: 'Our college Dhruva days — college lovely days.',
    handwrittenNote: 'College lovely days with you, Swasthika... ❤️',
    location: 'Dhruva College Grounds'
  },
  {
    id: 'm1e',
    title: 'Our IV Mangalore Panambur Beach Day ❤️',
    date: 'College IV Trip',
    category: 'dates',
    imageUrl: '/images/mangalore-panambur-beach.jpg?v=1',
    placeholderName: 'mangalore-panambur-beach.jpg',
    caption: 'That day I promised you to bring again here to lead our life, and that day we exchanged our rings beside the beach.',
    handwrittenNote: 'Promised to bring you again here to lead our life... exchanged our rings by the beach ❤️',
    location: 'Mangalore Panambur Beach'
  },
  {
    id: 'm1c',
    title: 'Somewhere Between Friends & Love ❤️',
    date: 'October 2023',
    category: 'dates',
    imageUrl: '/images/college-event.jpg?v=3',
    placeholderName: 'college-event.jpg',
    caption: 'Carrying feelings inside and hoping you would understand what was in my heart.',
    handwrittenNote: 'One hint, one hope, and one step closer...',
    location: 'Coorg Outing'
  },
  {
    id: 'm1d',
    title: 'Our Imparathon Event Days ❤️',
    date: 'Early September 2024',
    category: 'laughs',
    imageUrl: '/images/vacation-reel-screenshot.jpg?v=3',
    placeholderName: 'vacation-reel-screenshot.jpg',
    caption: 'Our Imparathon Event Days — sending that special reel.',
    handwrittenNote: 'Was it a hint or was my heart just hoping?',
    location: 'Imparathon Event Days'
  },
  {
    id: 'm2',
    title: 'The Day I Proposed to Her ❤️',
    date: 'September 26, 2024',
    category: 'college',
    imageUrl: '/images/rotaract-memory-v10.jpg',
    placeholderName: 'rotaract-memory.jpg',
    caption: 'On this day I proposed to her ❤️',
    handwrittenNote: 'My heart was beating so fast!',
    location: 'Proposal Day'
  },
  {
    id: 'm3',
    title: 'The Beginning of Us ❤️',
    date: 'October 11, 2024',
    category: 'dates',
    imageUrl: '/images/our-first-call.jpg?v=3',
    placeholderName: 'our-first-call.jpg',
    caption: 'The night she said yes. Chatting until 3 AM and the morning call: "I love you too."',
    handwrittenNote: 'Best night of my life ❤️',
    location: 'Late Night Phone Call'
  },
  {
    id: 'm3b',
    title: 'Our Pongal 2025 Day ❤️',
    date: 'January 2025',
    category: 'photos',
    imageUrl: '/images/our-pongal-2025.jpg?v=1',
    placeholderName: 'our-pongal-2025.jpg',
    caption: 'Our Pongal 2025 day — our first photoshoot & pre-wedding photoshoot.',
    handwrittenNote: 'Our first photoshoot, pre-wedding photoshoot... looking like a dream ❤️',
    location: 'College Fest Grounds'
  },
  {
    id: 'm3c',
    title: 'Our Onam Celebration Day 2025 ❤️',
    date: 'September 2025',
    category: 'photos',
    imageUrl: '/images/our-onam-2025-celebration.jpg?v=1',
    placeholderName: 'our-onam-2025-celebration.jpg',
    caption: 'Our Onam celebration day 2025 — you look gorgeous that day, I always keep my hand over your waist.',
    handwrittenNote: 'You look gorgeous that day, I always keep my hand over your waist ❤️',
    location: 'Onam Celebration'
  },
  {
    id: 'm4',
    title: 'Our Pongal 2026 Celebration ❤️',
    date: 'January 2026',
    category: 'photos',
    imageUrl: '/images/our-pongal-celebration.jpg?v=1',
    placeholderName: 'our-pongal-celebration.jpg',
    caption: 'Our Pongal 2026 celebration — your saree looking more romantic.',
    handwrittenNote: 'Your saree looking more romantic Swasthika! ❤️',
    location: 'Pongal Celebration'
  },
  {
    id: 'm5',
    title: 'Our Onam 2026 Days ❤️',
    date: 'September 2026',
    category: 'photos',
    imageUrl: '/images/our-onam-2026-days.jpg?v=1',
    placeholderName: 'our-onam-2026-days.jpg',
    caption: 'Our Onam 2026 days — your waist looking so tempting to me, like you.',
    handwrittenNote: 'Your waist looking so tempt to me like u... ❤️',
    location: 'Onam 2026 Celebration'
  }
];
