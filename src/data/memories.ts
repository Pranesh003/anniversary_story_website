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
    title: 'First Campus Stroll',
    date: 'September 19, 2023',
    category: 'college',
    imageUrl: '/images/first-college-day.jpg?v=3',
    placeholderName: 'first-college-day.jpg',
    caption: 'Walking through college pathways, mesmerized by your smile.',
    handwrittenNote: 'Where it all started...',
    location: 'College Campus'
  },
  {
    id: 'm1b',
    title: 'Friendship Before Love',
    date: 'Late September 2023',
    category: 'college',
    imageUrl: '/images/college-friendship.jpg?v=3',
    placeholderName: 'college-friendship.jpg',
    caption: 'Our first college IV days',
    handwrittenNote: 'Becoming someone I never wanted to lose...',
    location: 'Karpagam College Campus'
  },
  {
    id: 'm1i',
    title: 'Our College IV Days — Caring for You ❤️',
    date: 'College IV Trip',
    category: 'support',
    imageUrl: '/images/college-iv-water-care.jpg?v=1',
    placeholderName: 'college-iv-water-care.jpg',
    caption: 'During our college IV trip, seeing you so tired and bringing water for you — a moment of care that felt so romantic and real.',
    handwrittenNote: 'Bringing you water when you were tired on our IV trip... always caring for you ❤️',
    location: 'College IV Outing'
  },
  {
    id: 'm1h',
    title: 'Our First Ride Date ❤️',
    date: 'Special Ride Date',
    category: 'dates',
    imageUrl: '/images/our-first-ride-date.jpg?v=1',
    placeholderName: 'our-first-ride-date.jpg',
    caption: 'Our first ride date — taking you on my vehicle and dropping you at the bus stand with a heart full of happiness.',
    handwrittenNote: 'Dropping you at the bus stand after our very first ride date... ❤️',
    location: 'Bus Stand Drop-off'
  },
  {
    id: 'm1f',
    title: 'Our Rathinam College Days ❤️',
    date: 'College Memories',
    category: 'college',
    imageUrl: '/images/rathinam-college-days.jpg?v=1',
    placeholderName: 'rathinam-college-days.jpg',
    caption: 'Our Rathinam College days filled with so much fun, laughter, and romantic moments together.',
    handwrittenNote: 'More fun and romantic days with you Swasthika... ❤️',
    location: 'Rathinam College Campus'
  },
  {
    id: 'm1g',
    title: 'Our Dhruva College Days ❤️',
    date: 'Dhruva Fest Days',
    category: 'college',
    imageUrl: '/images/college-dhurva-days.jpg?v=1',
    placeholderName: 'college-dhurva-days.jpg',
    caption: 'Our Dhruva fest college days — sitting back to back on the grass, sharing smiles and lovely moments together.',
    handwrittenNote: 'College lovely days with you, Swasthika... ❤️',
    location: 'Dhruva College Grounds'
  },
  {
    id: 'm1e',
    title: 'Mangalore Panambur Beach Day ❤️',
    date: 'College IV Trip',
    category: 'dates',
    imageUrl: '/images/mangalore-panambur-beach.jpg?v=1',
    placeholderName: 'mangalore-panambur-beach.jpg',
    caption: 'That day I promised to bring you back here to lead our life together, and we exchanged our rings beside the beach waves.',
    handwrittenNote: 'Exchanging rings by the ocean waves, promising a lifetime together... ❤️',
    location: 'Mangalore Panambur Beach'
  },
  {
    id: 'm1c',
    title: 'Somewhere Between Friends & Love',
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
    title: 'Was That a Hint?',
    date: 'Early September 2024',
    category: 'laughs',
    imageUrl: '/images/vacation-reel-screenshot.jpg?v=3',
    placeholderName: 'vacation-reel-screenshot.jpg',
    caption: 'Our Imparathon Event Days',
    handwrittenNote: 'Was it a hint or was my heart just hoping?',
    location: 'Imparathon Event Days'
  },
  {
    id: 'm2',
    title: 'Our Golden Days of Friendship ❤️',
    date: 'September 26, 2024',
    category: 'college',
    imageUrl: '/images/rotaract-memory-v10.jpg',
    placeholderName: 'rotaract-memory.jpg',
    caption: 'Our Golden Days of Friendship ❤️',
    handwrittenNote: 'My heart was beating so fast!',
    location: 'Special College Moment'
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
    title: 'Our Pongal 2025 — First Photoshoot ❤️',
    date: 'January 2025',
    category: 'photos',
    imageUrl: '/images/our-pongal-2025.jpg?v=1',
    placeholderName: 'our-pongal-2025.jpg',
    caption: 'Our Pongal 2025 Day — Our first special photoshoot & pre-wedding vibes.',
    handwrittenNote: 'Our very first photoshoot together... looking like a dream ❤️',
    location: 'College Fest Grounds'
  },
  {
    id: 'm3c',
    title: 'Our Onam Celebration Day 2025 ❤️',
    date: 'September 2025',
    category: 'photos',
    imageUrl: '/images/our-onam-2025-celebration.jpg?v=1',
    placeholderName: 'our-onam-2025-celebration.jpg',
    caption: 'Our Onam Celebration Day 2025 — You looked gorgeous in your saree, and I always love keeping my arm around your waist.',
    handwrittenNote: 'You looked gorgeous that day, Swasthika... always holding you close ❤️',
    location: 'Onam Celebration'
  },
  {
    id: 'm4',
    title: 'Our Pongal 2026 Celebration ❤️',
    date: 'January 2026',
    category: 'photos',
    imageUrl: '/images/our-pongal-celebration.jpg?v=1',
    placeholderName: 'our-pongal-celebration.jpg',
    caption: 'Our Pongal 2026 Celebration',
    handwrittenNote: 'Your saree looking more romantic Swasthika! ❤️',
    location: 'Pongal Celebration'
  }
];
