import React from 'react';
import { Game } from '../../../models/games/Game';
import { Tag } from '../../_shared/Tag/Tag';

import './GameCard.scss';

interface Props {
  data: Game;
}

export const GameCard: React.FC<Props> = (props) => {
  const { data } = props;
  const { name, background_image, genres } = data;

  const renderGenres = () => {
    return genres.map((item) => <Tag text={item.name} color="purple" />);
  };

  return (
    <div className="game-card">
      <div className="game-card__header">
        {!!background_image && <img src={background_image} alt="" />}
      </div>
      <div className="game-card__body">
        <div className="game-card__genres">{renderGenres()}</div>
        <h4>{name}</h4>
      </div>
    </div>
  );
};
