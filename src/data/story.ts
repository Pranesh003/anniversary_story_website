export interface StoryChapterData {
  id: number;
  chapterNumber: string;
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  content: string[];
  handwrittenCaption: string;
  highlightText?: string;
  imagePlaceholderName: string;
  defaultImageUrl: string;
  imageCaption: string;
  theme: 'cream' | 'scrapbook' | 'rose' | 'midnight' | 'gold' | 'sunset';
  badge: string;
}

export const STORY_CHAPTERS: StoryChapterData[] = [
  {
    id: 1,
    chapterNumber: "01",
    title: "Before You Knew",
    subtitle: "The First Sight",
    date: "September 19, 2023",
    location: "College Campus Corridor",
    badge: "The Beginning",
    content: [
      "September 19, 2023. My first day at college.",
      "I saw you that day, Swasthika. I didn't tell you, and I didn't even know how to explain what I felt. But somewhere inside me, something had already started.",
      "You were just a person I had seen at college, but without knowing it, you had become someone special in my heart.",
      "You didn't know about my feelings. You didn't know that one day, I would look back at that first day and realize how important it was.",
      "That was the beginning of my story with you."
    ],
    handwrittenCaption: "If only I had known where this first sight would take me.",
    highlightText: "You didn't know it then, but my story had already started with you.",
    imagePlaceholderName: "first-college-day.jpg",
    defaultImageUrl: "/images/first-college-day.jpg?v=3",
    imageCaption: "First Day at College — September 19, 2023",
    theme: "cream"
  },
  {
    id: 2,
    chapterNumber: "02",
    title: "When Friendship Became Special",
    subtitle: "Friendship Before Love",
    date: "Late September - Early October 2023",
    badge: "Building Connection",
    content: [
      "Days passed, and slowly, we became friends.",
      "We talked, shared things, helped each other, and supported each other whenever we needed it. We were friends, and those simple moments started becoming important to me.",
      "Sometimes we wouldn't talk for a few days. But even then, something felt different. I would miss talking to you, and those silent days didn't feel as normal as they should have.",
      "There were little moments of care, little signs of missing each other, and feelings that neither of us fully explained.",
      "I didn't realize when our friendship became such an important part of my life. Without even trying, you were becoming someone I never wanted to lose."
    ],
    handwrittenCaption: "Some people slowly become a part of your everyday life. Then one day, you realize you miss them whenever they're not there.",
    highlightText: "Without even trying, you were becoming someone I never wanted to lose.",
    imagePlaceholderName: "college-friendship.jpg",
    defaultImageUrl: "/images/college-friendship.jpg?v=3",
    imageCaption: "Unspoken care in everyday college conversations",
    theme: "scrapbook"
  },
  {
    id: 3,
    chapterNumber: "03",
    title: "Somewhere Between Friends and Love",
    subtitle: "Two Months of Hidden Feelings",
    date: "October 2023",
    badge: "Hidden Feelings",
    content: [
      "After being friends, I slowly began to understand how much you meant to me.",
      "I invited you to participate in a college event. It might have seemed like a small thing, but for me, it became one of the moments that brought my feelings closer to the surface.",
      "My friendship with you was slowly becoming something more.",
      "For almost two months, I carried my feelings inside me. I started giving you little hints. I wanted you to understand what I felt, but at the same time, I was nervous about telling you directly.",
      "I kept wondering what you would say, whether you felt the same, and whether I was ready to take that step."
    ],
    handwrittenCaption: "One hint, one hope, and one step closer to you.",
    highlightText: "I wanted to tell you everything, but finding the right words was not easy.",
    imagePlaceholderName: "college-event.jpg",
    defaultImageUrl: "/images/college-event.jpg?v=3",
    imageCaption: "The College Event Invitation",
    theme: "rose"
  },
  {
    id: 4,
    chapterNumber: "04",
    title: "Was That a Hint?",
    subtitle: "The Reel That Made Me Wonder",
    date: "Early October 2023",
    badge: "The Turning Point",
    content: [
      "One day, when you had gone home for a vacation, you sent me a reel.",
      "I remember how confused and nervous I felt. I kept wondering what it meant.",
      "Was it just a normal reel? Were you trying to tell me something? Did you really like me, or was my heart simply hoping for an answer?",
      "That little moment made me think differently. For the first time, I started feeling that maybe I wasn't the only one who had something special in my heart.",
      "I didn't know what would happen next, but I knew I wanted to be brave enough to tell you how I felt."
    ],
    handwrittenCaption: "Was this a hint, Swasthika, or was my heart just hoping?",
    highlightText: "Maybe this was the hint my heart had been waiting for.",
    imagePlaceholderName: "vacation-reel-screenshot.jpg",
    defaultImageUrl: "/images/vacation-reel-screenshot.jpg?v=3",
    imageCaption: "The Vacation Reel Message",
    theme: "cream"
  },
  {
    id: 5,
    chapterNumber: "05",
    title: "The Words I Couldn't Say Properly",
    subtitle: "My First Confession",
    date: "October 2023",
    location: "Rotaract Club Inauguration",
    badge: "The Confession",
    content: [
      "Finally, I decided to take a step.",
      "During our college Rotaract Club inauguration, I held your hand and tried to express what I had been keeping inside me.",
      "I was nervous. I was confused. I didn't know how to say everything properly. But I wanted you to know.",
      "I told you that I loved you, Swasthika.",
      "I still remember the way your face turned red and how you looked at me in surprise. In that moment, I had finally said the words I had been carrying in my heart.",
      "I had imagined telling you so many times, but the real moment was completely different.",
      "I had confessed my love, but I still didn't know what your answer would be. And so, my heart kept waiting."
    ],
    handwrittenCaption: "I didn't say it perfectly. I just meant every word.",
    highlightText: "I had so much to say, but when I stood in front of you, my heart knew more than my words.",
    imagePlaceholderName: "rotaract-memory.jpg",
    defaultImageUrl: "/images/rotaract-memory.jpg?v=3",
    imageCaption: "Rotaract Club Inauguration Day",
    theme: "gold"
  },
  {
    id: 6,
    chapterNumber: "06",
    title: "One Heart, So Many Questions",
    subtitle: "The Waiting Period",
    date: "October 2023",
    badge: "Waiting & Hope",
    content: [
      "Days passed, and I was still waiting for your answer.",
      "I kept trying to show you how much I loved you. I made efforts, tried to impress you, and hoped that one day you would understand everything I couldn't express in words.",
      "You would sometimes say, 'Give me one reason to love you, Pranesh.'",
      "And every time, I wanted to show you that my feelings were real. I didn't want to give up on expressing my love. I wanted you to know that you mattered to me.",
      "That waiting period was full of confusion, hope, nervousness, and so many feelings I couldn't put into words."
    ],
    handwrittenCaption: "Give me one reason to love you, Pranesh...",
    highlightText: "Every moment of waiting was proof of how deeply I cared.",
    imagePlaceholderName: "waiting-calendar-memory.jpg",
    defaultImageUrl: "/images/waiting-calendar-memory-v8.jpg",
    imageCaption: "Days of Hope & Nervous Anticipation",
    theme: "cream"
  },
  {
    id: 7,
    chapterNumber: "07",
    title: "The Night That Changed Everything",
    subtitle: "The Midnight Conversation",
    date: "October 10, 2023",
    badge: "The Midnight Turning Point",
    content: [
      "October 10, 2023.",
      "We were chatting as usual, talking about my feelings and how confused I was about expressing my love to you.",
      "But that night, everything felt more serious. There was pressure, uncertainty, and so many emotions between us. It felt like an endless night.",
      "I didn't know what was going to happen. I only knew how much I wanted you to understand my heart.",
      "And then, sometime during that night, everything began to change.",
      "You were ready to accept my love. The waiting, the confusion, and the questions were finally giving way to something beautiful.",
      "As the night moved into October 11, my life was about to become very different."
    ],
    handwrittenCaption: "Some nights become memories that stay with us forever.",
    highlightText: "From darkness into the quiet magic of midnight...",
    imagePlaceholderName: "starry-midnight.jpg",
    defaultImageUrl: "/images/starry-midnight.jpg?v=3",
    imageCaption: "October 10, 2023 — The Midnight Sky",
    theme: "midnight"
  },
  {
    id: 8,
    chapterNumber: "08",
    title: "The Beginning of Us",
    subtitle: "She Said Yes!",
    date: "October 11, 2023",
    badge: "FOREVER BEGINS",
    content: [
      "October 11, 2023.",
      "The moment I had been hoping for finally came. You accepted my love and expressed your love to me, too!",
      "I can't fully explain how happy I felt. At that moment, I felt like the happiest person in the world.",
      "After all the waiting, the nervousness, and the effort to tell you what was in my heart, I finally had something I had been wishing for: the beginning of our love story.",
      "We stayed awake until around 3 AM, chatting, laughing, and playing together. I didn't want that night to end.",
      "Later, you told me to tell you my love through a phone call.",
      "After getting a little sleep, I called you. And then I finally said those words to you:",
      "\"I love you too.\"",
      "Those words became more than a confession. They became the beginning of our journey together.",
      "From that moment, it was no longer only my story about loving you. It was OUR story."
    ],
    handwrittenCaption: "3 AM laughter, a morning phone call, and three words that changed everything.",
    highlightText: "I LOVE YOU TOO",
    imagePlaceholderName: "our-first-call.jpg",
    defaultImageUrl: "/images/our-first-call.jpg?v=3",
    imageCaption: "October 11, 2023 — The Beginning of Us",
    theme: "rose"
  },
  {
    id: 9,
    chapterNumber: "09",
    title: "Two Years, A Thousand Little Memories",
    subtitle: "Two Years of Us",
    date: "October 11, 2023 – October 11, 2025",
    badge: "Our Memory Scrapbook",
    content: [
      "Two years of laughter, late night calls, college dates, silly fights, heartfelt apologies, and unconditional support.",
      "Every picture tells a story of how we grew together, learned each other's quirks, and built a foundation of trust and love.",
      "Here is a scrapbook of our journey over these two beautiful years."
    ],
    handwrittenCaption: "Every single day with you is my favorite memory.",
    highlightText: "Two years of choosing each other, every single day.",
    imagePlaceholderName: "anniversary-memory-1.jpg",
    defaultImageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Two Years of Cherished Memories",
    theme: "scrapbook"
  },
  {
    id: 10,
    chapterNumber: "10",
    title: "Our Dreams, Our Future",
    subtitle: "Better Days Are Coming",
    date: "Forever & Always",
    badge: "The Next Chapter",
    content: [
      "Kanmani, we've already shared so many feelings and memories, and I believe there are many more beautiful days waiting for us.",
      "I want to work hard, get a good job, build a better future, and work toward the dreams we talk about.",
      "I want us to support each other, celebrate each other's achievements, and face life's difficult days together.",
      "One day, I hope we can look back at this journey and smile at how far we have come.",
      "I don't expect every day to be perfect. I just hope we keep understanding each other, growing together, and choosing each other.",
      "Better days are coming for us.",
      "And I hope that, through all those days, I get to keep holding your hand."
    ],
    handwrittenCaption: "Our story isn't over yet... ❤️",
    highlightText: "Hand in hand towards all our dreams.",
    imagePlaceholderName: "future-sunset-dreams.jpg",
    defaultImageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Looking Toward Our Future Together",
    theme: "sunset"
  }
];
