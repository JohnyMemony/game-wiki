import React, { useEffect } from 'react';
import { useGamesListRequest } from '../../hooks/games-hooks';
import { GamesList } from '../../components/games/GamesList/GamesList';
import { useAppSelector } from '../../store/store-hooks';

export const HomePage: React.FC = () => {
  const { loadGamesList } = useGamesListRequest();
  const gamesState = useAppSelector(state => state.games);
  const { gamesList } = gamesState;

  useEffect(() => {
    loadGamesList();
  }, []);

  return (
    <div>
      <GamesList items={gamesList} />
    </div>
  );
};
