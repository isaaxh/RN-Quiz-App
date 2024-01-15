export type QuestionType = {
  question: string;
  options: string[];
  correct: string;
};

export type QuestionsType = QuestionType[];

const QUESTIONS = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris'],
    correct: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter'],
    correct: 'Mars',
  },
  {
    question: 'How many continents are there on Earth?',
    options: ['5', '6', '7'],
    correct: '7',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    options: ['Tomato', 'Avocado', 'Onion'],
    correct: 'Avocado',
  },
  {
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7'],
    correct: '6',
  },
];

export default QUESTIONS;
