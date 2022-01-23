import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../models/games/Game';
import { PaginatedList } from '../types/api';

interface GamesState {
  gamesList: PaginatedList<Game>;
}

// Define the initial state using that type
const initialState: GamesState = {
  gamesList: { page: 1, total: 0, items: [] },
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGamesList: (state, action: PayloadAction<PaginatedList<Game>>) => {
      state.gamesList = action.payload;
    }
  },
})

export const { setGamesList } = gamesSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default gamesSlice.reducer