import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';

interface GamesState {
  gamesList: any[];
}

// Define the initial state using that type
const initialState: GamesState = {
  gamesList: [],
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
  },
})

export const {  } = gamesSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default gamesSlice.reducer