import React, {useState} from 'react';
import {View} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import QUESTIONS from '../constants/questions';

const HomeScreen = () => {
  const [scores, setScores] = useState(0);
  const handlScores = () => {
    setScores(prev => prev + 1);
  };
  return (
    <View className="flex-1 justify-center items-center bg-indigo-50">
      <QuestionCard
        question={QUESTIONS[0]}
        scores={scores}
        handlScores={handlScores}
      />
    </View>
  );
};

export default HomeScreen;
