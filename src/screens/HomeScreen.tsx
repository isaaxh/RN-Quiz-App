import React, {useState} from 'react';
import {View} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import QUESTIONS from '../constants/questions';

const HomeScreen = () => {
  const [scores, setScores] = useState(0);
  return (
    <View className="flex-1 justify-center items-center bg-indigo-50">
      <QuestionCard question={QUESTIONS[0]} />
    </View>
  );
};

export default HomeScreen;
