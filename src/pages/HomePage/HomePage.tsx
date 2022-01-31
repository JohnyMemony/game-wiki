import React, { useEffect } from 'react';
import { useGamesListRequest } from '../../hooks/games-hooks';
import { GamesList } from '../../components/games/GamesList/GamesList';
import { useAppSelector } from '../../store/store-hooks';
import { Loader } from '../../components/_shared/Loader/Loader';

export const HomePage: React.FC = () => {
  const { loadGamesList, isLoading } = useGamesListRequest();
  const gamesState = useAppSelector(state => state.games);
  const { gamesList } = gamesState;
  const { page, items, total } = gamesList;

  useEffect(() => {
    loadGamesList(page);
  }, []);

  const handlePageChange = (newPage: number) => {
    loadGamesList(newPage);
  };

  return (
    <div>
      {!isLoading
        ? <Loader centered />
        : (
          <GamesList
            items={items}
            page={page}
            total={total}
            onPageChange={handlePageChange}
          />
        )}
    </div>
  );
};
