import * as React from 'react';

export interface Props {
  board: Array<Array<number>>;
  turn: number;
  winner: number;
}

const App = ({
  board,
  turn,
  winner,
  handlePlayersMove,
  handleTurn,
  handleCheckWin
}) => (
  <div>

  </div>
)

export default App;
