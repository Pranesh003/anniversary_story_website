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
    date: 'September 2023',
    category: 'college',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'first-college-day.jpg',
    caption: 'Walking through college pathways, pretending I wasn\'t completely mesmerized by your smile.',
    handwrittenNote: 'Where it all started...',
    location: 'College Campus'
  },
  {
    id: 'm2',
    title: 'Rotaract Event Evening',
    date: 'October 2023',
    category: 'college',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'rotaract-memory.jpg',
    caption: 'Standing nervously next to you before holding your hand and confessing my heart.',
    handwrittenNote: 'My heart was beating so fast!',
    location: 'Auditorium'
  },
  {
    id: 'm3',
    title: 'Late Night 3 AM Laughter',
    date: 'October 11, 2023',
    category: 'dates',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'our-first-call.jpg',
    caption: 'The night she said yes. Chatting until 3 AM and the unforgettable morning call: "I love you too."',
    handwrittenNote: 'Best night of my life ❤️',
    location: 'Late Night Phone Call'
  },
  {
    id: 'm4',
    title: 'First Coffee Date',
    date: 'November 2023',
    category: 'dates',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'anniversary-memory-1.jpg',
    caption: 'Sharing hot coffee and endless stories while looking into your eyes.',
    handwrittenNote: 'Your smile lights up my whole world.',
    location: 'Campus Cafe'
  },
  {
    id: 'm5',
    title: 'Festival Celebrations',
    date: 'January 2024',
    category: 'photos',
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'festival-memory.jpg',
    caption: 'Dressed up in traditional clothes and taking a hundred pictures together.',
    handwrittenNote: 'You looked like a dream Kanmani.',
    location: 'College Fest'
  },
  {
    id: 'm6',
    title: 'Study Sessions & Secret Jokes',
    date: 'March 2024',
    category: 'laughs',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'study-session.jpg',
    caption: 'Pretending to study for exams while exchanging hilarious glances across the room.',
    handwrittenNote: 'Zero studying, 100% memories!',
    location: 'Library'
  },
  {
    id: 'm7',
    title: 'Rainy Day Umbrella Share',
    date: 'June 2024',
    category: 'support',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'rainy-day.jpg',
    caption: 'Sharing one small umbrella in sudden college rain so you wouldn\'t get soaked.',
    handwrittenNote: 'I got wet on one side, but I didn\'t care at all.',
    location: 'College Entrance'
  },
  {
    id: 'm8',
    title: 'First Anniversary Celebration',
    date: 'October 11, 2024',
    category: 'dates',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'anniversary-memory-2.jpg',
    caption: 'One full year of love, hand holding, and growing together.',
    handwrittenNote: '365 days of loving Swasthika.',
    location: 'Anniversary Date'
  },
  {
    id: 'm9',
    title: 'Late Night Apologies & Hugs',
    date: 'February 2025',
    category: 'support',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'support-moment.jpg',
    caption: 'When we fought over small things, then realized we couldn\'t stay mad for even an hour.',
    handwrittenNote: 'Choosing you, always.',
    location: 'Our Special Spot'
  },
  {
    id: 'm10',
    title: 'Second Anniversary — October 11, 2025',
    date: 'October 11, 2025',
    category: 'photos',
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop',
    placeholderName: 'second-anniversary.jpg',
    caption: 'Two complete years of our beautiful relationship. Ready for a lifetime more.',
    handwrittenNote: 'Happy 2nd Anniversary Swasthika! ❤️',
    location: '2nd Anniversary'
  }
];
