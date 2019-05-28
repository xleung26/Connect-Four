import * as constants from '../constants'

export interface PlayersMove {
  type: constants.PLAYERS_MOVE;
}
export interface Turn {
  type: constants.TURN
}

export interface CheckWin {
  type: constants.CHECKWIN
}

export type GamesAction = PlayersMove | Turn | CheckWin

export function playersMove(): PlayersMove {
  return {
    type: constants.PLAYERS_MOVE
  }
}

export function turn(): Turn {
  return {
    type: constants.TURN
  }
}

export function checkWin(): CheckWin {
  return {
    type: constants.CHECKWIN
  }
}