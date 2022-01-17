import React from 'react';
import { Game } from '../../../models/games/Game';

import './GameCard.scss';

interface Props {
  data: Game
}

export const GameCard: React.FC<Props> = (props) => {
  const { data } = props;
  const { name, background_image } = data;

  return (
    <div className="game-card">
      <div className="game-card__header">
        {!!background_image && <img src={background_image} alt="rover" />}
      </div>
      <div className="game-card__body">
        <span className="tag tag-teal">Technology</span>
        <h4>{name}</h4>
        {/*<p>*/}
        {/*  An exploration into the truck's polarising design*/}
        {/*</p>*/}
        {/*<div className="user">*/}
        {/*  <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"*/}
        {/*       alt="user" />*/}
        {/*  <div className="user-info">*/}
        {/*    <h5>July Dec</h5>*/}
        {/*    <small>2h ago</small>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
