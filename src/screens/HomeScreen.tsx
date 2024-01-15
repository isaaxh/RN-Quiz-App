import React from 'react';
import {View} from 'react-native';
import QuestionCard from '../components/QuestionCard';
import QUESTIONS from '../constants/questions';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-indigo-50">
      {/* {QUESTIONS.map((question, index) => ( */}
      {/*   <QuestionCard key={index} question={question} /> */}
      {/* ))} */}
      <QuestionCard question={QUESTIONS[0]} />
    </View>
  );
};

export default HomeScreen;
