import { Http } from '../services/http';
import { API_ENDPOINTS } from '../constants/api';
import { UtilsApi } from '../utils/UtilsApi';
import { ApiResponse } from '../types/api';
import { Game } from '../models/games/Game';
import { setGamesList } from '../store/games-store';
import { useAppDispatch } from '../store/store-hooks';

export function useGamesListRequest() {
  const dispatch = useAppDispatch();

  const loadGamesList = async () => {
    const params = {
      page: 0,
      page_size: 10,
    }
    const url = UtilsApi.getMainApiUrl(API_ENDPOINTS.GAMES_LIST, params)
    const res: ApiResponse<Game[]> = await Http.get(url);

    dispatch(setGamesList(res.results));
  };

  return {loadGamesList};
}
