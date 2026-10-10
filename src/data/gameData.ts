export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "When did our story begin with that first special sight at college?",
    options: [
      "September 19, 2023",
      "October 11, 2023",
      "January 1, 2024",
      "December 25, 2023"
    ],
    correctIndex: 0,
    explanation: "September 19, 2023 was the first day I saw you in the college corridor!"
  },
  {
    id: 2,
    question: "Where did I try to express my feelings by holding your hand?",
    options: [
      "At a movie theatre",
      "During our college Rotaract Club event / proposal day",
      "At a restaurant",
      "At a shopping mall"
    ],
    correctIndex: 1,
    explanation: "On September 26, 2024, I held your hand and finally confessed my love!"
  },
  {
    id: 3,
    question: "What did I keep trying to tell you?",
    options: [
      "I wanted a new phone",
      "I wanted to travel alone",
      "I loved you",
      "I wanted to change colleges"
    ],
    correctIndex: 2,
    explanation: "My heart was trying to tell you 'I love you' all along!"
  },
  {
    id: 4,
    question: "Which night became an important turning point in our story?",
    options: [
      "October 10, 2024, continuing into October 11",
      "December 25, 2023",
      "February 14, 2024",
      "January 1, 2024"
    ],
    correctIndex: 0,
    explanation: "October 10 night into October 11 midnight when you said yes!"
  },
  {
    id: 5,
    question: "What do I want most for our future?",
    options: [
      "To forget our memories",
      "To stop talking",
      "To build a beautiful future together",
      "To stop making memories"
    ],
    correctIndex: 2,
    explanation: "To work hard, hold your hand, and build our dream future together!"
  }
];

export const FINAL_LETTER_TEXT = `My love, you did it! ❤️

This little game was just a small way to remind you how special you are to me.

Our story started with a simple first sight at college. Slowly, our friendship became something beautiful, and on October 11, 2024, our love story truly began.

Since then, we have created so many memories, and I hope there are many more waiting for us.

I want to work hard, build a better future, and make more beautiful memories with you.

Better days are coming for us, my love.

Now, are you ready to relive our story?`;
