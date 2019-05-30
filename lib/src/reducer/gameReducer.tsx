import * as Redux from 'redux';

export const playersMoveReducer = (state = null, action) => {
  switch (action.type) {
  case 'PLAYERS_MOVE':
    return action.board
  default:
    return state;
  }
}

export const player1Turn = (state = true, action) => {
  switch (action.type) {
  case 'PLAYER1TURN':
    return action.turn;
  default:
    return state;
  }
}

export const checkWin = (state = 0, action) => {
  switch (action.type) {
  case 'CHECKWIN':
    return action.winner
  default:
    return state;
  }
}