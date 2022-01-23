import { Http } from '../services/http';
import { API_ENDPOINTS } from '../constants/api';
import { UtilsApi } from '../utils/UtilsApi';
import { ApiResponse, PaginatedList } from '../types/api';
import { Game } from '../models/games/Game';
import { setGamesList } from '../store/games-store';
import { useAppDispatch } from '../store/store-hooks';
import { useState } from 'react';

export function useGamesListRequest() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loadGamesList = async (page: number) => {
    setIsLoading(true);

    const params = {
      page,
      page_size: 12,
    }
    const url = UtilsApi.getMainApiUrl(API_ENDPOINTS.GAMES_LIST, params)
    const res: ApiResponse<Game[]> = await Http.get(url);

    if (res) {
      const { count, results } = res;
      const list: PaginatedList<Game> = {
        page,
        total: count,
        items: results,
      }

      dispatch(setGamesList(list));
    }

    setIsLoading(false);
  };

  return { loadGamesList, isLoading };
}
