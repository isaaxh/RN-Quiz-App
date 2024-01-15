import {View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../styles/colors';
import TextNormal from './sharedUi/Texts/TextNormal';
import QUESTIONS, {QuestionType} from '../constants/questions';
import RadioButton from './sharedUi/Buttons/RadioButton';
import TextPara from './sharedUi/Texts/TextPara';
import CardButton from './sharedUi/Buttons/CardButton';

type QuestionCardProps = {
  question: QuestionType;
  handlScoreIncrement: () => void;
  showNextQuestion: () => void;
};

const QuestionCard = ({
  question,
  handlScoreIncrement,
  showNextQuestion,
}: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setMessage('');
  };

  const handleSubmit = (answer: string) => {
    if (answer === '') {
      setMessage('Please select an answer');
      return;
    }
    if (answer === question.correct) {
      setMessage('Correct Answer');
      handlScoreIncrement();
    } else {
      setMessage('Wrong Answer');
    }
    setDisabled(true);
    setTimeout(() => {
      showNextQuestion();
      setMessage('');
      setSelectedOption('');
      setDisabled(false);
    }, 2000);
  };

  return (
    <View className="bg-white w-2/3 rounded shadow-2xl">
      <View className="px-6 py-8">
        <TextNormal color={COLORS.black}>{question.question}</TextNormal>
        <View className="items-center mt-2">
          <TextPara color={COLORS.black}>
            Select the correct answer ({QUESTIONS.indexOf(question) + 1}/
            {QUESTIONS.length})
          </TextPara>
          {message === '' ? null : (
            <TextPara
              color={
                message === 'Correct Answer' ? COLORS.success : COLORS.error
              }>
              {message}
            </TextPara>
          )}
        </View>
        <View className="px-1">
          {question.options.map((option, index) => (
            <RadioButton
              key={index}
              text={option}
              disabled={disabled}
              selected={option === selectedOption}
              handleOptionSelect={handleOptionSelect}
            />
          ))}
        </View>
      </View>
      <CardButton
        text="Submit"
        disabled={disabled}
        handleSubmit={() => handleSubmit(selectedOption)}
      />
    </View>
  );
};

export default QuestionCard;
