import React from 'react';
import { GameCard } from '../GameCard/GameCard';
import { Game } from '../../../models/games/Game';
import { Pagination } from '../../_shared/Pagination/Pagination';

import './GamesList.scss';

interface Props {
  items: Game[];
  page: number;
  total: number;
  onPageChange(page: number): void;
}

export const GamesList: React.FC<Props> = (props) => {
  const { items, page, total, onPageChange } = props;

  const renderItems = () => {
    return items.map((item, index) => {
      return <GameCard data={item} key={index} />;
    });
  };

  return (
    <div className="games-list">
      <div className="games-list__items">{renderItems()}</div>
      <div className="games-list__pagination">
        <Pagination page={page} total={total} onChange={onPageChange} />
      </div>
    </div>
  );
};
