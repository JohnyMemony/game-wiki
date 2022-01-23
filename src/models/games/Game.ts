import { GameGenre } from './GameGenre';

export class Game {
  id: number = 0;
  added: number = 0;
  background_image: string = '';
  name: string = '';
  genres: GameGenre[] = [];
}


