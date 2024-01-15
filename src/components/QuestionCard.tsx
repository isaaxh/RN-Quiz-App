import {View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles/colors';
import TextNormal from './sharedUi/Texts/TextNormal';
import QUESTIONS, {QuestionType} from '../constants/questions';
import RadioButton from './sharedUi/Buttons/RadioButton';
import TextPara from './sharedUi/Texts/TextPara';

type QuestionCardProps = {
  question: QuestionType;
};

const QuestionCard = ({question}: QuestionCardProps) => {
  return (
    <View className="bg-white w-2/3 px-6 py-8 rounded shadow-2xl">
      <TextNormal color={COLORS.black}>{question.question}</TextNormal>
      <View className="items-center mt-2">
        <TextPara color={COLORS.black}>
          Select the correct answer ({QUESTIONS.indexOf(question) + 1}/
          {QUESTIONS.length})
        </TextPara>
      </View>
      <View className="px-1">
        {question.options.map((option, index) => (
          <RadioButton key={index} text={option} selected={false} />
        ))}
      </View>
    </View>
  );
};

export default QuestionCard;
