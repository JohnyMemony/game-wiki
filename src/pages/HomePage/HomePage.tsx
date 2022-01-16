import React, { useEffect } from 'react';
import { useGamesListRequest } from '../../hooks/games-hooks';

export const HomePage: React.FC = () => {
  const { loadGamesList } = useGamesListRequest();

  useEffect(() => {
    loadGamesList();
  }, []);

  return (
    <div>Home page</div>
  );
};
