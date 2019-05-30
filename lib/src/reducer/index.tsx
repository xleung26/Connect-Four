import { combineReducers } from 'redux'
import { playersMoveReducer, player1Turn, checkWin } from './gameReducer'

const rootReducer = combineReducers({
  playersMoveReducer,
  player1Turn,
  checkWin
})

export default rootReducer;