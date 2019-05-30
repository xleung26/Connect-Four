import * as constants from '../constants'

export interface PlayersMove {
  type: constants.PLAYERS_MOVE;
  board: Array<Array<number>>
}
export interface Turn {
  type: constants.PLAYER1TURN;
  turn: boolean;
}

export interface CheckWin {
  type: constants.CHECKWIN;
  winner: number;
}

export function playersMove(board): PlayersMove {
  return {
    type: constants.PLAYERS_MOVE,
    board: board
  }
}

export function player1Turn(): Turn {
  return {
    type: constants.PLAYER1TURN,
    turn: true
  }
}

export function checkWin(): CheckWin {
  return {
    type: constants.CHECKWIN,
    winner: 0
  }
}