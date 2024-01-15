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
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe'],
    correct: 'Blue Whale',
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
    question: 'In which year did the first manned moon landing occur?',
    options: ['1969', '1975', '1982'],
    correct: '1969',
  },
  {
    question: 'Which country is famous for its tulips?',
    options: ['Netherlands', 'Italy', 'Japan'],
    correct: 'Netherlands',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Seoul', 'Beijing', 'Tokyo'],
    correct: 'Tokyo',
  },
  {
    question: 'How many colors are there in a rainbow?',
    options: ['5', '7', '10'],
    correct: '7',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean'],
    correct: 'Pacific Ocean',
  },
  {
    question: 'Which animal is known as the "King of the Jungle"?',
    options: ['Lion', 'Tiger', 'Leopard'],
    correct: 'Lion',
  },
  {
    question: 'What is the square root of 64?',
    options: ['6', '8', '10'],
    correct: '8',
  },
  {
    question: 'Which is the largest planet in our solar system?',
    options: ['Mars', 'Jupiter', 'Saturn'],
    correct: 'Jupiter',
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra'],
    correct: 'Canberra',
  },
  {
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7'],
    correct: '6',
  },
];

export default QUESTIONS;
