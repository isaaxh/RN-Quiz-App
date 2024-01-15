import React, {useState} from 'react';
import {View} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import QUESTIONS from '../constants/questions';
import GameOverCard from '../components/GameOverCard';

const HomeScreen = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [scores, setScores] = useState(0);

  const handleScoreIncrement = () => {
    setScores(prev => prev + 1);
  };

  const showNextQuestion = () => {
    if (questionNum < QUESTIONS.length - 1) {
      setQuestionNum(prev => prev + 1);
      return;
    }
    setQuestionNum(-1);
  };

  const resetGame = () => {
    setQuestionNum(0);
    setScores(0);
  };
  return (
    <View className="flex-1 justify-center items-center bg-indigo-50">
      {questionNum !== -1 ? (
        <QuestionCard
          question={QUESTIONS[questionNum]}
          handlScoreIncrement={handleScoreIncrement}
          showNextQuestion={showNextQuestion}
        />
      ) : (
        <GameOverCard
          scores={scores}
          totalQuestions={QUESTIONS.length}
          resetGame={resetGame}
        />
      )}
    </View>
  );
};

export default HomeScreen;
