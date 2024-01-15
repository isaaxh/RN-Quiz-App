import {View} from 'react-native';
import React from 'react';
import {COLORS} from '../styles/colors';
import TextPara from './sharedUi/Texts/TextPara';
import CardButton from './sharedUi/Buttons/CardButton';
import TextHeader from './sharedUi/Texts/TextHeader';

type GameOverCardProps = {
  scores: number;
  totalQuestions: number;
  resetGame: () => void;
};

const GameOverCard = ({
  scores,
  totalQuestions,
  resetGame,
}: GameOverCardProps) => {
  const handleSubmit = () => {
    resetGame();
  };

  return (
    <View className="bg-white w-2/3 rounded shadow-2xl">
      <View className="px-6 py-8 items-center">
        <TextHeader color={COLORS.black}>Game Over!</TextHeader>
        <View className="items-center mt-2">
          <TextPara color={COLORS.black}>
            You have scored ({scores}/{totalQuestions})
          </TextPara>
        </View>
      </View>
      <CardButton text="Restart" handleSubmit={handleSubmit} />
    </View>
  );
};

export default GameOverCard;
