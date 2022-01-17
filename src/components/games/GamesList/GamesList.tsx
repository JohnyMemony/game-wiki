import React from 'react';
import { GameCard } from '../GameCard/GameCard';
import { Game } from '../../../models/games/Game';

import './GamesList.scss';

interface Props {
  items: Game[];
}

export const GamesList: React.FC<Props> = (props) => {
  const { items } = props;

  const renderItems = () => {
    return items.map((item, index) => {
      return <GameCard data={item} key={index} />;
    });
  };

  return (
    <div className="games-list">
      {renderItems()}
    </div>
  );
};
