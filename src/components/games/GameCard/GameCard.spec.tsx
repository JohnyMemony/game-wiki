import React from 'react';
import { shallow } from 'enzyme';
import { GameCard } from './GameCard';
import { Game } from '../../../models/games/Game';

describe('GameCard component', () => {
  it('should render empty GameCard component', function () {
    const component = shallow(<GameCard data={new Game()} />);
    const image = component.find('.game-card__header img');

    expect(image).toHaveLength(0);
  });

  it('should render filled GameCard component', function () {
    const game = new Game();

    game.background_image = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg';
    game.name = 'Witcher';

    const component = shallow(<GameCard data={game} />);
    const image = component.find('.game-card__header img');
    const name = component.find('.game-card h4');

    expect(image).toHaveLength(1);
    expect(image.prop('src')).toBe(game.background_image);
    expect(name).toHaveLength(1);
    expect(name.text()).toBe(game.name);
  });
});